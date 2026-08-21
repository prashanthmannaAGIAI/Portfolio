// ============================================================
// CONTENT DATA
// Sourced from Prashanth's resume and the live products he
// supports. No fabricated employers, certifications, awards,
// or metrics — only what's documented.
// ============================================================

export const CAREER = [
  {
    year: "2019 – 2024",
    company: "Colruyt Group",
    roles: ["Operational System Engineer"],
    summary:
      "Enterprise infrastructure and operations supporting internal applications and services hosted on company-owned servers and internal data-center infrastructure. Primarily on-premises rather than public cloud, but built the foundation in production operations, deployments, and troubleshooting that carried directly into cloud and DevOps engineering.",
    responsibilities: [
      "Supported enterprise servers and applications running in internal data-center environments",
      "Deployed applications and services onto company-managed and internally hosted servers",
      "Performed application deployment, server configuration, system maintenance, and operational support",
      "Monitored system and application health and investigated production issues",
      "Troubleshot server, application, deployment, connectivity, and infrastructure-related incidents",
      "Analyzed logs and system behavior to identify root causes and restore services",
      "Worked within enterprise incident-management and change-management processes",
    ],
    technologies: ["Linux", "Windows Server", "Networking", "Enterprise Deployments", "Production Support"],
  },
  {
    year: "2024 – Present",
    company: "ThinkHat.ai",
    roles: ["Cloud & DevOps Engineer"],
    summary:
      "Designing, deploying, automating, securing, and supporting infrastructure across multiple products — NOKI, Samaras, Socratic AI, and The Supper — primarily on Google Cloud Platform, with AWS infrastructure work as well.",
    products: ["NOKI", "Samaras", "Socratic AI", "The Supper"],
    responsibilities: [
      "Design, deploy, maintain, and troubleshoot cloud infrastructure across development, staging, and production environments",
      "Manage cloud workloads primarily on Google Cloud Platform (GCP) and work with AWS cloud infrastructure",
      "Build and maintain automated CI/CD pipelines using GitHub, GitHub Actions, Google Cloud Build, and Git-based workflows",
      "Containerize applications using Docker and manage production-ready container images through Google Artifact Registry",
      "Deploy and support containerized applications using Google Cloud Run and cloud-native infrastructure",
      "Develop and maintain Terraform-based Infrastructure as Code for repeatable, scalable infrastructure provisioning",
      "Work with Kubernetes concepts and cloud-native orchestration — deployments, services, pods, namespaces, ConfigMaps, Secrets, RBAC, ingress",
      "Manage application configuration and secrets securely using Google Secret Manager and cloud IAM controls",
      "Configure and troubleshoot DNS, SSL/TLS certificates, HTTPS, load balancing, and service connectivity",
      "Implement monitoring and observability using Datadog, Google Cloud Monitoring, and centralized log analysis",
      "Implement DevSecOps practices using SonarCloud/SonarQube, SAST, and OPA policy concepts",
    ],
    technologies: [
      "GCP",
      "AWS",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "Google Cloud Build",
      "Datadog",
      "IAM & Secrets",
      "DevSecOps",
    ],
  },
];

export const TECHNOLOGIES = [
  { name: "Google Cloud Platform", category: "Cloud", description: "Cloud Run, Compute Engine, Cloud Build, Artifact Registry, Cloud Functions, Secret Manager, IAM, VPC, Load Balancing, Cloud DNS, BigQuery, Vertex AI." },
  { name: "AWS", category: "Cloud", description: "EC2, S3, IAM, VPC, RDS, EKS, CloudWatch, Load Balancing, Security Groups." },
  { name: "Docker", category: "Containers", description: "Containerizing applications and managing production-ready container images." },
  { name: "Kubernetes", category: "Containers", description: "Deployments, services, pods, namespaces, ConfigMaps, Secrets, RBAC, ingress, GKE/EKS, Helm." },
  { name: "Terraform", category: "IaC", description: "Infrastructure as Code, reusable modules, and repeatable, scalable provisioning." },
  { name: "GitHub Actions", category: "CI/CD", description: "Automated build, test, and deployment pipelines integrated with Git-based workflows." },
  { name: "Google Cloud Build", category: "CI/CD", description: "Automated application build and container image pipelines on GCP." },
  { name: "Jenkins", category: "CI/CD", description: "Pipeline automation carried over from earlier enterprise CI/CD work." },
  { name: "Datadog", category: "Monitoring", description: "Infrastructure and application monitoring, alerting, and production troubleshooting." },
  { name: "Cloud Monitoring & Logging", category: "Monitoring", description: "Centralized log analysis and observability across GCP-hosted services." },
  { name: "IAM & Secret Manager", category: "Security", description: "Access control, service accounts, and secure secret management using least-privilege principles." },
  { name: "SonarCloud / SAST / OPA", category: "Security", description: "DevSecOps practices — static analysis, code quality gates, and policy-as-code validation." },
  { name: "PostgreSQL & Hasura", category: "Data", description: "Supporting database and GraphQL-layer infrastructure for product backends." },
  { name: "Linux", category: "Operations", description: "Server administration, troubleshooting, and production operations." },
  { name: "AI Agents", category: "AI", description: "Exploring agent-assisted automation across the DevOps delivery lifecycle." },
  { name: "Networking & DNS/SSL", category: "Operations", description: "DNS, domains, SSL/TLS certificates, HTTPS, and load-balancer configuration." },
];

export const CASE_STUDIES = [
  {
    slug: "noki",
    tag: "01",
    title: "NOKI — Healthcare & EHR Platform",
    short: "Cloud infrastructure and DevOps for an AI-powered healthcare and EHR platform.",
    productUrl: "https://app.noki.ai/login",
    overview:
      "NOKI is an AI-powered healthcare and EHR (Electronic Health Records) platform. Prashanth supports its cloud infrastructure end to end — from containerized deployments to production troubleshooting.",
    problem:
      "A healthcare-oriented platform needs reliable, secure infrastructure across multiple environments, with careful handling of data services like PostgreSQL and Hasura, and dependable deployment automation.",
    approach:
      "Built and maintained containerized deployment workflows on GCP, automated build and deployment through Cloud Build and Docker, provisioned infrastructure with Terraform, and supported Cloud Run deployments alongside PostgreSQL and Hasura-based components.",
    technologies: ["GCP", "Cloud Run", "Docker", "Terraform", "Cloud Build", "Artifact Registry", "Secret Manager", "PostgreSQL", "Hasura", "Datadog"],
    responsibilities: [
      "Managed and supported cloud infrastructure across multiple environments",
      "Automated application build and deployment processes",
      "Configured DNS, SSL/TLS certificates, HTTPS, and cloud networking",
      "Implemented monitoring and production troubleshooting using Datadog and Cloud Logging",
    ],
    outcome: "Stable, automated deployment workflows and monitored infrastructure supporting a healthcare-context product.",
    future: "Continue strengthening infrastructure hardening and security investigation practices as the platform grows.",
  },
  {
    slug: "samaras",
    tag: "02",
    title: "Samaras — Clinical Trial & Life Sciences Platform",
    short: "Cloud infrastructure, CI/CD, and an early AI DevOps agent for automated delivery.",
    productUrl: "https://samaras.ai/",
    overview:
      "Samaras is an AI-driven clinical-trial and life-sciences platform. Alongside standard cloud and DevOps support, Prashanth introduced an early AI DevOps agent concept aimed at automating the path from code commit to deployment.",
    problem:
      "Manual coordination between committing code and getting it safely deployed adds delay and requires constant human attention to drift, checks, and release steps.",
    approach:
      "Supported cloud infrastructure and deployment workflows on GCP with Docker and Terraform, developed and maintained CI/CD automation, and introduced an AI DevOps agent designed to work automatically from the moment code is committed to the main branch through to deployment — handling the coordination between build, validation, and release steps with reduced manual intervention.",
    technologies: ["GCP", "Docker", "Terraform", "CI/CD", "GitHub", "AI Agents", "Monitoring"],
    responsibilities: [
      "Supported cloud infrastructure and DevOps operations for the platform",
      "Developed and maintained CI/CD automation",
      "Introduced an AI DevOps agent to automate the commit-to-deployment path",
      "Worked with development teams to improve deployment reliability and operational processes",
    ],
    outcome:
      "A working CI/CD foundation plus an early AI-agent-driven automation layer that reduces manual steps between a main-branch commit and a live deployment.",
    future:
      "This AI DevOps agent work is an active engineering direction — the goal is to expand safe, policy-gated automation coverage further across the pipeline over time.",
  },
  {
    slug: "socratic",
    tag: "03",
    title: "Socratic AI — Healthcare & Clinical Simulation",
    short: "Cloud and DevOps operations for an AI-powered clinical simulation platform.",
    productUrl: "https://getsocratic.ai/",
    overview:
      "Socratic AI is an AI-powered healthcare and clinical simulation platform. Prashanth manages its cloud infrastructure and deployment automation.",
    problem:
      "Clinical simulation workloads need consistent deployment automation and secure application configuration across environments.",
    approach:
      "Automated application deployment and release processes, built and supported containerized workloads with Docker, applied Terraform and Infrastructure as Code principles, and supported CI/CD workflows through GitHub.",
    technologies: ["GCP", "Docker", "Terraform", "CI/CD", "GitHub", "Monitoring"],
    responsibilities: [
      "Managed cloud infrastructure across application environments",
      "Automated application deployment and release processes",
      "Supported CI/CD workflows and source-code integration using GitHub",
      "Supported secure application configuration, IAM, secrets, networking, DNS, and SSL/TLS requirements",
    ],
    outcome: "Automated, monitored deployment pipelines supporting a clinical simulation product.",
    future: "Continue extending automated policy checks across the deployment pipeline.",
  },
  {
    slug: "the-supper",
    tag: "04",
    title: "The Supper — Australian Startup",
    short: "Cloud infrastructure and DevOps for a SIM activation and restaurant discovery platform.",
    productUrl: "https://the-supper.co/",
    overview:
      "The Supper is an Australian startup. Prashanth works as the Cloud & DevOps Engineer supporting its infrastructure end to end — from CI/CD through to production operations.",
    problem:
      "A startup needs scalable, secure cloud infrastructure that can be provisioned and evolved quickly without sacrificing reliability.",
    approach:
      "Designed and maintained cloud infrastructure for development and production workloads, built CI/CD pipelines for automated application delivery, containerized applications with Docker, and automated infrastructure provisioning using Terraform.",
    technologies: ["Cloud Infrastructure", "Docker", "Terraform", "CI/CD", "Networking", "Monitoring"],
    responsibilities: [
      "Designed and maintained cloud infrastructure for development and production workloads",
      "Built and supported CI/CD pipelines for automated application delivery",
      "Automated infrastructure provisioning and configuration using Terraform",
      "Supported cloud deployments, networking, DNS, SSL/TLS, monitoring, and production operations",
    ],
    outcome: "Scalable, secure cloud infrastructure practices suited to a fast-moving startup environment.",
    future: "Continue improving deployment processes and infrastructure reliability as the product scales.",
  },
  {
    slug: "cloud-provisioning",
    tag: "05",
    title: "Automated Cloud Resource Provisioning Platform",
    short: "Terraform-based automated provisioning with policy validation via OPA.",
    overview:
      "An internal platform that turns structured infrastructure requests into automated, policy-checked cloud provisioning — reducing manual Terraform work and improving governance.",
    problem:
      "Manual cloud provisioning is slow, inconsistent, and hard to audit, especially as infrastructure requests scale across teams.",
    approach:
      "Used structured infrastructure requests as the intake mechanism, automated provisioning through Terraform, implemented Terraform Plan workflows to validate changes before deployment, and introduced policy validation using OPA concepts.",
    technologies: ["Terraform", "GCP", "GitHub", "CI/CD", "OPA", "Infrastructure as Code"],
    responsibilities: [
      "Contributed to the design and implementation of the automated provisioning workflow",
      "Automated infrastructure provisioning using Terraform",
      "Introduced policy validation using OPA concepts",
      "Supported automated review and risk-assessment workflows for infrastructure changes",
    ],
    outcome: "Improved infrastructure governance, consistency, traceability, and reduced dependency on manual provisioning.",
    future: "Expand policy coverage and further reduce manual review steps in the request pipeline.",
  },
  {
    slug: "enterprise-ops",
    tag: "06",
    title: "Enterprise Operations — Colruyt Group",
    short: "Foundational enterprise infrastructure operations on company-owned data centers.",
    overview:
      "Five years of enterprise infrastructure and operations work supporting internal applications on company-owned servers and internal data-center infrastructure — the foundation that enabled the move into cloud and DevOps engineering.",
    problem:
      "Large enterprise environments depend on consistent server operations, deployment discipline, and fast incident response across internally hosted systems.",
    approach:
      "Performed application deployment, server configuration, system maintenance, and operational support, while working within enterprise incident-management and change-management processes.",
    technologies: ["Linux", "Windows Server", "Networking", "Enterprise Deployments"],
    responsibilities: [
      "Supported enterprise servers and applications in internal data-center environments",
      "Monitored system and application health and investigated production issues",
      "Troubleshot server, application, deployment, and infrastructure incidents",
      "Analyzed logs and system behavior to identify root causes and restore services",
    ],
    outcome: "Built the production-operations foundation — deployments, troubleshooting, reliability discipline — that carried directly into cloud and DevOps engineering.",
    future: "N/A — this is foundational, completed experience.",
  },
];

export const EDUCATION = {
  degree: "Master of Science (M.Sc.) — Computer Science",
  institution: "Bhavan's College",
  year: "2019",
};

export const CERTIFICATIONS = [
  "Google Cloud / Vertex AI Certification",
  "Azure Cloud Architect — Professional Development",
  "Continuous learning in Cloud Architecture, Kubernetes, Terraform, DevOps, DevSecOps, Cloud Security, and Platform Engineering",
];

export const AWARD = {
  title: "Build Master of the Year",
  description: "Recognized for technical contribution, engineering excellence, and contribution to building and supporting technology platforms.",
};

export const VISION = [
  {
    title: "100-Year Security Mindset",
    tag: "VISION",
    body: "Prashanth wants to build highly resilient infrastructure and network security designed to withstand evolving threats for generations.",
  },
  {
    title: "AGI & AI Safety",
    tag: "RESEARCH DIRECTION",
    body: "He wants to contribute to AGI development while thinking deeply about safety, control, and responsible development of increasingly capable AI.",
  },
  {
    title: "Predictive Healthcare AI",
    tag: "FUTURE PRODUCT",
    body: "He wants to build AI-driven healthcare technology capable of identifying early warning signals for serious health events and helping clinicians intervene earlier. This is a future product and research vision — not a medical diagnostic system.",
  },
  {
    title: "Human Creativity",
    tag: "HOBBIES",
    body: "Reading, playing musical instruments, composing songs, and traveling the world.",
  },
];

// ============================================================
// AI ASSISTANT KNOWLEDGE BASE
// Local pattern-matching knowledge base. Architected so it can
// later be swapped for a real LLM call through a secure backend
// (see src/components/AIAssistant.jsx for the integration point).
// ============================================================

export const AI_KNOWLEDGE_BASE = [
  {
    keywords: ["what does prashanth do", "what does he do", "who is prashanth", "role", "what do you do"],
    answer:
      "Prashanth is a Cloud & DevOps Engineer at ThinkHat.ai with 6+ years of experience, currently supporting infrastructure across NOKI, Samaras, Socratic AI, and The Supper — primarily on Google Cloud Platform, with AWS experience as well. He started in enterprise operations at Colruyt Group before moving into cloud and DevOps engineering.",
  },
  {
    keywords: ["aws", "amazon web services"],
    answer:
      "Prashanth works with AWS infrastructure including EC2, S3, IAM, VPC, RDS, EKS, CloudWatch, and load balancing, alongside his primary focus on Google Cloud Platform.",
  },
  {
    keywords: ["gcp", "google cloud"],
    answer:
      "GCP is Prashanth's primary cloud platform — he works across Cloud Run, Compute Engine, Cloud Build, Artifact Registry, Cloud Functions, Secret Manager, IAM, VPC, Load Balancing, Cloud DNS, BigQuery, and Vertex AI.",
  },
  {
    keywords: ["kubernetes", "k8s", "docker", "container"],
    answer:
      "Prashanth containerizes applications using Docker and works with Kubernetes concepts and cloud-native orchestration — deployments, services, pods, namespaces, ConfigMaps, Secrets, RBAC, ingress — including GKE, EKS, and Helm-based deployment concepts.",
  },
  {
    keywords: ["terraform", "infrastructure as code", "iac"],
    answer:
      "Prashanth develops and maintains Terraform-based Infrastructure as Code for repeatable, scalable provisioning, including reusable Terraform modules and an automated cloud-resource provisioning platform with OPA-based policy validation.",
  },
  {
    keywords: ["devops experience", "devops journey", "devops"],
    answer:
      "Prashanth's DevOps journey moved from enterprise infrastructure operations at Colruyt Group (2019–2024) into a Cloud & DevOps Engineer role at ThinkHat.ai (2024–Present), covering CI/CD, Kubernetes, Terraform, monitoring, security, and AI-driven engineering workflows across multiple products.",
  },
  {
    keywords: ["technologies", "tech stack", "stack", "tools"],
    answer:
      "His stack spans GCP, AWS, Docker, Kubernetes, Terraform, GitHub Actions, Google Cloud Build, Datadog, IAM & Secret Manager, SonarCloud/OPA for DevSecOps, PostgreSQL/Hasura, and Linux.",
  },
  {
    keywords: ["products", "worked on", "projects", "companies"],
    answer:
      "At ThinkHat.ai, Prashanth supports NOKI (a healthcare and EHR platform), Samaras (a clinical-trial and life-sciences platform), Socratic AI (a healthcare and clinical simulation platform), and The Supper (an Australian startup). Earlier, he worked in enterprise operations at Colruyt Group.",
  },
  {
    keywords: ["ai agent", "ai-agent", "ai work", "agents", "samaras"],
    answer:
      "For Samaras, Prashanth introduced an AI DevOps agent designed to work automatically from the moment code is committed to the main branch all the way through to deployment — handling build, validation, and release coordination with reduced manual intervention. It's an active engineering direction rather than a finished product.",
  },
  {
    keywords: ["career goals", "future", "vision", "long term", "long-term"],
    answer:
      "Long-term, Prashanth is interested in resilient infrastructure security, contributing to AGI development with a strong focus on safety, and exploring predictive healthcare AI as a future research direction — alongside his current cloud and DevOps engineering work.",
  },
  {
    keywords: ["hobbies", "interests", "outside of work", "free time"],
    answer:
      "Outside of engineering, Prashanth enjoys reading, playing musical instruments, composing songs, and traveling the world.",
  },
  {
    keywords: ["contact", "reach", "email", "linkedin", "hire", "get in touch"],
    answer:
      "You can reach Prashanth at prashanthmanna.ai@gmail.com or connect with him on LinkedIn — both are linked in the contact section below.",
  },
  {
    keywords: ["colruyt"],
    answer:
      "Prashanth worked at Colruyt Group from 2019 to 2024 as an Operational System Engineer, supporting enterprise applications on company-owned servers and internal data-center infrastructure — building the foundation in deployments, troubleshooting, and production operations that carried into his cloud and DevOps career.",
  },
  {
    keywords: ["thinkhat"],
    answer:
      "At ThinkHat.ai (2024–Present), Prashanth works as a Cloud & DevOps Engineer, designing, deploying, automating, securing, and supporting infrastructure across NOKI, Samaras, Socratic AI, and The Supper.",
  },
  {
    keywords: ["education", "degree", "college", "university", "masters"],
    answer:
      "Prashanth holds a Master of Science (M.Sc.) in Computer Science from Bhavan's College, 2019.",
  },
  {
    keywords: ["certification", "certified", "certificate"],
    answer:
      "Prashanth holds a Google Cloud / Vertex AI Certification and has done professional development toward Azure Cloud Architect, alongside continuous learning in Cloud Architecture, Kubernetes, Terraform, DevOps, DevSecOps, and Platform Engineering.",
  },
  {
    keywords: ["award", "recognition", "build master"],
    answer:
      "Prashanth received the \"Build Master of the Year\" award, recognizing his technical contribution and engineering excellence in building and supporting technology platforms.",
  },
];

export const AI_FALLBACK_ANSWER =
  "I don't have a specific answer for that yet, but you can ask me about Prashanth's cloud experience, DevOps journey, AI-agent work, technologies, career goals, or hobbies — or reach him directly through the contact section below.";
