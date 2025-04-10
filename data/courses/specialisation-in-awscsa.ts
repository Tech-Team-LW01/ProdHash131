import { Course } from "../../types/courses";

export const specialisationInAWSCSA: Course = {
    _id: "aws-certified-solutions-architect-associate",
    title: "[B][R] AWS Certified Solutions Architect Associate [/R][/B] | Master Cloud Architecture with AWS",
    slug: "aws-certified-solutions-architect-associate",
    rating: 5,
    totalRatings: 15,
    duration: "Beginner to Advance",
    globalStatus: "GLOBALLY RECOGNISED PROGRAM",
    programBy: "Your Name",
    hours: "40+",
    price: 1999,
    originalPrice: 8000,
    enrolledStudents: 15000,
    category: "Cloud Computing",
    shortDescription: "Industry-Leading AWS Solutions Architect Training | Hands-On Labs | Real-World Projects | AWS Certification Preparation",
    paymentLink: "your-payment-link",
    backgroundImage: "/assets/cources/courseDetails/Hero.jpeg",

    learningOutcomes: [
        "AWS Core Services & Architecture Principles",
        "High Availability & Scalable Systems Design",
        "Security & Compliance in AWS",
        "Cost-Optimization Strategies",
        "Disaster Recovery Planning",
        "Network Architecture Design"
    ],

    features: [
        "Official AWS Certification Exam Preparation",
        "Technical Support for 120 days",
        "Real-World Architecture Projects",
        "Premium AWS Community Access",
        "Practice Tests & Quizzes"
    ],

    skills: [
        "AWS Services Management",
        "Cloud Architecture Design",
        "Security Implementation",
        "Cost Optimization",
        "High Availability Design",
        "Disaster Recovery",
        "Performance Optimization",
        "Migration Planning"
    ],

    requirements: [
        "Basic IT knowledge",
        "Understanding of basic networking concepts",
        "Familiarity with operating systems",
        "Basic understanding of databases"
    ],

    level: "Beginner to Advanced",
    language: "English",
    lastUpdated: "2024-01",

   
    module: [
        {
            id: 1,
            title: "Introduction to AWS and Cloud Concepts",
            description: "Foundation of AWS and cloud computing principles",
            content: [
                "AWS Global Infrastructure",
                "AWS Shared Responsibility Model",
                "AWS Pricing and Account Management",
                "Identity and Access Management (IAM)"
            ]
        },
        {
            id: 2,
            title: "Compute Services",
            description: "Understanding AWS compute solutions",
            content: [
                "Amazon EC2 and Instance Types",
                "Auto Scaling and Launch Templates",
                "Elastic Load Balancing",
                "AWS Lambda and Serverless Computing"
            ]
        },
        {
            id: 3,
            title: "Storage Services",
            description: "Managing data storage in AWS",
            content: [
                "Amazon S3 and Storage Classes",
                "EBS Volumes and Instance Store",
                "Amazon EFS and FSx",
                "Storage Gateway and Snow Family"
            ]
        },
        {
            id: 4,
            title: "Database Services",
            description: "Working with AWS database solutions",
            content: [
                "Amazon RDS and Aurora",
                "DynamoDB and DAX",
                "ElastiCache and Redshift",
                "Database Migration Services"
            ]
        },
        {
            id: 5,
            title: "Networking & Content Delivery",
            description: "Implementing AWS networking solutions",
            content: [
                "VPC Architecture and Design",
                "Subnets and Route Tables",
                "Security Groups and NACLs",
                "CloudFront and Route 53"
            ]
        },
        {
            id: 6,
            title: "Security and Identity Services",
            description: "Securing AWS infrastructure",
            content: [
                "AWS Organizations and Control Tower",
                "AWS Shield and WAF",
                "KMS and CloudHSM",
                "Security Hub and GuardDuty"
            ]
        },
        {
            id: 7,
            title: "Monitoring and Management",
            description: "Managing AWS resources effectively",
            content: [
                "CloudWatch Metrics and Logs",
                "AWS CloudTrail",
                "AWS Config and Systems Manager",
                "AWS Trusted Advisor"
            ]
        },
        {
            id: 8,
            title: "Application Integration",
            description: "Connecting applications and services",
            content: [
                "Simple Queue Service (SQS)",
                "Simple Notification Service (SNS)",
                "API Gateway",
                "AWS Step Functions"
            ]
        },
        {
            id: 9,
            title: "High Availability and Disaster Recovery",
            description: "Building resilient architectures",
            content: [
                "High Availability Design Patterns",
                "Backup and Restore Strategies",
                "Pilot Light and Warm Standby",
                "Multi-Region Architecture"
            ]
        },
        {
            id: 10,
            title: "Cost Optimization",
            description: "Optimizing AWS infrastructure costs",
            content: [
                "Cost Explorer and Budgets",
                "Reserved Instances and Savings Plans",
                "Resource Tagging Strategies",
                "Cost Optimization Best Practices"
            ]
        }
    ],

    highlights: [
        {
            number: "10",
            description: "Modules"
        },
        {
            number: "40+",
            description: "Hours of learning"
        },
        {
            number: "4",
            description: "Capstone Projects"
        }
    ],

    certificateImage: "/assets/certificate/aws_csa_Certificate.jpg",

    project: [
        {
            icon: "",
            title: "Highly Available Web Application",
            description: "Design and deploy a fault-tolerant web application architecture",
            skills: ["EC2", "Auto Scaling", "Load Balancing", "RDS Multi-AZ"]
        },
        {
            icon: "",
            title: "Serverless Data Processing",
            description: "Build a serverless data processing pipeline",
            skills: ["Lambda", "S3", "DynamoDB", "API Gateway"]
        },
        {
            icon: "",
            title: "Disaster Recovery Solution",
            description: "Implement a cross-region disaster recovery solution",
            skills: ["Route 53", "S3 Replication", "Aurora Global Database"]
        },
        {
            icon: "",
            title: "Microservices Architecture",
            description: "Design a containerized microservices architecture",
            skills: ["ECS", "ECR", "VPC", "Application Load Balancer"]
        }
    ],

    programFor: [
        { src: "/assets/cources/courseDetails/aws/Solutions-Architects.jpg", alt: "Solutions Architects", text: "Solutions Architects" },
        { src: "/assets/cources/courseDetails/aws/Cloud-Engineers.jpg", alt: "Cloud Engineers", text: "Cloud Engineers" },
        { src: "/assets/cources/courseDetails/aws/DevOps-Engineers.jpg", alt: "DevOps Engineers", text: "DevOps Engineers" },
        { src: "/assets/cources/courseDetails/aws/System-Administrators.jpg", alt: "System Administrators", text: "System Administrators" },
        { src: "/assets/cources/courseDetails/aws/IT-Managers.jpg", alt: "IT Managers", text: "IT Managers" },
        { src: "/assets/cources/courseDetails/aws/Software-Developers.jpg", alt: "Software Developers", text: "Software Developers" },
        { src: "/assets/cources/courseDetails/aws/Technical-Consultants.jpg", alt: "Technical Consultants", text: "Technical Consultants" },
        { src: "/assets/cources/courseDetails/aws/College-Students.jpg", alt: "College Students", text: "College Students" },
        { src: "/assets/cources/courseDetails/aws/Cloud-Architects.jpg", alt: "Cloud Architects", text: "Cloud Architects" },
        { src: "/assets/cources/courseDetails/aws/Infrastructure-Engineers.jpg", alt: "Infrastructure Engineers", text: "Infrastructure Engineers" }
    ],

    toolsData: {
        sectionTitle: "Complete AWS Solutions Architect Associate Program",
        category: "Cloud Computing",
        toolsCount: "15+",
        displayImage: "/assets/cources/tools/AWS.jpg",
        tools: [
            {
                id: "compute",
                icon: "TrendingUp",
                title: "Compute: EC2, Lambda, ECS"
            },
            {
                id: "storage",
                icon: "BarChart",
                title: "Storage: S3, EBS, EFS"
            },
            {
                id: "database",
                icon: "Cpu",
                title: "Database: RDS, DynamoDB, Aurora"
            },
            {
                id: "networking",
                icon: "TrendingUp",
                title: "Networking: VPC, Route 53, CloudFront"
            },
            {
                id: "security",
                icon: "BarChart",
                title: "Security: IAM, KMS, Shield"
            }
        ]
    },

};