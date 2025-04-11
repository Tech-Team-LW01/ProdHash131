// data/analyst/analyst.ts
import { ReactNode } from 'react';

// Import company logos
import citibank from "../../public/assets/landingPage/companyLogo/citibank.png";
import dell from "../../public/assets/landingPage/companyLogo/dell.png";
import deloitte from "../../public/assets/landingPage/companyLogo/deloitte.png";
import google from "../../public/assets/landingPage/companyLogo/google.png";
import ibm from "../../public/assets/landingPage/companyLogo/ibm.png";
import intel from "../../public/assets/landingPage/companyLogo/intel.png";
import infosys from "../../public/assets/landingPage/companyLogo/infosys.png";
import jpmorgan from "../../public/assets/landingPage/companyLogo/jpmorgan.png";
import redhat from "../../public/assets/landingPage/companyLogo/redhat.png";
import microsoft from "../../public/assets/landingPage/companyLogo/mircosoft.png";
import accenture from "../../public/assets/landingPage/companyLogo/accenture.png";
import capgemini from "../../public/assets/landingPage/companyLogo/capgemini.png";
import cognizant from "../../public/assets/landingPage/companyLogo/cognizant.png";
import hcl from "../../public/assets/landingPage/companyLogo/HCL.png";
import Oracle from "../../public/assets/landingPage/companyLogo/Oracle.jpg";
import tcs from "../../public/assets/landingPage/companyLogo/tcs.png";
import wipro from "../../public/assets/landingPage/companyLogo/Wipro.svg";
import techmahindra from "../../public/assets/landingPage/companyLogo/TechMahindra.png";
import amazon from "../../public/assets/landingPage/companyLogo/Amazon.png";
import flipkart from "../../public/assets/landingPage/companyLogo/Flipkart.png";
import netflix from "../../public/assets/landingPage/companyLogo/Netflix.png";
import paytm from "../../public/assets/landingPage/companyLogo/paytm.png";
import razorpay from "../../public/assets/landingPage/companyLogo/razorpay.png";
import salesforce from "../../public/assets/landingPage/companyLogo/salesforce.png";
import swiggy from "../../public/assets/landingPage/companyLogo/Swiggy.png";
import uber from "../../public/assets/landingPage/companyLogo/Uber.png";
import zomato from "../../public/assets/landingPage/companyLogo/Zomato.png";
import goldman from "../../public/assets/landingPage/companyLogo/Goldman.png";
import Adobe from "../../public/assets/landingPage/companyLogo/Adobe.png";
import zoho from "../../public/assets/landingPage/companyLogo/zoho.png";
import gcp from "../../public/assets/landingPage/companyLogo/gcp.png";
import Paypal from "../../public/assets/landingPage/companyLogo/PayPal.png";
import VMware from  "../../public/assets/landingPage/companyLogo/VMware.png"
import {SalaryData, AnalystData, CourseAnalystData} from "../../types/analyst"
import { specialisationInStreamlit } from '../courses/specialisation-in-streamlit';





// Define company names type
export type CompanyName = 
  | "Citibank"
  | "Dell"
  | "Deloitte"
  | "Google"
  | "IBM"
  | "Intel"
  | "Infosys"
  | "JPMorgan"
  | "Redhat"
  | "Microsoft"
  | "Wipro"
  | "Tcs"
  | "Oracle"
  | "Hcl"
  | "Cognizant"
  | "Capgemini"
  | "Accenture"
  | "TechMahindra"
  | "Amazon"
  | "Flipkart"
  | "Netflix"
  | "Salesforce"
  | "Swiggy"
  | "Uber"
  | "Zomato"
  | "Razorpay"
  | "Goldman"
  | "Adobe"
  | "zoho"
  | "gcp"
  | "PayPal"
  | "VMware"

 



// Company logos mapping
export const companyLogos: Record<CompanyName, string> = {
  Citibank: citibank.src,
  Dell: dell.src,
  Deloitte: deloitte.src,
  Google: google.src,
  IBM: ibm.src,
  Intel: intel.src,
  Infosys: infosys.src,
  JPMorgan: jpmorgan.src,
  Redhat: redhat.src,
  Microsoft: microsoft.src,
  Wipro: wipro.src,
  Tcs: tcs.src,
  Oracle: Oracle.src,
  Hcl: hcl.src,
  Cognizant: cognizant.src,
  Capgemini: capgemini.src,
  Accenture: accenture.src,
  TechMahindra: techmahindra.src,
  Amazon: amazon.src,
  Flipkart: flipkart.src,
  Netflix: netflix.src,
  Salesforce: salesforce.src,
  Swiggy: swiggy.src,
  Uber: uber.src,
  Zomato: zomato.src,
  Razorpay: razorpay.src,
  Adobe: Adobe.src,
  Goldman: goldman.src,
  zoho: zoho.src,
  gcp: gcp.src,
  PayPal: Paypal.src,
  VMware:VMware.src
};














// Analyst data for all courses
export const analystData: CourseAnalystData = {
  "specialisation-in-devops": {
    title: "Rising Demand",
    subtitle: "for DevOps since 2020",
    salary: {
      label: "Jobs in DevOps",
      values: [700000, 1200000, 1800000]
    },
    companies: [
      "Google",
      "Amazon",
      "Microsoft",
      "IBM",
      "Intel",
      "Redhat",
      "JPMorgan",
      "Deloitte",
      "Infosys"
    ] as CompanyName[],
    demand: 45,
    jobCount: "15,000+",
    description: "DevOps engineers in India have seen rising salaries due to growing demand driven by cloud computing, automation, and CI/CD practices. In 2024, entry-level salaries range from ₹4.1–15 lakh annually, with experienced professionals earning ₹15 lakh or more, reflecting the industry's focus on agile methodologies and scalable infrastructure.",
    yearLabel: "In 2025",
    salaryLabel: "Average Salaries",
    companiesLabel: "Companies Hiring",
    jobsLabel: "Available Jobs",
    jobsDescription: "Total jobs found online for DevOps"
  },







  
"specialisation-in-prometheus-grafana": {
  title: "Rising Demand",
  subtitle: "for Monitoring & Observability Experts",
  salary: {
    label: "Jobs in Prometheus & Grafana",
    values: [700000, 1200000, 1800000] // Entry, Mid, Senior level salaries in INR
  },
  companies: [
    "Accenture",
    "Tcs",
    "Infosys",
    "Wipro",
    "IBM",
    "HCL",
    "Cognizant",
    "Capgemini",
    "Oracle",
    "Microsoft"
  ] as CompanyName[],
  demand: 35, // Percentage increase in demand
  jobCount: "3,900+", // Total of all job listings mentioned (750 + 1469 + 900 + 800)
  description: "Grafana & Prometheus Engineers in India are experiencing rising salaries due to the increasing demand for monitoring, observability, and real-time data visualization. In 2025, entry-level salaries range from ₹6–12 lakh annually, while experienced professionals earn ₹18 lakh or more, highlighting the critical role of Grafana in infrastructure monitoring, performance optimization, and data-driven decision-making.",
  yearLabel: "In 2025",
  salaryLabel: "Average Salaries",
  companiesLabel: "Companies Hiring",
  jobsLabel: "Available Jobs",
  jobsDescription: "Total jobs found across Naukri, Glassdoor, Indeed, and LinkedIn"
},






"specialisation-in-shell-scripting": {
  "title": "Rising Demand",
  "subtitle": "for Shell Scripting Engineers",
  "salary": {
    "label": "Jobs in Shell Scripting",
    "values": [729000, 982000, 2000000] // Converting 7.29L, 9.82L, 20L to actual numbers
  },
  companies: [
    "Tcs",
    "Infosys",
    "Wipro",
    "Capgemini",
    "Cognizant",
    "IBM",
    "Accenture",
    "HCL Technologies",
    "Oracle",
    "TechMahindra"
  ] as CompanyName[],
  "demand": 35, // Estimated based on job market data
  "jobCount": "37,962+", // Sum of jobs from all platforms (35,000 + 1,162 + 1,000 + 800)
  "description": "Shell scripting engineers in India are experiencing rising salaries due to the growing demand for automation, system administration, and infrastructure management. In 2025, entry-level salaries range from ₹4–10 lakh annually, while experienced professionals earn ₹12 lakh or more, highlighting the increasing reliance on scripting for process automation and system optimization.",
  "yearLabel": "In 2025",
  "salaryLabel": "Average Salaries",
  "companiesLabel": "Companies Hiring",
  "jobsLabel": "Available Jobs",
  "jobsDescription": "Total jobs found across Naukri, Glassdoor, Indeed, and AmbitionBox"
},


"specialisation-in-javascript": {
  "title": "Exploding Demand",
  "subtitle": "for JavaScript Developers",  
  "salary": {
    "label": "Salary Ranges (2025)",
    "values": [500000, 1200000, 3000000] // 5L, 12L, 30L
  },
  "companies": [
    "Google", "Microsoft", "Amazon",
    "Flipkart", "Swiggy", "Zomato",
    "Paytm", "Razorpay", "Freshworks",
    "Netflix", "Meta", "Uber"
  ],
  "demand": 42, // % growth (Source: Naukri)
  "jobCount": "58,000+", // Indeed + Naukri (2025)
  "description": "JavaScript dominates web development, with 98% of websites using it. In 2025, entry-level JS devs earn ₹5–12L/year, while experts in React/Node.js hit ₹30L+. Startups and MNCs alike compete for JS talent due to its role in building scalable apps, AI integrations, and cross-platform tools.",
  "yearLabel": "2025 Trends",
  "salaryLabel": "Annual Salaries (₹)",
  "companiesLabel": "Top Tech Companies Hiring",
  "jobsLabel": "Open JS Roles",
  "jobsDescription": "Jobs on Naukri, LinkedIn, AngelList (India)"
},




"specialisation-in-java": {
  "title": "Rising Demand",
  "subtitle": "for Java Developers",
  "salary": {
    "label": "Jobs in Java Development",
    "values": [1000000, 1800000, 3000000] // Converting 10L, 18L, 30L to actual numbers
  },
  "companies": [
    "Google",
    "Microsoft",
    "Amazon",
    "Paytm",
    "Flipkart",
    "Adobe",
    "JPMorgan",
    "Goldman",
    "zoho",
    "Infosys"
  ] as CompanyName[],
  "demand": 45, // Estimated based on job market data
  "jobCount": "59,500+", // Sum of jobs from Naukri (50,000), Glassdoor (5,000), Indeed (4,500)
  "description": "Java developers are in high demand due to the growing need for enterprise applications, cloud-based solutions, and backend development. In 2025, Java professionals can expect competitive salaries, with experienced developers earning ₹18 lakh or more, making Java a key skill for software development and microservices architecture.",
  "yearLabel": "In 2025",
  "salaryLabel": "Average Salaries",
  "companiesLabel": "Companies Hiring",
  "jobsLabel": "Available Jobs",
  "jobsDescription": "Total jobs found across Naukri, Glassdoor, Indeed, and LinkedIn"
},




"specialisation-in-terraform": {
  "title": "Rising Demand",
  "subtitle": "for Terraform Engineers",
  "salary": {
    "label": "Jobs in Terraform",
    "values": [1200000, 1800000, 2500000] // Converting 12L, 18L, 25L to actual numbers
  },
  "companies": [
    "Tcs",
    "Infosys",
    "Wipro",
    "Capgemini",
    "Cognizant",
    "IBM",
    "Accenture",
    "Hcl",
    "Oracle",
    "Tech Mahindra"
  ] as CompanyName[],
  "demand": 40, // Estimated based on job market data
  "jobCount": "43,600+", // Sum of jobs from Naukri (40,000), Glassdoor (1,500), Indeed (1,200), AmbitionBox (900)
  "description": "Terraform engineers in India are witnessing increasing salaries due to the rising demand for infrastructure automation, cloud provisioning, and DevOps practices. In 2025, entry-level salaries range from ₹6–12 lakh annually, while experienced professionals earn ₹15 lakh or more, highlighting Terraform's significance in cloud automation and infrastructure as code (IaC)",
  "yearLabel": "In 2025",
  "salaryLabel": "Average Salaries",
  "companiesLabel": "Companies Hiring",
  "jobsLabel": "Available Jobs",
  "jobsDescription": "Total jobs found across Naukri, Glassdoor, Indeed, and AmbitionBox"
},




"specialisation-in-ai-ml": {
  "title": "Rising Demand",
  "subtitle": "for AI Engineers",
  "salary": {
    "label": "Jobs in AI",
    "values": [700000, 1200000, 1800000]  // Converting 12L, 18L, 25L to actual numbers
  },
  "companies": [
    "Accenture",
    "Infosys",
    "Wipro",
    "Deloitte",
    "Microsoft",
    "Google",
    "IBM",
    "Amazon",
    "Tcs",

  ] as CompanyName[],
  "demand": 40, // Estimated based on job market data
  "jobCount": "24,000+", // Sum of jobs from Naukri (40,000), Glassdoor (1,500), Indeed (1,200), AmbitionBox (900)
  "description": "AI engineers in India are witnessing increasing salaries due to the rising demand for infrastructure automation, cloud provisioning, and DevOps practices. In 2025, entry-level salaries range from ₹6–12 lakh annually, while experienced professionals earn ₹15 lakh or more, highlighting AI significance in cloud automation and infrastructure as code (IaC)",
  "yearLabel": "In 2025",
  "salaryLabel": "Average Salaries",
  "companiesLabel": "Companies Hiring",
  "jobsLabel": "Available Jobs",
  "jobsDescription": "Total jobs found across Naukri, Glassdoor, Indeed, and AmbitionBox"
},


















"specialisation-in-splunk": {
  "title": "Rising Demand",
  "subtitle": "for Splunk Engineers",
  "salary": {
    "label": "Jobs in Splunk",
    "values": [850000, 1230000, 2500000] // Converting 8.5L, 12.3L, 25L to actual numbers
  },
  "companies": [
    "Accenture",
    "Tcs",
    "Infosys",
    "Wipro",
    "IBM",
    "Hcl",
    "Cognizant",
    "Capgemini",
    "Oracle",
    "Tech Mahindra"
  ] as CompanyName[],
  "demand": 38, // Estimated based on job market data
  "jobCount": "21,450+", // Sum of jobs from Naukri (18,000), Glassdoor (1,350), Indeed (1,200), LinkedIn (900)
  "description": "Splunk Engineers in India are experiencing rising salaries due to the growing demand for data analysis, security monitoring, and log management. In 2025, entry-level salaries range from ₹6–12 lakh annually, while experienced professionals earn ₹15 lakh or more, highlighting the increasing reliance on Splunk for enterprise security, observability, and real-time data insights",
  "yearLabel": "In 2025",
  "salaryLabel": "Average Salaries",
  "companiesLabel": "Companies Hiring",
  "jobsLabel": "Available Jobs",
  "jobsDescription": "Total jobs found across Naukri, Glassdoor, Indeed, and LinkedIn"
},


"docker-certified-associate-2024": {
    title: "Docker Professionals – Salaries, Hiring Companies & Job Opportunities in India",
    subtitle: "High Demand for Docker Experts in 2025",
    salary: {
      label: "Salaries for Docker Professionals",
      values: [600000, 1200000, 2000000, 3000000]
    },
    companies: [
      "Amazon",
      "gcp",
      "Microsoft",
      "Netflix",
      "Adobe",
      "PayPal",
      "Infosys",
      "Tcs",
      "Cognizant",
      "Zoho"
    ],
    demand: 40,
    jobCount: "20,500+",
    description: "Docker professionals are in high demand as organizations increasingly adopt containerization for scalable and efficient software deployment. Mastering Docker and container orchestration can significantly boost career opportunities in cloud-native environments, making it a must-have skill for DevOps and cloud engineers in 2025.",
    yearLabel: "In 2025",
    salaryLabel: "Average Salaries",
    companiesLabel: "Top Companies Hiring Docker Experts",
    jobsLabel: "Job Opportunities",
    jobsDescription: "Total jobs found across Naukri, Glassdoor, Indeed, and LinkedIn"
  },


"specialisation-in-mongodb": {
    title: "MongoDB Professionals – Salaries, Hiring Companies & Job Opportunities in India",
    subtitle: "High Demand for MongoDB Experts in 2025",
    salary: {
      label: "Salaries for MongoDB Professionals",
      values: [600000, 1000000, 1800000, 2800000]
    },
    companies: [
      "Google",
      "Amazon",
      "Netflix",
      "Uber",
      "Paytm",
      "Flipkart",
      "Salesforce",
      "Razorpay",
      "Swiggy",
      "Zomato"
    ],
    demand: 35,
    jobCount: "12,500+",
    description: "MongoDB professionals are in high demand as organizations shift towards NoSQL databases for high-performance, scalable applications. In 2025, MongoDB engineers can expect strong career growth, with salaries exceeding ₹18 lakh per annum for experienced professionals, making NoSQL expertise a key skill for modern database management.",
    yearLabel: "In 2025",
    salaryLabel: "Average Salaries",
    companiesLabel: "Top Companies Hiring MongoDB Professionals",
    jobsLabel: "Job Opportunities",
    jobsDescription: "Total jobs found across Naukri, Glassdoor, Indeed, and LinkedIn"
  },

  
  
"specialisation-in-jenkins": {
    title: "Jenkins Professionals – Salaries, Hiring Companies & Job Opportunities in India",
    subtitle: "High Demand for Jenkins Experts in 2025",
    salary: {
      label: "Salaries for Jenkins Professionals",
      values: [600000, 1200000, 1800000, 2500000]
    },
    companies: [
      "AWS",
      "gcp",
      "Microsoft",
      "Redhat",
      "Accenture",
      "Infosys",
      "Tcs",
      "Cognizant",
      "Capgemini",
      "Wipro"
    ],
    demand: 45,
    jobCount: "38,500+",
    description: "With enterprises adopting CI/CD pipelines and automation-driven workflows, Jenkins expertise is a must-have skill for DevOps professionals, cloud engineers, and software automation specialists. Mastering Jenkins ensures career growth in cloud-based software development and continuous integration.",
    yearLabel: "In 2025",
    salaryLabel: "Average Salaries",
    companiesLabel: "Top Companies Hiring Jenkins Experts",
    jobsLabel: "Job Opportunities",
    jobsDescription: "Total jobs found across Naukri, Glassdoor, Indeed, and LinkedIn"
  },
  

"specialisation-in-ansible": {
    title: "Ansible Automation Professionals – Salaries, Hiring Companies & Job Opportunities in India",
    subtitle: "High Demand for Ansible Experts in 2025",
    salary: {
      label: "Salaries for Ansible Professionals",
      values: [600000, 1200000, 1800000, 2500000]
    },
    companies: [
      "Redhat",
      "AWS",
      "gcp",
      "Microsoft",
      "Accenture",
      "Infosys",
      "Tcs",
      "Cognizant",
      "Capgemini",
      "Wipro"
    ],
    demand: 40,
    jobCount: "33,200+",
    description: "With the rise of infrastructure automation, Ansible expertise is becoming essential for DevOps engineers, cloud professionals, and IT administrators. Learning Ansible can boost your career in automation-driven workflows, hybrid cloud management, and enterprise-level orchestration.",
    yearLabel: "In 2025",
    salaryLabel: "Average Salaries",
    companiesLabel: "Top Companies Hiring Ansible Experts",
    jobsLabel: "Job Opportunities",
    jobsDescription: "Total jobs found across Naukri, Glassdoor, Indeed, and LinkedIn"
  },

  // ======================================================================

 "specialisation-in-kubernetes": {
    title: "Kubernetes Professionals – Salaries, Hiring Companies & Job Opportunities in India",
    subtitle: "High Demand for Kubernetes Experts in 2025",
    salary: {
      label: "Salaries for Kubernetes Professionals",
      values: [700000, 1200000, 2000000, 3000000]
    },
    companies: [
      "gcp",
      "Microsoft",
      "AWS",
      "VMware",
      "Redhat",
      "Salesforce",
      "PayPal",
      "Flipkart",
      "Zomato",
      "Infosys"
    ],
    demand: 50,
    jobCount: "31,300+",
    description: "With organizations shifting to cloud-native architectures and container orchestration, Kubernetes skills are essential for DevOps engineers, cloud architects, and automation professionals. Mastering Kubernetes can significantly enhance career prospects in modern IT environments.",
    yearLabel: "In 2025",
    salaryLabel: "Average Salaries",
    companiesLabel: "Top Companies Hiring Kubernetes Experts",
    jobsLabel: "Job Opportunities",
    jobsDescription: "Total jobs found across Naukri, Glassdoor, Indeed, and LinkedIn"
  },
"specialisation-in-streamlit": {
  "title": "Rising Demand",
  "subtitle": "for Streamlit Developers",
  "salary": {
    "label": "Jobs in Streamlit Development",
    "values": [800000, 1500000, 2500000] // Entry (8L), Mid (15L), Senior (25L)
  },
  "companies": [
    "Google",
    "Microsoft",
    "Amazon",
    "Uber",
    "Deloitte",
    "IBM",
    "PayPal",
    "Infosys",
    "Accenture",
    
  ] as CompanyName[],
  "demand": 42, // Percentage increase in demand
  "jobCount": "8,500+", // Total jobs available
  "description": "Streamlit developers in India are experiencing rising demand due to the increasing need for data applications, analytics dashboards, and ML model deployment interfaces. In 2025, entry-level salaries range from ₹8–12 lakh annually, while experienced professionals earn ₹25 lakh or more, reflecting the growing importance of data-driven applications and interactive visualization tools in modern business environments.",
  "yearLabel": "In 2025",
  "salaryLabel": "Average Salaries",
  "companiesLabel": "Companies Hiring",
  "jobsLabel": "Available Jobs",
  "jobsDescription": "Total jobs found across Naukri, Glassdoor, Indeed, and LinkedIn"
},
"specialisation-in-n8n": {
    title: "n8n Experts – Salaries, Hiring & Job Opportunities",
    subtitle: "Rapid Growth of Workflow Automation in 2025",
    salary: {
      label: "Salaries for n8n Automation Professionals",
      values: [500000, 900000, 1500000, 2500000] // Entry to expert level salaries
    },
    companies: [
      "Flipkart",
      "Zomato",
      "Infosys",
      "Google",
      "Microsoft",
      "Tcs",
      "Cognizant",
      "Capgemini",
      "Accenture"
    ],
    demand: 65, // Higher demand as automation is booming
    jobCount: "28,000+",
    description: "With businesses increasingly automating workflows and integrating no-code tools, n8n skills are highly valuable. Companies seek automation experts to build, optimize, and scale processes without complex development. Mastering n8n can open doors to automation engineering, workflow consulting, and API integration roles.",
    yearLabel: "In 2025",
    salaryLabel: "Average Salaries",
    companiesLabel: "Top Companies Hiring n8n Experts",
    jobsLabel: "Job Opportunities",
    jobsDescription: "Total jobs found across Naukri, Glassdoor, Indeed, and LinkedIn"
  },
  "master-web-scraping-with-beautifulsoup4": {
    title: "Web Scraping Experts – Salaries & Job Opportunities in India",
    subtitle: "Explosive Demand for Data Extraction Skills in 2025",
    salary: {
      label: "Salaries for Web Scraping Professionals",
      values: [600000, 1100000, 1800000, 3000000] // Entry to expert level salaries (Python + BS4)
    },
    companies: [
    
      "Google",
      "Flipkart",
      "Zomato",
      "Paytm",
      "Accenture",
      "Tcs",
      "AWS",
      "gcp",
      "Microsoft",
    
    ],
    demand: 75, // High demand due to data-driven decision-making
    jobCount: "35,000+",
    description: "With businesses relying heavily on data for insights, web scraping skills (especially with BeautifulSoup4) are critical. Companies seek experts to extract, clean, and analyze web data for market research, competitor analysis, and AI training. Mastering BS4 opens doors to roles like Data Engineer, Scraping Specialist, and Research Analyst.",
    yearLabel: "In 2025",
    salaryLabel: "Average Salaries",
    companiesLabel: "Top Companies Hiring Web Scraping Experts",
    jobsLabel: "Job Opportunities",
    jobsDescription: "Total jobs found across Naukri, Glassdoor, Indeed, and LinkedIn"
},
"specialisation-in-javascriptandreact": {
    title: "JavaScript & React Developers – Salaries, Hiring & Job Trends",  
    subtitle: "Frontend Development Demand in 2025",  
    salary: {
      label: "Salaries for React Developers (India)",  
      values: [600000, 1200000, 1800000, 3000000] // Fresher to Lead/Architect level  
    },  
    companies: [  
      "Flipkart",  
      "Swiggy",  
      "Amazon",  
      "Netflix",  
      "Meta",  
      "PayPal",  
      "Uber",  
      "Zomato",  
      "Hotstar"  
    ],  
    demand: 82, // Higher than average tech job growth  
    jobCount: "42,000+",  
    description: "React and JavaScript remain the backbone of modern web development. With 90% of Fortune 500 companies using React, skilled developers are needed to build scalable, interactive UIs. Mastery of React hooks, state management, and performance optimization can lead to roles like Frontend Engineer, UI Developer, or Fullstack Developer.",  
    yearLabel: "In 2025",  
    salaryLabel: "Average Annual Salaries (INR)",  
    companiesLabel: "Top Companies Hiring React Devs",  
    jobsLabel: "Global Job Openings",  
    jobsDescription: "Jobs listed on LinkedIn, Naukri, and AngelList for React/JavaScript roles"  
},
"specialisation-in-javascriptandreactnode": {
    title: "Full-Stack JavaScript Developers – 2025 Job Outlook & Salaries",  
    subtitle: "React + Node.js/Express Demand in Modern Web Development",  
    salary: {
      label: "India Salary Range (Annual INR)",  
      values: [800000, 1500000, 2500000, 4000000] // Fresher → Senior → Architect  
    }, 
    companies: [  
      "Flipkart",  
      "Swiggy",  
      "Amazon",  
      "Netflix",  
      "Meta",  
      "PayPal",  
      "Uber",  
      "Zomato",  
      "Hotstar"  
    ],  
    demand: 82, // Higher than average tech job growth  
    jobCount: "42,000+",  
    description: "Full-stack JavaScript developers (React + Node.js) dominate India's tech hiring. With 75% of startups and enterprises building with this stack, professionals skilled in React hooks, Express APIs, and system design can target roles like:",  
    yearLabel: "In 2025",  
    salaryLabel: "Average Annual Salaries (INR)",  
    companiesLabel: "Top Companies Hiring React Devs",  
    jobsLabel: "Global Job Openings",  
    jobsDescription: "Jobs listed on LinkedIn, Naukri, and AngelList for React/JavaScript roles"  
},

"prompt-engineering-masterclass": {
    title: "Prompt Engineering Specialists – 2025 Job Outlook & Salaries",  
    subtitle: "AI/LLM Prompt Engineering Demand in Enterprise AI Development",  
    salary: {
      label: "India Salary Range (Annual INR)",  
      values: [1000000, 2000000, 3500000, 5000000] // Fresher → Senior → AI Architect  
    }, 
    companies: [  
      "OpenAI",  
      "Google",  
      "Microsoft",  
      "Amazon",  
      "Anthropic",  
      "Meta",  
      "IBM",  
      "Adobe",  
      "Cohere"  
    ],  
    demand: 92, // Higher than average tech job growth  
    jobCount: "25,000+",  
    description: "Prompt Engineering specialists are in high demand as AI adoption grows. With 80% of enterprises implementing AI/LLM solutions, professionals skilled in prompt design, LangChain, and AI optimization can target lucrative roles across tech giants and startups.",  
    yearLabel: "In 2025",  
    salaryLabel: "Average Annual Salaries (INR)",  
    companiesLabel: "Top Companies Hiring Prompt Engineers",  
    jobsLabel: "Global Job Openings",  
    jobsDescription: "Jobs listed on LinkedIn, Indeed, and specialized AI job boards for Prompt Engineering roles"  
},
"haproxy-masterclass": {
    title: "HAProxy Load Balancer Specialists – 2025 Job Outlook & Salaries",  
    subtitle: "Load Balancer & High Availability Expert Demand in Enterprise Infrastructure",  
    salary: {
      label: "India Salary Range (Annual INR)",  
      values: [800000, 1500000, 2200000, 3500000] // Junior → Mid → Senior → Architect  
    }, 
    companies: [  
      "Amazon",  
      "Microsoft",  
      "Google",  
      "Netflix",  
      "Flipkart",  
      "Walmart",  
      "IBM",  
      "Oracle",  
      "Cisco"  
    ],  
    demand: 78, // High growth rate in infrastructure sector  
    jobCount: "15,000+",  
    description: "HAProxy and Load Balancing specialists are crucial for modern web infrastructure. With 70% of enterprises requiring high-availability solutions, professionals skilled in HAProxy, load balancing, and security optimization can target roles across major tech companies.",  
    yearLabel: "In 2025",  
    salaryLabel: "Average Annual Salaries (INR)",  
    companiesLabel: "Top Companies Hiring Load Balancer Specialists",  
    jobsLabel: "Global Job Openings",  
    jobsDescription: "Jobs listed on LinkedIn, Indeed, and Naukri for HAProxy and Load Balancing roles"  
},
  "ldap-masterclass": {
    title: "LDAP Specialists – 2025 Job Outlook & Salaries",  
    subtitle: "Directory Services & Identity Management Expert Demand in Enterprise IT",  
    salary: {
      label: "India Salary Range (Annual INR)",  
      values: [600000, 1200000, 2000000, 3000000] // Junior → Mid → Senior → Architect  
    }, 
    companies: [  
      "Microsoft",  
      "IBM", 
      "Oracle",
      "Red Hat",
      "Deloitte",
      "TCS",
      "Infosys", 
      "Accenture",
      "Wipro"
    ],  
    demand: 65, // Steady growth in enterprise IT sector  
    jobCount: "12,000+",  
    description: "LDAP specialists are essential for enterprise identity management and directory services. With 65% of enterprises implementing centralized authentication solutions, professionals skilled in LDAP, Active Directory, and identity management can secure roles in major IT companies.",  
    yearLabel: "In 2025",  
    salaryLabel: "Average Annual Salaries (INR)",  
    companiesLabel: "Top Companies Hiring LDAP Specialists",  
    jobsLabel: "Global Job Openings",  
    jobsDescription: "Jobs listed on LinkedIn, Indeed, and Naukri for LDAP and Directory Services roles"  
},
"aws-certified-solutions-architect-associate": {
    title: "AWS Solutions Architects – 2025 Job Outlook & Salaries",
    subtitle: "Cloud Architecture & AWS Expert Demand in Global Tech Industry",
    salary: {
        label: "India Salary Range (Annual INR)",
        values: [800000, 1800000, 3500000, 6000000] // Junior → Mid → Senior → Principal Architect
    },
    companies: [
        "Amazon Web Services",
        "Accenture",
        "TCS",
        "Infosys",
        "Wipro",
        "IBM",
        "Cognizant",
        "Deloitte",
        "Microsoft",
        "JPMorgan Chase"
    ],
    demand: 85, // High growth in cloud adoption across industries
    jobCount: "50,000+",
    description: "AWS Solutions Architects are in high demand as 85% of enterprises accelerate their cloud adoption. With AWS maintaining 32% of global cloud market share, certified Solutions Architects can secure high-paying roles across Fortune 500 companies, startups, and consulting firms. The role combines cloud expertise with architecture design, making it one of tech's most sought-after positions.",
    yearLabel: "In 2025",
    salaryLabel: "Average Annual Salaries (INR)",
    companiesLabel: "Top Companies Hiring AWS Solutions Architects",
    jobsLabel: "Global Job Openings",
    jobsDescription: "Active job listings on LinkedIn, Naukri, Indeed, and AWS Jobs portal for AWS Solutions Architect roles",
    
  
},
"advance-linux-training": {
    title: "Linux System Administrators – 2025 Job Outlook & Salaries",
    subtitle: "Linux Administration & DevOps Expert Demand in Global Tech Industry",
    salary: {
        label: "India Salary Range (Annual INR)",
        values: [500000, 1200000, 2500000, 4500000] // Junior → Mid → Senior → Principal Linux Admin
    },
    companies: [
        "Red Hat",
        "IBM",
        "Oracle",
        "Google",
        "Amazon",
        "TCS",
        "Infosys",
        "Wipro",
        "HCL Technologies",
        "Tech Mahindra"
    ],
    demand: 78, // High growth in Linux adoption across industries
    jobCount: "45,000+",
    description: "Linux System Administrators are experiencing increased demand as 78% of enterprises rely on Linux for their critical infrastructure. With Linux powering 96.3% of the world's top web servers and being the preferred OS for cloud infrastructure, certified Linux administrators are essential across industries. The role combines system administration expertise with automation skills, making it crucial for modern IT operations. The emergence of DevOps has further elevated the importance of Linux expertise, as it's fundamental to containerization, CI/CD, and cloud operations.",
    yearLabel: "In 2025",
    salaryLabel: "Average Annual Salaries (INR)",
    companiesLabel: "Top Companies Hiring Linux System Administrators",
    jobsLabel: "Global Job Openings",
    jobsDescription: "Active job listings on LinkedIn, Naukri, Indeed, and company career portals for Linux System Administrator and related DevOps roles",

    
 
   
},


 
};

// Optional: Add validation function
export function isValidCompany(company: string): company is CompanyName {
  return company in companyLogos;
}

// Optional: Add helper function to get course data
export function getCourseAnalystData(courseId: string): AnalystData | undefined {
  return analystData[courseId];
}