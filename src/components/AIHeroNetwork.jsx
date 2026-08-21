import { useEffect, useRef } from "react";
import * as THREE from "three";

const COLORS = [0x087f7a, 0x3568c9, 0x7653c7];

export default function AIHeroNetwork({ className = "" }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let width = mount.clientWidth;
    let height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    camera.position.set(0, 0, 42);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "low-power",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // ---- Particle nodes ----
    const NODE_COUNT = 90;
    const nodePositions = [];
    const nodes = new THREE.Group();

    for (let i = 0; i < NODE_COUNT; i++) {
      const radius = 16 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta) * 0.75;
      const z = radius * Math.cos(phi);
      nodePositions.push(new THREE.Vector3(x, y, z));
    }

    const nodeGeometry = new THREE.SphereGeometry(0.16, 8, 8);
    nodePositions.forEach((pos, i) => {
      const color = COLORS[i % COLORS.length];
      const mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.85 });
      const mesh = new THREE.Mesh(nodeGeometry, mat);
      mesh.position.copy(pos);
      nodes.add(mesh);
    });
    group.add(nodes);

    // ---- Connections between nearby nodes ----
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = [];
    const maxDist = 9;
    const connections = [];

    for (let i = 0; i < nodePositions.length; i++) {
      for (let j = i + 1; j < nodePositions.length; j++) {
        const d = nodePositions[i].distanceTo(nodePositions[j]);
        if (d < maxDist && Math.random() > 0.55) {
          linePositions.push(
            nodePositions[i].x, nodePositions[i].y, nodePositions[i].z,
            nodePositions[j].x, nodePositions[j].y, nodePositions[j].z
          );
          connections.push([nodePositions[i], nodePositions[j]]);
        }
      }
    }
    lineGeometry.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x3568c9, transparent: true, opacity: 0.14 });
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    group.add(lines);

    // ---- Central AI core ----
    const coreGeometry = new THREE.IcosahedronGeometry(3.4, 1);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0x087f7a,
      wireframe: true,
      transparent: true,
      opacity: 0.55,
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    group.add(core);

    const coreGlowGeometry = new THREE.IcosahedronGeometry(2.6, 1);
    const coreGlowMaterial = new THREE.MeshBasicMaterial({ color: 0x3568c9, transparent: true, opacity: 0.12 });
    const coreGlow = new THREE.Mesh(coreGlowGeometry, coreGlowMaterial);
    group.add(coreGlow);

    // ---- Moving data packets along a subset of connections ----
    const PACKET_COUNT = Math.min(18, connections.length);
    const packetGeometry = new THREE.SphereGeometry(0.28, 8, 8);
    const packets = [];
    const usedConnections = connections
      .slice()
      .sort(() => Math.random() - 0.5)
      .slice(0, PACKET_COUNT);

    usedConnections.forEach((pair, i) => {
      const color = COLORS[i % COLORS.length];
      const mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.9 });
      const mesh = new THREE.Mesh(packetGeometry, mat);
      group.add(mesh);
      packets.push({
        mesh,
        from: pair[0],
        to: pair[1],
        t: Math.random(),
        speed: 0.003 + Math.random() * 0.004,
      });
    });

    // ---- Lighting (cheap, MeshBasicMaterial doesn't need it, kept minimal) ----

    // ---- Mouse parallax ----
    const mouse = { x: 0, y: 0 };
    const handleMouseMove = (e) => {
      const rect = mount.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    };
    window.addEventListener("mousemove", handleMouseMove);

    let frameId;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      group.rotation.y = elapsed * 0.06 + mouse.x * 0.35;
      group.rotation.x = mouse.y * 0.2;

      core.rotation.y = elapsed * 0.25;
      core.rotation.x = elapsed * 0.15;
      coreGlow.rotation.y = -elapsed * 0.18;

      const pulse = 1 + Math.sin(elapsed * 1.4) * 0.05;
      core.scale.setScalar(pulse);
      coreGlow.scale.setScalar(pulse * 1.05);

      packets.forEach((p) => {
        p.t += p.speed;
        if (p.t > 1) p.t = 0;
        p.mesh.position.lerpVectors(p.from, p.to, p.t);
      });

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      width = mount.clientWidth;
      height = mount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      nodeGeometry.dispose();
      lineGeometry.dispose();
      coreGeometry.dispose();
      coreGlowGeometry.dispose();
      packetGeometry.dispose();
      scene.traverse((obj) => {
        if (obj.material) obj.material.dispose();
      });
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className={className} style={{ width: "100%", height: "100%" }} />;
}
