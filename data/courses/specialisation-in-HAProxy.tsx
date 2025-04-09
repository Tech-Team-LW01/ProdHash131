import { Course } from "../../types/courses";

export const specialisationInHAProxy: Course = {
    _id: "specialisation-in-HAProxy",
    title:" [B][R]Prompt Engineering Masterclass[/R][B] ",
    
    slug: "specialisation-in-HAProxy",
    rating: 5,
    totalRatings: 10,
    duration: "Beginner to Advance",
    globalStatus: "GLOBALLY RECOGNISED PROGRAM",
    hours: "8+",
    //startDate: "Starting On 22nd March (Weekend Batch)",
    price:2500 ,
    originalPrice: 7500,
    enrolledStudents: 12000,
    category: "Artificial Intelligence",
    shortDescription: "Explore the technologies behind ChatGPT, GPT4, LLMs & much more",
    paymentLink: " https://rzp.io/rzp/JLv8cEhD",
    backgroundImage: "/assets/n8n (3).jpg",

learningOutcomes: [
    "Workflow Automation",
    "API Integration",
    "Custom Scripting",
    "Data Transformation",
    "Error Handling",
    "Trigger Configuration",
    "Node Mastery"
],

features: [
    "Real-World Projects",
    "Technical Support for 90 Days",
    "Premium #13 AI Community"
],

    skills: [
        "Visual Programming",
        "Logic Building",
        "Webhook Handling",
        "State Management",
        "Cron Scheduling",
        "API Requests",
        "Data Mapping",
        "Flow Debugging"
    ],

    requirements: [
        "Basic understanding of web technologies",
        "Familiarity with APIs and JSON",
        "No prior coding experience required"
    ],

    level: "Beginner to Advanced",
    language: "English",
    lastUpdated: "2024-01",


    module: [
        {
            id: 1,
            title: "Introduction to HAProxy and Load Balancing",
            description: "Gain a foundational understanding of HAProxy, load balancing principles, and their importance in web infrastructure.",
            content: [
                "Understanding HAProxy",
                "Importance and Features of Load Balancer Services",
                "Ensuring Availability and High Availability",
                "Addressing Security Concerns",
                "Handling Public IP Traffic",
                "Auditing Process and Access Control",
                "Dealing with Bad User Experience (UX)",
                "Implementing Reverse Proxy",
                "Front-end and Back-end Server Concepts",
                "Introduction to Round Robin Load Balancing",
                "Securing Communication with TLS"
            ]
        },
        {
            id: 2,
            title: "Setting Up HAProxy",
            description: "Learn how to install, configure, and run HAProxy using cloud infrastructure and Docker containers.",
            content: [
                "Installing HAProxy",
                "Launching EC2 Instance for HAProxy",
                "Utilizing Docker and Container Technology",
                "Setting Up Public IP",
                "Configuring HAProxy with Gitbash",
                "Installing Node.js and Creating a Node Server",
                "Implementing Reverse Proxy with Express",
                "Configuring Port Numbers",
                "Understanding HAProxy Configuration File",
                "Working with Timeouts",
                "Utilizing CURL Commands"
            ]
        },
        {
            id: 3,
            title: "Advanced Routing and Access Control",
            description: "Explore advanced HAProxy concepts such as ACLs, routing rules, and in-depth server management.",
            content: [
                "Creating Custom Routes",
                "Understanding Access Control Lists (ACL)",
                "Working with Backend Servers in Multi-Node Environments",
                "Utilizing Load Balancer for Target Groups",
                "Managing HTTPD Headers",
                "Exploring OSI Layer and TCP",
                "Fetching Data and Application-Level Load Balancer",
                "Role Management and Server Configuration",
                "Handling Timeouts in Detail",
                "Implementing Firewall Rules",
                "Monitoring Tools and Response Analysis",
                "Utilizing ACL Keywords and Matching Methods"
            ]
        },
        {
            id: 4,
            title: "Load Balancer Algorithms and SSL/TLS",
            description: "Learn about load balancing algorithms, SSL/TLS configuration, and analyzing HAProxy performance.",
            content: [
                "Exploring Load Balancer Algorithms",
                "Configuring SSL/TLS for Secure Communication",
                "Analyzing HAProxy Statistics",
                "Installing PHP HTTPD",
                "Implementing Weighted and Unweighted Round Robin Algorithm",
                "Utilizing Least Connection Algorithm",
                "Understanding Static Round Robin and IP Hash Load Balancer Algorithms",
                "Implementing Sticky Sessions",
                "Configuration of Frontend and Backend Servers",
                "Logging and Monitoring with VIM"
            ]
        },
        {
            id: 5,
            title: "Ensuring High Availability and Security",
            description: "Master techniques for high availability, security, and performance optimization in HAProxy environments.",
            content: [
                "Understanding Single Point of Failure",
                "Implementing High Availability Techniques",
                "Ensuring Encryption for Data Security",
                "Handling Scaler Load Balancer",
                "Access Control List (ACL) Implementation",
                "DNS Health Checking with VRRP Protocol",
                "Configuring Static IP, Floating IP, and Virtual IP",
                "Setting Up Keepalive Program",
                "Installation and Configuration of HAProxy",
                "Configuring Network Interfaces and Virtual Route IPs",
                "Utilizing Monitoring Tools like Monit",
                "Implementing Security Measures and SSL/TLS Setup",
                "Protecting against DDoS Attacks",
                "Utilizing Stick Tables and Setting up API by UNIX Socket",
                "Threading and Performance Tuning",
                "Managing SSL/TLS Termination and End-to-End Encryption",
                "Creating CSR Files and Implementing SSL Keywords"
            ]
        }
    ],
    

    programFor: [
        { src: "/assets/cources/courseDetails/shell-scripting/DevOps Engineers.jpg", alt: "DevOps Engineers", text: "Digital Marketers" },
        { src: "/assets/cources/courseDetails/terraform/Cloud Engineers.jpg", alt: "Startup Founders –", text: "Startup Founders" },
        { src: "/assets/cources/courseDetails/mongodb/System Administrators.jpg", alt: "System Administrators", text: "System Administrators" },
        { src: "/assets/cources/courseDetails/terraform/Infrastructure Engineers.jpg", alt: "Solopreneurs ", text: "Solopreneurs " },
        { src: "/assets/cources/courseDetails/terraform/Software Developers.jpg", alt: "Software Developers", text: "Software Developers" },
        { src: "/assets/cources/courseDetails/terraform/Site Reliability Engineers (SRE).jpg", alt: "Product Managers ", text: "Product Managers " },
        { src: "/assets/cources/courseDetails/terraform/Technical Co-Founders.jpg", alt: "Technical Managers", text: "Data Analytics Specialist" },
        { src: "/assets/cources/courseDetails/shell-scripting/Cloud Administrators.jpg", alt: "Cloud Architects", text: "Artificial Intelligence Consultant" },
        { src: "/assets/cources/courseDetails/terraform/IT Professionals seeking to enhance their DevOps skills.png", alt: "Working IT Professionals", text: "Working IT Professionals" },
        { src: "/assets/cources/courseDetails/terraform/Cloud Engineers.jpg", alt: "College Students", text: "Natural Language Engineer" }
    ],

    toolsData: {
        sectionTitle: "Complete n8n Automation Program",
        category: " Workflow Automation & Real-World Integrations",
        toolsCount: "10+",
        displayImage: "/assets/cources/courseDetails/n8n/n8n.jpg",
        tools: [
            {
                id: "basics",
                icon: "TrendingUp",
                title: "Learn the basics of workflows, triggers, and nodes."
            },
            {
                id: "aws",
                icon: "BarChart",
                title: "Create workflows using HTTP Webhooks and API endpoints."
            },
            
            {
                id: "modules",
                icon: "TrendingUp",
                title: "Connect and automate apps like Notion, Telegram, and Gmail."
            },
            {
                id: "automation",
                icon: "BarChart",
                title: "Use IF, Switch, and Merge nodes to control flow logic."
            },
            {       
                id: "state",
                icon: "Cpu",
                title: "Use API authentication methods like API keys and OAuth2."
            },
        ]
    },
    programBy: "Vimal Daga"
}