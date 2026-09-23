// ============================================================
// CONTENT DATA
// Sourced from Prashanth's resume and the live products he
// supports. No fabricated employers, certifications, awards,
// or metrics — only what's documented.
// ============================================================

export const SUMMARY =
  "Senior DevOps & Cloud Engineer with 7+ years of experience across enterprise data-center operations and modern multi-cloud engineering on AWS, Microsoft Azure, and Google Cloud. Specialist in deploying and operating AI agents in production — containerizing, securing, scaling, and monitoring agentic workloads for healthcare, life-sciences, and clinical-simulation platforms (NOKI, Samaras, Socratic AI). Currently the sole owner of cloud, DevOps, and release operations at The Supper, an Australian investment platform, and a member of its Marketing & Strategy team — bridging infrastructure decisions with business growth. Hands-on with Terraform, Docker, Kubernetes (GKE / EKS / AKS), GitHub Actions, Cloud Build, and Bitbucket Pipelines, with strong DevSecOps, compliance-aware architecture, and cost-optimization practice.";

export const HIGHLIGHTS = [
  { value: "7+", label: "Years in infrastructure & DevOps" },
  { value: "3", label: "Clouds — AWS · Azure · GCP" },
  { value: "4", label: "Production platforms supported" },
  { value: "3", label: "AI products with agents in production" },
];

export const CAREER = [
  {
    year: "May 2026 – Present",
    company: "The Supper",
    current: true,
    location: "Remote (Australia) · Full-time",
    roles: ["Senior Cloud & DevOps Engineer", "Marketing & Strategy Team"],
    summary:
      "Australian investment platform — KYC-verified investor onboarding, investments, and SIM activation. Sole owner of cloud infrastructure, DevOps, and release operations. Originally built The Supper's cloud and CI/CD foundation as a ThinkHat.ai client engagement before being hired full-time to lead the function.",
    responsibilities: [
      "Sole owner of cloud infrastructure, DevOps, and release operations across development and production — architecture, provisioning, security, cost, and reliability",
      "Built and deployed the production backend on AWS from the ground up: EC2, ECR, RDS PostgreSQL, and Dockerized backend / worker / reconciler services behind a Caddy reverse proxy with automated TLS",
      "Hardened security for a regulated, KYC-driven investment platform: least-privilege IAM roles, SSM Session Manager access (no open SSH), secrets in SSM Parameter Store (SecureString / KMS), and deploy-time generated environment configs",
      "Delivered customer communication infrastructure: AWS SES (DKIM, MAIL FROM, domain verification), SNS push notifications for iOS (APNs) and Android (FCM), and ACMA-compliant SMS sender registration",
      "Designed CI/CD with Bitbucket Pipelines and ECR image versioning; defined branching, release, and database migration (Alembic) workflows with product and engineering",
      "Led production troubleshooting across application, network, and third-party telco integrations, including CloudWatch-driven root-cause analysis and WAF / proxy issues",
      "As part of the Marketing & Strategy team, translate platform capabilities into growth strategy — shaping product roadmap, launch readiness, and an admin analytics dashboard tracking registrations, KYC funnel, investments, and notification performance",
    ],
    technologies: ["AWS", "EC2", "ECR", "RDS PostgreSQL", "SES / SNS", "SSM & KMS", "Bitbucket Pipelines", "Docker", "Caddy", "CloudWatch"],
  },
  {
    year: "2024 – May 2026",
    company: "ThinkHat.ai",
    location: "India",
    roles: ["Cloud & DevOps Engineer", "AI Agent Deployment"],
    summary:
      "Primary focus: deploying AI agents to production across three AI products — NOKI, Samaras, and Socratic AI — while designing, deploying, and supporting infrastructure for four concurrent production platforms on Google Cloud and AWS.",
    products: ["NOKI", "Samaras", "Socratic AI", "The Supper"],
    responsibilities: [
      "Deployed AI agents to production across NOKI, Samaras, and Socratic AI — packaging agents as containers, wiring secure model / API access, and operating them on Cloud Run and Kubernetes with monitoring and rollback",
      "Designed, deployed, and supported infrastructure across dev, staging, and production on GCP and AWS, supporting four concurrent production platforms",
      "Introduced an AI DevOps agent for Samaras that runs automatically from a main-branch commit through build, validation, and deployment, reducing manual release coordination",
      "Built automated CI/CD with GitHub Actions and Google Cloud Build; containerized services with Docker and managed images via Google Artifact Registry",
      "Developed Terraform IaC with reusable modules; contributed to a self-service provisioning platform with Terraform Plan validation and OPA policy checks for governance",
      "Operated Kubernetes workloads (GKE / EKS, Helm) — deployments, services, namespaces, ConfigMaps, Secrets, RBAC, and ingress",
      "Secured healthcare and clinical data platforms using Secret Manager, IAM, SSL/TLS, and DNS controls; embedded DevSecOps with SonarCloud / SonarQube and SAST",
      "Implemented observability with Datadog and Google Cloud Monitoring and led incident troubleshooting to minimize downtime",
    ],
    technologies: [
      "GCP",
      "AWS",
      "AI Agents",
      "Cloud Run",
      "GKE / EKS",
      "Docker",
      "Terraform",
      "GitHub Actions",
      "Cloud Build",
      "Datadog",
      "DevSecOps",
    ],
  },
  {
    year: "2019 – 2024",
    company: "Colruyt Group",
    location: "India · Enterprise retail group (European operations)",
    roles: ["Operational System Engineer"],
    summary:
      "Enterprise infrastructure and operations for business-critical systems across internal data centers and Microsoft Azure — building the foundation in production operations, deployments, cloud, and troubleshooting that carried directly into DevOps engineering.",
    responsibilities: [
      "Supported enterprise servers and applications in internal data-center environments, delivering consistent uptime for business-critical systems",
      "Worked on Microsoft Azure cloud — Virtual Machines, AKS, Azure DevOps Pipelines, Entra ID (Azure AD), Key Vault, Blob Storage, VNet, and Azure Monitor",
      "Executed application deployments, server configuration, and maintenance within formal ITIL-style incident and change-management processes",
      "Monitored system health, analyzed logs, and resolved production incidents with root-cause analysis",
      "Built the Linux, Windows Server, networking, and operations foundation for the move into multi-cloud engineering",
    ],
    technologies: ["Microsoft Azure", "AKS", "Azure DevOps", "Entra ID", "Key Vault", "Linux", "Windows Server", "ITIL", "Networking"],
  },
];

export const TECHNOLOGIES = [
  { name: "AI Agent Deployment", category: "AI", description: "Production AI agents — containerized runtimes on Cloud Run / GKE, LLM API integration, Vertex AI, agent secrets and API-key management, autoscaling, and agent observability." },
  { name: "AWS", category: "Cloud", description: "EC2, ECR, EKS, S3, RDS (PostgreSQL), IAM, VPC, SES, SNS (push & SMS), SSM Parameter Store & Session Manager, KMS, CloudWatch." },
  { name: "Microsoft Azure", category: "Cloud", description: "AKS, Virtual Machines, Azure DevOps Pipelines, Entra ID (Azure AD), Key Vault, Blob Storage, VNet, Azure Monitor." },
  { name: "Google Cloud Platform", category: "Cloud", description: "Cloud Run, GKE, Compute Engine, Cloud Build, Artifact Registry, Cloud Functions, Secret Manager, IAM, VPC, Load Balancing, Cloud DNS, BigQuery, Vertex AI." },
  { name: "Kubernetes", category: "Containers", description: "GKE, EKS, and AKS with Helm — deployments, services, namespaces, ConfigMaps, Secrets, RBAC, and ingress." },
  { name: "Docker", category: "Containers", description: "Docker and Docker Compose — containerizing services and agents, with image versioning in ECR and Artifact Registry." },
  { name: "Terraform & Policy-as-Code", category: "IaC", description: "HCL, reusable modules, Terraform Plan validation, and OPA policy checks for governed, repeatable provisioning." },
  { name: "CI/CD & GitOps", category: "CI/CD", description: "GitHub Actions, Google Cloud Build, Bitbucket Pipelines, Azure DevOps, Jenkins — plus Git branching and release strategy." },
  { name: "Observability & SRE", category: "Monitoring", description: "Datadog, Prometheus, Grafana, Google Cloud Monitoring & Logging, and AWS CloudWatch — alerting, RCA, and incident response." },
  { name: "Security & Compliance", category: "Security", description: "IAM / RBAC, least-privilege design, secret management, SonarCloud / SAST, SSL/TLS, Cloudflare WAF, and KYC data handling." },
  { name: "Compliance-Aware Architecture", category: "Security", description: "Data-residency-aware design with awareness of UAE PDPL, ISO 27001, and SOC 2 controls for regulated workloads." },
  { name: "Data Platforms", category: "Data", description: "PostgreSQL, MySQL, Hasura, Firebase, and BigQuery supporting product backends and analytics." },
  { name: "Linux & Scripting", category: "Operations", description: "Linux and Windows Server administration; Bash, Python, PowerShell, and YAML automation." },
  { name: "Networking & Edge", category: "Operations", description: "Caddy, Nginx, DNS, TCP/IP, SSL/TLS, and load balancing." },
  { name: "FinOps & Cost Optimization", category: "Leadership", description: "Right-sizing and cost governance suited to lean startup and multi-product environments." },
  { name: "Strategy & Stakeholders", category: "Leadership", description: "Release and incident management, tech strategy and go-to-market, stakeholder and vendor management." },
];

export const CASE_STUDIES = [
  {
    slug: "noki",
    tag: "01",
    title: "NOKI — Healthcare & EHR Platform",
    short: "AI agents in production alongside an AI-powered healthcare and EHR platform.",
    productUrl: "https://app.noki.ai/login",
    overview:
      "NOKI is an AI-powered healthcare and EHR (Electronic Health Records) platform. Prashanth deployed and operated its AI agents in production and supported its cloud infrastructure end to end — from containerized release workflows to production troubleshooting.",
    problem:
      "A healthcare platform running AI agents needs reliable, secure infrastructure across multiple environments, careful handling of data services like PostgreSQL and Hasura, and dependable deployment automation.",
    approach:
      "Packaged and deployed AI agents as containers on GCP with secure model / API access, built containerized release workflows via Cloud Build and Docker, provisioned infrastructure with Terraform, and supported Cloud Run deployments alongside PostgreSQL and Hasura components.",
    technologies: ["GCP", "Cloud Run", "AI Agents", "Docker", "Terraform", "Cloud Build", "Artifact Registry", "Secret Manager", "PostgreSQL", "Hasura", "Datadog"],
    responsibilities: [
      "Deployed and operated AI agents alongside the EHR platform",
      "Built containerized release workflows via Cloud Build",
      "Supported PostgreSQL / Hasura infrastructure",
      "Configured DNS, SSL/TLS, and cloud networking; monitored with Datadog and Cloud Logging",
    ],
    outcome: "Stable, automated releases and monitored AI-agent workloads supporting a healthcare-context product.",
    future: "Continue strengthening infrastructure hardening and agent observability as the platform grows.",
  },
  {
    slug: "samaras",
    tag: "02",
    title: "Samaras — Clinical Trial & Life Sciences Platform",
    short: "AI agents in production, plus an AI DevOps agent automating commit-to-deployment.",
    productUrl: "https://samaras.ai/",
    overview:
      "Samaras is an AI-driven clinical-trial and life-sciences platform. Prashanth deployed its AI agents to production and introduced an AI DevOps agent that automates the path from code commit to deployment.",
    problem:
      "Manual coordination between committing code and getting it safely deployed adds delay and requires constant human attention to drift, checks, and release steps.",
    approach:
      "Deployed AI agents on GCP with Docker and Terraform, developed and maintained CI/CD automation, and introduced an AI DevOps agent that runs automatically from a main-branch commit through build, validation, and deployment — coordinating release steps with reduced manual intervention.",
    technologies: ["GCP", "Docker", "Terraform", "CI/CD", "GitHub", "AI Agents", "Monitoring"],
    responsibilities: [
      "Deployed AI agents to production for the platform",
      "Developed and maintained CI/CD automation",
      "Built an AI DevOps agent to automate the commit-to-deployment path",
      "Worked with development teams to improve deployment reliability and operational processes",
    ],
    outcome:
      "A working CI/CD foundation plus an AI-agent-driven automation layer that reduces manual steps between a main-branch commit and a live deployment.",
    future:
      "Expand safe, policy-gated automation coverage further across the pipeline over time.",
  },
  {
    slug: "socratic",
    tag: "03",
    title: "Socratic AI — Clinical Simulation",
    short: "AI agents powering clinical simulations, with automated, secured releases.",
    productUrl: "https://getsocratic.ai/",
    overview:
      "Socratic AI is an AI-powered healthcare and clinical simulation platform. Prashanth deployed the AI agents that power its simulations and manages its cloud infrastructure and release automation.",
    problem:
      "Clinical simulation workloads need consistent deployment automation and secure configuration of agents, models, and secrets across environments.",
    approach:
      "Deployed AI agents powering clinical simulations, automated releases with GitHub Actions, built containerized workloads with Docker, and applied Terraform-based Infrastructure as Code.",
    technologies: ["GCP", "AI Agents", "Docker", "Terraform", "GitHub Actions", "Monitoring"],
    responsibilities: [
      "Deployed AI agents powering clinical simulations",
      "Automated application deployment and release processes",
      "Managed IAM, secrets, DNS, and SSL/TLS configuration",
      "Supported CI/CD workflows and source-code integration using GitHub",
    ],
    outcome: "Automated, monitored deployment pipelines supporting an AI clinical simulation product.",
    future: "Continue extending automated policy checks across the deployment pipeline.",
  },
  {
    slug: "the-supper",
    tag: "04",
    title: "The Supper — Investment Platform",
    short: "End-to-end AWS build of a KYC-regulated investment backend with secure config, notifications, and CI/CD.",
    productUrl: "https://the-supper.co/",
    overview:
      "The Supper is an Australian investment platform — KYC-verified investor onboarding, investments, and SIM activation. Prashanth first built its cloud and CI/CD foundation as a ThinkHat.ai client engagement, then joined full-time in May 2026 as Senior Cloud & DevOps Engineer and member of the Marketing & Strategy team.",
    problem:
      "A regulated, KYC-driven investment platform needs a secure production backend, reliable customer communications, and fast, safe releases — owned end to end by a lean team.",
    approach:
      "Built the production backend on AWS from the ground up — EC2, ECR, RDS PostgreSQL, and Dockerized backend / worker / reconciler services behind a Caddy reverse proxy with automated TLS. Locked down access with least-privilege IAM and SSM Session Manager (no open SSH), stored secrets in SSM Parameter Store with KMS, and shipped CI/CD with Bitbucket Pipelines and ECR image versioning.",
    technologies: ["AWS", "EC2", "ECR", "RDS PostgreSQL", "SES", "SNS", "SSM & KMS", "Bitbucket Pipelines", "Docker", "Caddy", "CloudWatch"],
    responsibilities: [
      "Built and deployed the production AWS backend from the ground up",
      "Hardened security for KYC-regulated workloads: IAM, SSM Session Manager, Parameter Store / KMS",
      "Delivered SES email (DKIM, MAIL FROM), SNS push for iOS / Android, and ACMA-compliant SMS sender registration",
      "Designed CI/CD, branching, release, and Alembic database migration workflows",
      "Shaped roadmap, launch readiness, and an admin analytics dashboard as part of Marketing & Strategy",
    ],
    outcome: "A secure, regulated investment backend built from zero and now owned end to end — with communications, CI/CD, and analytics in place.",
    future: "Continue maturing observability, release management, and cost governance as the platform scales.",
  },
  {
    slug: "cloud-provisioning",
    tag: "05",
    title: "Automated Cloud Resource Provisioning Platform",
    short: "Self-service Terraform provisioning with Plan validation and OPA policy checks.",
    overview:
      "A self-service platform that turns structured infrastructure requests into automated, policy-checked cloud provisioning — reducing manual Terraform work and improving governance.",
    problem:
      "Manual cloud provisioning is slow, inconsistent, and hard to audit, especially as infrastructure requests scale across teams.",
    approach:
      "Used structured infrastructure requests as the intake mechanism, automated provisioning through Terraform, validated every change with Terraform Plan before deployment, and enforced governance with OPA policy checks.",
    technologies: ["Terraform", "GCP", "GitHub", "CI/CD", "OPA", "Infrastructure as Code"],
    responsibilities: [
      "Contributed to the design and implementation of the self-service provisioning workflow",
      "Automated infrastructure provisioning using reusable Terraform modules",
      "Introduced policy validation using OPA",
      "Supported automated review and risk-assessment workflows for infrastructure changes",
    ],
    outcome: "Improved infrastructure governance, consistency, traceability, and reduced dependency on manual provisioning.",
    future: "Expand policy coverage and further reduce manual review steps in the request pipeline.",
  },
  {
    slug: "enterprise-ops",
    tag: "06",
    title: "Enterprise Operations & Azure — Colruyt Group",
    short: "Enterprise data-center operations and Microsoft Azure cloud for a European retail group.",
    overview:
      "Five years of enterprise infrastructure and operations for Colruyt Group, a European retail group — supporting business-critical systems across internal data centers and Microsoft Azure. The foundation that enabled the move into multi-cloud DevOps engineering.",
    problem:
      "Large enterprise environments depend on consistent server operations, deployment discipline, and fast incident response across on-prem and cloud-hosted systems.",
    approach:
      "Performed application deployment, server configuration, and maintenance within ITIL-style incident and change-management processes, and worked across Azure — Virtual Machines, AKS, Azure DevOps Pipelines, Entra ID, Key Vault, Blob Storage, VNet, and Azure Monitor.",
    technologies: ["Microsoft Azure", "AKS", "Azure DevOps", "Entra ID", "Key Vault", "Azure Monitor", "Linux", "Windows Server", "ITIL"],
    responsibilities: [
      "Supported enterprise servers and applications in internal data-center environments",
      "Worked on Microsoft Azure cloud infrastructure and Azure DevOps pipelines",
      "Executed deployments within formal incident and change-management processes",
      "Resolved production incidents with log analysis and root-cause analysis",
    ],
    outcome: "Built the production-operations and Azure cloud foundation — deployments, troubleshooting, reliability discipline — that carried directly into multi-cloud DevOps engineering.",
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
      "Prashanth is a Senior DevOps & Cloud Engineer with 7+ years across AWS, Microsoft Azure, and Google Cloud, specializing in deploying and operating AI agents in production. He is currently the sole owner of cloud, DevOps, and release operations at The Supper, an Australian investment platform, and part of its Marketing & Strategy team. Before that he deployed AI agents across NOKI, Samaras, and Socratic AI at ThinkHat.ai, and spent five years at Colruyt Group in enterprise operations and Azure.",
  },
  {
    keywords: ["aws", "amazon web services"],
    answer:
      "At The Supper, Prashanth built the production backend on AWS from the ground up — EC2, ECR, RDS PostgreSQL, SES, SNS push and SMS, SSM Parameter Store and Session Manager, KMS, and CloudWatch — with CI/CD on Bitbucket Pipelines. He also worked with AWS (including EKS) at ThinkHat.ai.",
  },
  {
    keywords: ["azure", "microsoft"],
    answer:
      "Prashanth worked on Microsoft Azure at Colruyt Group — Virtual Machines, AKS, Azure DevOps Pipelines, Entra ID (Azure AD), Key Vault, Blob Storage, VNet, and Azure Monitor. At ThinkHat.ai and The Supper he has worked on AWS and Google Cloud."
  },
  {
    keywords: ["gcp", "google cloud"],
    answer:
      "Prashanth used Google Cloud heavily at ThinkHat.ai — Cloud Run, GKE, Compute Engine, Cloud Build, Artifact Registry, Cloud Functions, Secret Manager, IAM, VPC, Load Balancing, Cloud DNS, BigQuery, and Vertex AI — to run AI agents and products like NOKI, Samaras, and Socratic AI.",
  },
  {
    keywords: ["kubernetes", "k8s", "docker", "container"],
    answer:
      "Prashanth containerizes services and AI agents with Docker and operates Kubernetes across GKE and EKS (ThinkHat.ai) and AKS (Colruyt Group, on Azure), using Helm — deployments, services, namespaces, ConfigMaps, Secrets, RBAC, and ingress.",
  },
  {
    keywords: ["terraform", "infrastructure as code", "iac"],
    answer:
      "Prashanth develops and maintains Terraform-based Infrastructure as Code for repeatable, scalable provisioning, including reusable Terraform modules and an automated cloud-resource provisioning platform with OPA-based policy validation.",
  },
  {
    keywords: ["devops experience", "devops journey", "devops"],
    answer:
      "Prashanth's journey runs from enterprise data-center operations and Microsoft Azure at Colruyt Group (2019–2024), to Cloud & DevOps Engineer focused on AI agent deployment on GCP and AWS at ThinkHat.ai (2024–May 2026), to Senior Cloud & DevOps Engineer at The Supper (May 2026–Present).",
  },
  {
    keywords: ["technologies", "tech stack", "stack", "tools"],
    answer:
      "His stack spans AWS, Microsoft Azure, and Google Cloud; Docker and Kubernetes (GKE / EKS / AKS); Terraform and OPA; GitHub Actions, Cloud Build, Bitbucket Pipelines, and Azure DevOps; Datadog, Prometheus, Grafana, and CloudWatch; plus DevSecOps tooling like SonarCloud and SAST.",
  },
  {
    keywords: ["products", "worked on", "projects", "companies"],
    answer:
      "At ThinkHat.ai, Prashanth supported NOKI (a healthcare and EHR platform), Samaras (a clinical-trial and life-sciences platform), Socratic AI (a healthcare and clinical simulation platform), and The Supper (an Australian investment platform, where he now works full-time as Senior Cloud & DevOps Engineer). Earlier, he worked in enterprise operations and Azure at Colruyt Group.",
  },
  {
    keywords: ["ai agent", "ai-agent", "ai work", "agents", "samaras"],
    answer:
      "Deploying AI agents to production is Prashanth's specialty. At ThinkHat.ai he packaged agents for NOKI, Samaras, and Socratic AI as containers, wired secure model / API access, and ran them on Cloud Run and Kubernetes with monitoring and rollback. For Samaras he also built an AI DevOps agent that runs automatically from a main-branch commit through build, validation, and deployment.",
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
      "You can reach Prashanth at prashanthmanna.ai@gmail.com or connect with him on LinkedIn — both are linked in the contact section below, along with a downloadable resume.",
  },
  {
    keywords: ["the supper", "supper", "current role", "current job", "marketing", "strategy"],
    answer:
      "Since May 2026, Prashanth has been the full-time Senior Cloud & DevOps Engineer at The Supper, an Australian investment platform, and a member of its Marketing & Strategy team. He owns cloud infrastructure, DevOps, and release operations — including the AWS production backend, security for KYC-regulated workloads, SES / SNS communications, and Bitbucket CI/CD.",
  },
  {
    keywords: ["location", "where is he", "based", "relocate", "relocation", "remote"],
    answer:
      "Prashanth is based in Abu Dhabi, UAE, and is open to remote roles or relocation.",
  },
  {
    keywords: ["colruyt"],
    answer:
      "Prashanth worked at Colruyt Group, a European retail group, from 2019 to 2024 as an Operational System Engineer — supporting business-critical systems in internal data centers and on Microsoft Azure (VMs, AKS, Azure DevOps Pipelines, Entra ID, Key Vault, Blob Storage, VNet, Azure Monitor), within ITIL-style incident and change management.",
  },
  {
    keywords: ["thinkhat"],
    answer:
      "At ThinkHat.ai (2024–May 2026), Prashanth was a Cloud & DevOps Engineer focused on AI agent deployment — running agents in production for NOKI, Samaras, and Socratic AI and supporting four production platforms on GCP and AWS, including The Supper.",
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
