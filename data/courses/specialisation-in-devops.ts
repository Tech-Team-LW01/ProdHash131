
import { Course } from "../../types/courses";
export const  specialisationInDevops:Course = {
    _id: "specialisation-in-devops",
    title: "[B] [R]Specialisation in  DevOps [/R] [/B] | Become a DevOps Expert in 3 months",
    slug: "specialisation-in-devops",
    rating: 5,
    totalRatings: 10,
    duration: "3 Months",
    globalStatus: "GLOBALLY RECOGNISED PROGRAM",
    programBy: "Vimal Daga",
    hours: "310+",
    price: 20000,
    originalPrice: 45000,
    enrolledStudents: 12000,
    category: "DevOps",
    shortDescription: "Industry Relevant & Recognized Training | Gain HandsOn Experience | Best-In-Class Content | Industry Use-Cases",
    paymentLink:"https://rzp.io/rzp/8nXh0w8",
    backgroundImage: "/assets/cources/courseDetails/Hero.jpeg",
 
    learningOutcomes: [
      "Master Git and GitHub - From Beginner to Advanced Level",
      "Automation Using Ansible",
      "Monitoring Tools : Prometheus & Grafana",
      "Jenkins & Build Automation",
      "Docker, Container & Kubernetes",
      "And much more…"

    ],
    features: [
      "Most Relevant DevOps Tips & Tricks to become more productive",
      "Technical Support for 90 days",
      "Premium #13 DevOps Community Membership"
    ],
    skills: [
      "Linux Administration",
      "Shell Scripting",
      "System Security",
      "Networking"
    ],
    requirements: [
      "Basic computer knowledge",
      "Interest in system administration"
    ],
    level: "Beginner to Advanced",
    language: "English",
    lastUpdated: "2024-01",
    
    module:  [
      {
        id: 1,
        title: "Master Git & GitHub",
        description: "A code hosting platform for version control and collaboration.",
        content: ["Git Basics", "Git Commands", "Clone a Repository", "Git Branching", "Merging", "Git Stash", "Git Add Interactive", "Reflog", "Cherry Picking", "Git Rebase", "Git Bisect", "Fetching and Pulling Content", "Working With Multiple Repositories", "Pushing Code", "Pull Requests", "Git Log", "Squashing Commits", "Cherry-Picking and Three-Way Merges", "Git Hooks", "Advanced: Beyond the Basics", "GitHub Overview", "SSH Authentication", "GitHub Repository", "GitHub Repository Branches", "GitHub Tags and Releases", "Comparing Differences", "Social Coding", "GitHub Issues", "GitHub Gists", "GitHub Organisations", "Git And Github Interview Questions"],
      },
      {
        id: 2,
        title: "DCA- Docker Certified Associate ",
        description: "Create content that ranks well in search engines.",
        content: ["Introduction of container",
"Introduction of docker",
"Need for Docker in the industry",
"Benefits of docker",
"Downloading & installing docker",
"Different ways to install OS",
"Difference between virtualization & containerization",
"What is an image & how to download images?",
"What is docker hub?",
"How to make docker permanently enable",
"Remove all containers in one go",
"How to start/stop & remove the container",
"Why docker is super fast?","What are docker images?",
"How to download Docker images",
"Launching a container with an image",
"Keywords in Docker files",
"Making a custom image with a docker file",
"Keywords in docker file (FROM, RUN, COPY, CMD, WORKDIR,etc)",
"COPY vs ADD Instructions",
"EXPOSE Instruction",
"Difference between CMD & Entrypoint",
"How to save image",
"How to push the image in the docker hub",
"How to tag image",
"Environmental variables in docker file",
"Layers of Images",
"Flattening",
"Docker Commit",
"Tag an Image",
"Filter and Format",
"Basic Commands",
"The copy-on-write (COW) Strategy",
"Registry",
"Repositories",
"Docker Push, Content Trust, and Pull",
"Push an Image to Docker Hub",
"Inspect, Remove and Prune Image",
"Pull and Delete an Image"
,"Types of IP address",
"NATing (Network address translation)",
"Different types of NATing (SNAT & DNAT)",
"PATing (Port address translation)",
"Router & Switches",
"Network inspection",
"Different types of network",
"Bridge network type in docker",
"Host network type in docker",
"Creating a custom network",
"Launching container in our custom network",
"Changing the network of container",
"Load balancing",
"Network Architecture",
"Bridge networks",
"Creating a Bridge Network",
"Host networking",
"Overlay networks",
"Macvlan networks",
"None Network",
"Prune Network",
"Container networking model",
"Container Networking",
"Use Cases of Network Drivers",
"Identifying Ports",
"Publishing Ports",
"What is Container Orchestration?",
"What is a Docker Swarm?",
"Building a Docker Swarm",
"Docker Swarm Services",
"Deployments in Swarms",
"Scaling a Service in Swarm",
"Rolling Updates in Swarm",
"Draining a Node in Swarm",
"Connecting to a Network in Swarm",
"Giving Storage Access in Swarm",
"Storage & its types",
"What is Ephemeral & Persistent storage",
"How to make storage permanent in docker",
"How to attach a volume to a container",
"Join nodes to swarm",
"Create Replicated and Global Services",
"Running Container vs. Running Service",
"Deploy a Service on Overlay Network",
"Run a Container into a Running Service under Swarm",
"Locking in Swarm Cluster",
"Drain swarm node",
"Docker Inspect",
"Inspect a service on swarm",
"Replicated vs Global Service",
"Scaling Swarm Service",
"Manipulate services in stack",
"Persistent Storage",
"Select Storage Driver and Configure Device Mapper",
"Docker Storage Drivers",
"Swarm Disaster Recovery",
"Docker Security",
"Default Engine Security",
"Control Groups",
"Docker Daemon Attack Surface",
"Docker Content Trust",
"Sign an Image",
"Docker Content Trust Signature Verification",
"Sign Images that UCP Can Trust",
"Describe the Process of Signing an Image",
"Vulnerabilities",
"Image Passing Security Scan",
"Client Bundle",
"Create UCP Client Bundles",
"External Certificates with DTR",
"Configuration of Certificates",
"Swarm Security",
"Secrets",
"How Docker Manages Secrets",
"Docker Secret Commands",
"How to launch the MYSQL database server in a container",
"How to launch Apache webserver in a container",
"How to create multi tier architecture in docker"],

      },
      {
        id: 3,
        title: "MKE-Mirantis Kubernetes engine",
        description: "",
        content: ["Docker CE",
"Docker EE",
"Single point of failure",
"Multi node cluster",
"Orchestration",
"Introduction MKE",
"Cloud ready support",
"UCP",
"MKE installation",
"Docker in docker",
"Swarm cluster",
"Manager & Worker node",
"UCP dashboard",
"Metrix",
"MKE master node setup",
"Mirantis Secure Registry (MSR)",
"Private Registry",
"MKE integration with MSR",
"Single sign out",
"User in MKE",
"RBAC",
"User management",
"Grants",
"Creating repository in MSR",
"Creating service",
"Creating Grants & Collections",
"Scanning of image",
"CVE database",
"Api"],
      },
      {
        id: 4,
        title: "Automation Using Ansible",
        description: "Ansible is an open-source engine that automates deployment, orchestration, cloud provisioning, and other tools.",
        content: ["Describe Ansible concepts and install Ansible Engine",
"Deploy Ansible",
"Configure Ansible to manage hosts",
"Run ad hoc Ansible commands",
"Write simple Ansible playbooks",
"Automate tasks on multiple managed hosts",
"Manage variables and facts",
"Write playbooks with variables",
"Reference facts about managed hosts",
"Implement Task Control",
"Manage task control and handlers",
"Handle task errors in Ansible playbooks",
"Deploy files to managed hosts",
"Manage and adjust files on hosts",
"Manage large projects",
"Optimize playbooks for complex projects",
"Simplify playbooks with roles",
"Develop playbooks quickly",
"Reuse Ansible code",
"Troubleshoot Ansible",
"Debug playbooks and managed hosts",
"Automate Linux administration tasks",
"Configure packages with yum",
"Manage services",
"Handle files with copy, file, template",
"Use lineinfile module",
"Implement application modules (pip, mysql_db, mysql_user)",
"Monitor stack status",
"Use wait_for and uri modules",
"Implement register and fail conditions",
"Convert to Roles (tasks, handlers, files, templates)",
"Implement Site.yml with includes",
"Manage variables (facts, defaults, vars)",
"Use with_dict and vars_files",
"Configure group_vars and vault",
"Implement selective removal",
"Use shell and register commands",
"Work with external roles and Galaxy",
"Troubleshoot ordering problems",
"Jump to specific tasks",
"Retry failed hosts",
"Perform syntax-check and dry-run",
"Debug Ansible playbooks",
"Implement testing concepts",
"Remove unnecessary steps",
"Extract repetitive tasks",
"Limit execution by hosts and tasks",
"Implement idempotence",
"Use accelerated mode and pipelining"],
      },
      {
        id: 5,
        title: "Kubernetes - CKA & CKAD",
        description: "In this course on Kubernetes, Understanding and solving use cases of Kubernetes is made easy through 100% practical hands-on sessions. This course covers the core to advance concepts of Kubernetes CKA &CKAD",
        content: ["How to set up a minikube cluster",
"How to start the Kubernetes cluster",
"How to interact with Kubernetes cluster",
"What is a pod?",
"Command to launch the pod",
"What is the YAML language?",
"How to write in a YAML language",
"How to launch a pod from the YAML file",
"How to check the details of the pods",
"How to delete all pods",
"What are labels?",
"How to set labels in a pod",
"Different types of selectors",
"What is a Replication Controller?",
"How to create the replication controller",
"Scaling of the pod",
"How to create a load balancer",
"What is a replica set & how to create it?",
"What is an environmental variable?",
"How to create an environmental variable",
"How to see the environmental variables of all pods",
"Difference between kubectl create & apply command",
"Different types of storage",
"How to make storage persistent in containers",
"What is Persistent volume claim(PVC) & how to create PVC?",
"What is Persistent volume(PV) & how to create it?",
"What are storage classes (SC) & its type?",
"What is dynamic provisioning?",
"NFS in storage class",
"What is deployment?",
"What are different strategies for deployment?",
"What is roll in & roll out?",
"Recreate & rolling update strategy of deployment",
"Launching the pod with deployment & rolling In & out",
"What are secrets in k8s, how to use secrets",
"What is kustomise?",
"How to use kustomise for launching WordPress & MariaDB pods",
"What is a namespace, and how to create it?",
"How to launch pod in a particular namespace",
"What is authentication & how does authentication work?",
"How Kubernetes do authentication",
"What is a contest in Kubernetes?",
"How API server works",
"What is authentication",
"Different types of authentication",
"How to make REHL-8 VM client for Kubernetes",
"What is context & how to create custom context",
"What is a config file & how to create it?",
"What is key & what are its different types?",
"What is encryption & decryption?",
"Certificate signing request (CSR)",
"Certificate authority (CA)",
"Chinese Remainder Theorem (CRT)",
"Role-based Access control (RBAC) & how to create a role",
"What are configuration files?",
"What is a config map?",
"How to create config map",
"How to make port permanent in Apache-webserver",
"What is ingress?",
"What is an ingress controller?",
"What is path-based routing?",
"How to create an ingress controller",
"How to set local DNS",
"What is network policy?",
"How to create network policies",
"Filtering network packets",
"What is the source port & destination port",
"Ingress & Egress",
"How to edit image name after launching container",
"Design patterns for pods",
"What are logs",
"What is an agent program?",
"How to see logs in Apache webserver",
"How to change log format",
"What is a sidecar design pattern?",
"What is an ambassador design pattern?",
"How to create a general user",
"What are capabilities",
"How to give all capabilities to container",
"How to remove capabilities from a pod",
"How to change file permission",
"Use of strace command",
"What is a service account & how to create it",
"How to list all service account",
"What is a token & where it is stored",
"How to use a token in the curl command",
"How to check all available resources",
"What is a custom resource?",
"How to create custom resources in Kubernetes"],
      },
      {
        id: 6,
        title: "Jenkins & Build Automation",
        description: "In this course of Jenkins, Understanding and solving use cases of Jenkins is made easy through 100% practical hands-on sessions. This course covers the core to advance concepts of Jenkins and the role of Jenkins in the CI/CD.",
        content: ["What/Why/How of DevOps",
"What is CI/CD",
"Introduction to Jenkins",
"How Jenkins helps in Automation",
"Role of Jenkins in DevOps Pipeline",
"Downloading and Installing Jenkins LTS in Linux over AWS Cloud",
"Core Concepts of Jenkins",
"Understanding Jenkins Jobs",
"Working with Jenkins Projects",
"Managing Jenkins",
"Understanding Jenkins Plugins",
"Build Trigger Configuration",
"Polling the SCM",
"Maven Build Steps",
"Understanding Master-Slave Architecture",
"Setting up a webserver with Jenkins and GitHub with PollSCM",
"Master-Slave architecture (Manual and Dynamic)",
"Configuring Linux as slave",
"Configuring Docker as slave",
"Real-life example of continuous integration",
"Implementing docker image updates",
"Understanding Rolling upgrades",
"Introduction to Jenkins Pipeline",
"Pipeline architecture design",
"Creating Jenkins pipeline",
"Understanding Pipeline as a Code",
"Working with groovy language in Pipeline",
"Setting up a web application with Pipeline as a Code",
"Pipeline keywords and components",
"Pipeline scenarios and demonstrations",
],
      },
      {
        id: 7,
        title: "Monitoring Tools : Prometheus & Grafana",
        description: "Powerful monitoring and visualization for modern infrastructure. Prometheus: “Flexible, scalable and reliable metrics collection and storage Grafana: “Visualize, alert, and understand your data with the leading open",
        content: ["Introduction to Prometheus and Grafana",
"Understanding metrics collection and storage",
"Setting up Prometheus monitoring",
"Configuring Prometheus data sources",
"Understanding Prometheus architecture",
"Working with Prometheus queries",
"Setting up Grafana dashboards",
"Grafana visualization techniques",
"Creating custom dashboards in Grafana",
"Configuring alerts in Grafana",
"Data analysis with Grafana",
"Prometheus metrics types",
"Understanding time series data",
"Prometheus service discovery",
"Alert management with Alertmanager",
"Grafana panels and plugins",
"Dashboard templating",
"Prometheus exporters",
"PromQL basics and advanced queries",
"Monitoring system metrics",
"Application monitoring setup",
"Container monitoring",
"Infrastructure monitoring",
"Performance metrics visualization",
"Real-time monitoring and alerting",
"Custom metrics collection",
"Data retention and scaling",
"High availability setup",
"Integration with other tools",
"Best practices for monitoring"],
      },
      {
        id: 8,
        title: "Mastering SCM & Manage CI/CD using GITLab",
        description: "This course of GitLab is designed to have a better understanding of the workflow of DevOps and core understanding of GitLab. Concepts from workflow of GitLab to Integrating Kubernetes with GitLab, this course has it all to make you industry ready for GitLab with relevant use cases.",
        content: ["Introduction to DevOps",
"Stages in DevOps",
"CI/CD fundamentals",
"GitLab Introduction",
"GitLab core components",
"Understanding Projects in GitLab",
"CI/CD basics in GitLab",
"Overview of GitLab Runners",
"Understanding SDLC",
"What/Why/How of GitLab runners",
"Types of GitLab Runners",
"Custom Runners configuration",
"Connecting GitLab using Git",
"Building a NodeJS web application using GitLab",
"Runner management and maintenance",
"Runner configuration best practices",
"Understanding SDLC",
"What/Why/How of GitLab runners",
"Types of GitLab Runners",
"Custom Runners configuration",
"Connecting GitLab using Git",
"Building a NodeJS web application using GitLab",
"Runner management and maintenance",
"Runner configuration best practices",
"Setting up CI/CD on different Runners",
"Understanding Docker integration",
"Types of Runners and use cases",
"Configuring Specific Runners",
"Building Python web application using GitLab",
"Docker integration in GitLab",
"Pushing Docker images to private registry",
"Runner optimization techniques",
"Creating advanced pipelines",
"Types of variables in GitLab",
"Protecting and Masking variables",
"Using Public Key & Private key for Authentication",
"Understanding Merging strategies",
"Testing codes using pytest",
"Building custom Docker images",
"Heroku integration",
"Docker in Docker (DinD) setup",
"Integrating Kubernetes with GitLab",
"Understanding GitOps principles",
"Working with Xac",
"Implementing GitLab Rules",
"Managing Package registry",
"Working with Tags",
"Helm integration",
"Understanding Tokens",
"Creating and managing Job Templates"],
      },
      {
        id: 9,
        title: "RedHat Enterprise Linux V9 (RHCSA)",
        description: "Entire Global Training on RHCSA V9 that covers",
        content: [  "Introduction to RHEL 9",
"Basic Linux commands",
"File system navigation",
"File management techniques",
"Text manipulation tools",
"Introduction to bash scripting",
"Command line shortcuts",
"System documentation and man pages",
"Working with vim editor",
"Shell environment configuration",
"User administration commands",
"Creating and managing users",
"Implementing password policies",
"User permission management",
"Group management",
"System account configurations",
"PAM configuration",
"User quota management",
"Access control lists (ACLs)",
"User environment customization",
"Understanding Linux file permissions",
"Using chmod command",
"Managing ownership with chown",
"Group permissions with chgrp",
"Special permissions (SUID, SGID, Sticky Bit)",
"Default permissions with umask",
"Extended attributes",
"File system ACLs",
"Recursive permission changes",
"Troubleshooting permission issues",
"Using DNF package manager",
"Installing and updating software",
"Repository management",
"Package group management",
"Managing software dependencies",
"System updates and patches",
"Creating local repositories",
"Package verification",
"DNF configuration",
"Software rollback procedures",
"Disk partitioning",
"Logical Volume Manager (LVM)",
"Creating and managing filesystems",
"Mount point configuration",
"SWAP management",
"Storage device management",
"RAID configuration",
"File system quotas",
"Disk encryption",
"Storage troubleshooting",
"Network interface configuration",
"DNS configuration",
"DHCP setup",
"Network troubleshooting",
"SSH configuration and security",
"Network security",
"Firewall configuration",
"Network services",
"IPv4/IPv6 configuration",
"Network monitoring tools",
"Using top and htop",
"Disk space monitoring",
"Log management",
"System performance analysis",
"Resource usage monitoring",
"Process monitoring",
"System statistics",
"Performance tuning",
"Monitoring tools configuration",
"Alert setup and management",
"Basic security concepts",
"Firewall management",
"SELinux configuration",
"Security policies",
"Security auditing",
"System hardening",
"Security best practices",
"SELinux troubleshooting",
"Security logging",
"Compliance monitoring",
"Process control and monitoring",
"Job scheduling with cron",
"Process priorities",
"Background processes",
"Service management",
"Systemd configuration",
"Process resource limits",
"Task automation",
"Process troubleshooting",
"System startup management",
"Local storage management for VMs",
"Creating virtual machines",
"Container management",
"Virtual network configuration",
"VM resource management",
"Container orchestration",
"VM backup and recovery",
"Virtual storage management",
"Performance optimization",
"Virtualization security"],
      },
      {
        id: 10,
        title: "Bash Shell Scripting",
        description: "Complete shell scripting training covering ",
        content: ["What is Shell & Shell Scripting?",
"Introduction to RHEL 9 and Linux Basics",
"Overview of RHEL 9 and its key features",
"GUI vs. CLI interfaces",
"Introduction to Bash Shell",
"Understanding Shell environments",
"Linux OS Fundamentals",
"Shell Basics",
"Cisco Switches basics",
"Creating a Script File and Building a Command",
"Variables & User-defined Variables",
"Status Code understanding",
"Executable Program creation",
"Understanding Path variables",
"Hashbang or Shebang usage",
"Script File basics",
"Bashrc File configuration",
"Working with Arguments",
"Pre-created Variables & Functions",
"Iteration in Shell Scripting",
"For Loop Syntax",
"While and Until loops",
"If/Else Conditions",
"Test Command usage",
"Conditional Operators",
"Nested Conditions",
"Looping Constructs",
"Looping & Flow Control",
"Process & Subprocess Management",
"File Operations basics",
"WC Command usage",
"CHMOD permissions",
"SUDO privileges",
"AWK Command implementation",
"SORT Command usage",
"UNIQ Command",
"TAIL Command",
"SCP file transfer",
"File Manipulation techniques",
"Useradd & ID Command",
"User Management Commands",
"User Lock mechanisms",
"Home Directory Management",
"Passwd File Manipulation",
"User Backup Scripting",
"Creating user accounts",
"Managing user permissions",
"User environment configuration",
"User security management",
"Regular Expressions (Regex)",
"GREP Command usage",
"Cut Command implementation",
"AWK for Text Processing",
"SED Command usage",
"Text manipulation techniques",
"Pattern matching",
"Stream editing",
"Text extraction methods",
"Advanced text filtering",
"Executing Scripts Over Network",
"Log Analysis techniques",
"Launching AWS EC2 Instance",
"WinSCP Tool usage",
"Configuring Web Server (HTTPD)",
"Access Logs & Error Logs",
"SSH & SCP Commands",
"Network script execution",
"Remote administration",
"System logging",
"Creating Options in Scripts",
"Using GETOPTS & SET Command",
"Arrays implementation",
"Job Control techniques",
"Daemon Processes",
"Signal Handling",
"Parallel Execution",
"Export Keyword usage",
"Shopt Command",
"Tree Command",
"I/O Redirection techniques",
"Input handling",
"Output management",
"Error redirection",
"Pipeline implementation",
"Standard input/output",
"File descriptors",
"Redirection operators",
"Command substitution",
"Process substitution",
"Script optimization techniques",
"Debugging scripts",
"Error handling",
"Performance tuning",
"Security considerations",
"Script documentation",
"Version control integration",
"Testing methodologies",
"Maintenance procedures",
"Best practices implementation"],
      },
      {
        id: 11,
        title: "AWS Services",
        description: "",
        content: ["AWS CodeCommit",
"AWS CodeBuild",
"AWS CodeDeploy",
"AWS CodePipeline",
"AWS CloudFormation",
"Amazon Elastic Container Service (ECS)",
"AWS Lambda",
"Amazon Elastic Kubernetes Service (EKS)",
"AWS CloudWatch",
"AWS OpsWorks",
"AWS Systems Manager",
"AWS CloudTrail",
"Amazon S3",
"AWS IAM",
"AWS Artifact"],
      },
    
    ],
    
    highlights: [
      {
        number: "11+",
        description: "Modules",
      },
      {
        number: "310+",
        description: "Hours of learning",
      },
      {
        number: "1",
        description: "Capstone Project",
      },

    ],
    
    certificateImage: "/assets/devops2.jpg",

    project: [
       {
        icon: "/assets/Projects/container.png",
        title: "Setting up a Multi-Tier Application in Containers",
        description:
          "Containerize a multi-tier application with frontend, backend, and database components. Using Docker to create and manage containers.",
        skills: ["Docker", "Kubernetes", "DevOps", "Frontend", "Backend", "Database Management"],
      },
       {
        icon: "/assets/Projects/container.png",
        title: "Setting up a Multi-Tier Application in Containers",
        description:
          "Containerize a multi-tier application with frontend, backend, and database components. Using Docker to create and manage containers.",
        skills: ["Docker", "Kubernetes", "DevOps", "Frontend", "Backend", "Database Management"],
      },
       {
        icon: "/assets/Projects/container.png",
        title: "Setting up a Multi-Tier Application in Containers",
        description:
          "Containerize a multi-tier application with frontend, backend, and database components. Using Docker to create and manage containers.",
        skills: ["Docker", "Kubernetes", "DevOps", "Frontend", "Backend", "Database Management"],
      },
       {
        icon: "/assets/Projects/container.png",
        title: "Setting up a Multi-Tier Application in Containers",
        description:
          "Containerize a multi-tier application with frontend, backend, and database components. Using Docker to create and manage containers.",
        skills: ["Docker", "Kubernetes", "DevOps", "Frontend", "Backend", "Database Management"],
      },
    ],

    programFor : [
      { src: "/assets/cources/programFor/programfor1.jpg", alt: "College Students", text: "System administrators" },
      { src: "/assets/cources/programFor/programfor2.jpg", alt: "College Students", text: "Security engineers" },
      { src: "/assets/cources/programFor/programfor3.jpg", alt: "College Students", text: "Integration specialists" },
      { src: "/assets/cources/programFor/programfor4.jpg", alt: "College Students", text: "Cloud Professionals" },
      { src: "/assets/cources/programFor/programfor5.jpg", alt: "College Students", text: "Site Reliability Engineers" },
      { src: "/assets/cources/programFor/programfor6.jpg", alt: "College Students", text: "Software Engineers" },
      { src: "/assets/cources/programFor/programfor7.jpg", alt: "College Students", text: "Solution architects" },
      { src: "/assets/cources/programFor/programfor8.jpg", alt: "College Students", text: "Application developers" },
      { src: "/assets/cources/programFor/programfor9.jpg", alt: "College Students", text: "Practitioners" },
      { src: "/assets/cources/programFor/programfor10.jpg", alt: "College Students", text: "Infrastructure Architects" },  
  ],
  toolsData: {
    sectionTitle: "Most Hands-On DevOps Program",
    category: "DevOps",
    toolsCount: "15+",
    displayImage: "/assets/cources/tools.jpg",
    tools: [
      {
        id: "infrastructure",
        icon: "TrendingUp",
        title: "Infrastructure & Automation: Terraform, Ansible, AWS CloudFormation"
      },
      {
        id: "cicd",
        icon: "BarChart",
        title: "CI/CD: Jenkins & GitLab CI"
      },
      {
        id: "containers",
        icon: "Cpu",
        title: "Containers & Orchestration: Docker, Kubernetes"
      },
      {
        id: "monitoring",
        icon: "BarChart",
        title: "Monitoring & Logging: Prometheus, Grafana, ELK"
      },
      {
        id: "version-control",
        icon: "Cpu",
        title: "Version Control: Git, GitHub"
      }
    ]
  },
}