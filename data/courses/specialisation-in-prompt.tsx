import { Course } from "../../types/courses";

export const specialisationInPromptEngineering: Course = {
    _id: "specialisation-in-prompt",
    title:" [B][R]Prompt Engineering Masterclass[/R][B] ",
    
    slug: "specialisation-in-prompt",
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
    "Introduction",
    "Fundamentals",
    "Strategies for Prompt Construction",
    "Prompt Engineering Theory",
    "Creating Open AI API Key",
    "LangChain",
    "LLMs"
],

features: [
    "Most Relevant Prompt Engineering Tips & Tricks",
    "Technical Support for 90 days",
    "Prompt Engineering Related Industry Use Cases",
    "Premium #13 Prompt Engineering Community"
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
            title: "Introduction to Prompt Engineering",
            description: "Learn the basics of prompt engineering, the role of prompts in language generation, and key applications.",
            content: [
                "Understanding Language Generation Models",
                "Overview of Transformer Architecture",
                "Role of Attention Mechanisms",
                "Significance of Prompts in Language Generation",
                "Influence on Model Outputs",
                "Limitations of Unprompted Generation",
                "Applications and Use Cases of Prompt Engineering",
                "Text Completion",
                "Summarization",
                "Dialogue Generation"
            ]
        },
        {
            id: 2,
            title: "Fundamentals of Prompt Design",
            description: "Explore the key elements of effective prompt design and how to tailor prompts to specific tasks.",
            content: [
                "Anatomy of a Well-Designed Prompt",
                "Starting Phrases and Context",
                "Incorporating Constraints and Conditions",
                "Principles of Effective Prompt Formulation",
                "Clarity and Specificity",
                "Relevance to Task Objectives"
            ]
        },
        {
            id: 3,
            title: "Strategies for Prompt Construction",
            description: "Learn various strategies to build task-specific prompts and optimize prompt structure.",
            content: [
                "Task-Specific Prompt Templates",
                "Template Structures for Different Tasks (e.g., Translation, Summarization)",
                "Template Examples and Variations",
                "Adjusting Prompt Length and Complexity",
                "Impact on Model Understanding and Performance",
                "Strategies for Simplification or Expansion"
            ]
        },
        {
            id: 4,
            title: "Fine-Tuning Prompt Parameters",
            description: "Understand how to adjust sampling parameters and customize outputs using prompt settings.",
            content: [
                "Exploring Temperature and Top-p Sampling",
                "Balancing Diversity and Coherence",
                "Effect on Output Novelty and Relevance",
                "Customizing Prompt Settings for Desired Outputs",
                "Tuning Parameters for Specific Use Cases",
                "Optimization Strategies for Model Performance"
            ]
        },
        {
            id: 5,
            title: "Evaluating Prompt Effectiveness",
            description: "Measure the quality and effectiveness of prompts using various metrics and iterative improvement techniques.",
            content: [
                "Metrics for Assessing Output Quality",
                "BLEU Score for Translation",
                "ROUGE Score for Summarization",
                "Human Evaluation Methods and Considerations",
                "Iterative Refinement of Prompts",
                "Incorporating Feedback and Iterating Prompt Designs",
                "Continuous Improvement Strategies"
            ]
        },
        {
            id: 6,
            title: "Advanced Prompt Engineering Techniques",
            description: "Delve into advanced techniques including conditional generation and integrating domain-specific knowledge.",
            content: [
                "Conditional Generation with Prompts",
                "Incorporating Contextual Conditions for Targeted Outputs",
                "Examples and Applications in Dialogue Systems",
                "Incorporating Domain-Specific Knowledge",
                "Knowledge Prompts for Niche Subjects or Industries",
                "Integration with External Data Sources"
            ]
        },
        {
            id: 7,
            title: "Applications of Prompt Engineering",
            description: "Explore real-world applications of prompt engineering across multiple domains and use cases.",
            content: [
                "Text Completion and Continuation",
                "Generating Text from Partial Prompts",
                "Applications in Creative Writing and Storytelling",
                "Language Translation and Multilingual Generation",
                "Adapting Prompts for Multilingual Output",
                "Challenges and Solutions in Cross-Language Generation"
            ]
        }
    ],
    
    highlights: [
        {
            number: "8",
            description: "Modules"
        },
        {
            number: "8+",
            description: "Hours of learning"
        },
        {
            number: "3+",
            description: "Capstone Projects"
        }
    ],

    certificateImage: "/assets/certificate/n8n (1).jpg",

    project: [
        {
            icon: "",
            title: "AI-Powered Telegram Chatbot",
            description: "Build a Telegram bot that uses OpenAI API to generate dynamic responses in real-time.",
            skills: ["n8n", "Telegram API", "OpenAI Integration"]
        },
        {
            icon: "",
            title: "Automated Lead Capture System",
            description: "Create a workflow that captures leads from Webflow forms and stores them in Google Sheets.",
            skills: ["Webhooks", "Google Sheets", "Form Automation"]
        },
        {
            icon: "",
            title: "Social Media Auto-Poster",
            description: "Design a workflow to schedule and auto-post content to Twitter and LinkedIn from a Notion database.",
            skills: ["n8n", "Notion API", "Social Media Automation"]
        }
    ]
,    

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