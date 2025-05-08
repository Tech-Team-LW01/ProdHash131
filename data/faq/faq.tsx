// data/faq/faq.ts
import { FAQContent } from '../../types/faq';
import { ldapMasterclass } from '../courses/specialisation-in-ldap';

// Shared content template for all specializations except DevOps
const sharedSpecializationContent = {
    curriculum: [
      {
        question: "What are the key topics covered in this training?",
        answer: "The course covers fundamental to advanced topics, practical hands-on exercises, and real-world applications related to the technology being taught."
      },
      {
        question: "How many modules are included in this program?",
        answer: "The number of modules varies by course, but each program is designed to cover all essential concepts comprehensively."
      },
      {
        question: "Does this training include hands-on labs and real-world projects?",
        answer: "Yes, learners will engage in hands-on exercises and projects to gain practical experience."
      },
      {
        question: "What are the major tools and technologies covered in this course?",
        answer: "The course covers industry-standard tools and technologies that are relevant to the subject matter."
      },
      {
        question: "Will this course include case studies or practical industry use cases?",
        answer: "Yes, learners will work on case studies and industry-related projects to understand real-world applications."
      }
    ],
    timeCommitment: [
      {
        question: "Who is this program designed for?",
        answer: "This program is designed for professionals looking to upskill, beginners exploring new career opportunities, and anyone interested in mastering automation, cloud computing, and DevOps-related technologies."
      },
      {
        question: "Do I need prior experience to enroll in this course?",
        answer: "No prior experience is required. The course is structured to accommodate both beginners and experienced professionals."
      },
      {
        question: "Can beginners with no prior experience join this training?",
        answer: "Yes, the course starts with fundamental concepts and gradually progresses to advanced topics, making it suitable for beginners."
      },
      {
        question: "What technical skills should I have before taking this course?",
        answer: "No specific technical skills are required. However, a basic understanding of IT concepts may be beneficial."
      },
      {
        question: "Is this course suitable for working professionals looking to upskill?",
        answer: "Yes, the self-paced format allows professionals to learn at their convenience without disrupting their work schedules."
      }
    ],
    Program: [
      {
        question: "What are the key topics covered in this training?",
        answer: "The course covers fundamental to advanced topics, practical hands-on exercises, and real-world applications related to the technology being taught."
      },
      {
        question: "How many modules are included in this program?",
        answer: "The number of modules varies by course, but each program is designed to cover all essential concepts comprehensively."
      },
      {
        question: "Does this training include hands-on labs and real-world projects?",
        answer: "Yes, learners will engage in hands-on exercises and projects to gain practical experience."
      },
      {
        question: "What are the major tools and technologies covered in this course?",
        answer: "The course covers industry-standard tools and technologies that are relevant to the subject matter."
      },
      {
        question: "Will this course include case studies or practical industry use cases?",
        answer: "Yes, learners will work on case studies and industry-related projects to understand real-world applications."
      }
    ],
    Duration: [
      {
        question: "How long is the training program?",
        answer: "The duration varies depending on the course, but learners can complete it at their own pace."
      },
      {
        question: "What is the mode of training?",
        answer: "The training is self-paced and available online."
      },
      {
        question: "Is the course self-paced or instructor-led?",
        answer: "The course is fully self-paced, allowing learners to study at their convenience."
      },
      {
        question: "Are live sessions recorded for future reference?",
        answer: "Since this is a self-paced course, all learning materials are pre-recorded and accessible anytime."
      },
      {
        question: "How much time should I dedicate weekly to complete this course successfully?",
        answer: "The recommended time commitment varies, but learners can study at their own pace based on their availability."
      }
    ],
    Certification: [
      {
        question: "Will I receive a certification upon completing the course?",
        answer: "Yes, a certificate of completion will be provided after successfully finishing the course."
      },
      {
        question: "Is the certification industry-recognized?",
        answer: "Yes, the certification validates your skills and can be added to your professional portfolio."
      },
      {
        question: "Does this program offer placement assistance?",
        answer: "While the course enhances job readiness, placement assistance is not included."
      },
      {
        question: "How does this training help with job opportunities in the market?",
        answer: "The program equips learners with practical skills and knowledge that are highly valued by employers."
      },
      {
        question: "Are there any partnerships with hiring companies for job placements?",
        answer: "No, there are no direct hiring partnerships, but the skills acquired can significantly improve job prospects."
      }
    ],
    selectionCriteria: [
      {
        question: "How can I enroll in this program?",
        answer: "You can enroll through our website by selecting the course of your choice."
      },
      {
        question: "What is the course fee, and are there any discounts available?",
        answer: "Course fees vary by program. Discounts may be available during special promotions."
      },
      {
        question: "Is there an option for EMI or installment payments?",
        answer: "No, EMI or installment payment options are not available."
      },
      {
        question: "Are there any free trial sessions before enrolling in the full course?",
        answer: "No, free trials are not available, but detailed course outlines are provided to help you make an informed decision."
      }
    ]
};

export const faqContent: FAQContent = {
  "specialisation-in-devops": {
    curriculum: [
      {
        question: "What is the DevOps program about?",
        answer:
          "The program provides hands-on, industry-relevant training in DevOps tools and practices, preparing participants to bridge the gap between development and operations.",
      },
      {
        question: "What makes this program unique?",
        answer: (
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Industry-oriented curriculum.</li>
            <li>Real-world projects.</li>
            <li>Mentorship by experts like Mr. Vimal Daga.</li>
            <li>Certification upon completion</li>
            <li>Supportive community of learners and mentors.</li>
          </ul>
        ),
      },
    ],
    timeCommitment: [
      {
        question: "Who can enroll in this program?",
        answer: (
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Students: Final-year or fresh graduates.</li>
            <li>Professionals: IT professionals looking to transition into DevOps roles.</li>
            <li>Beginners: Anyone interested in starting a career in DevOps.</li>
          </ul>
        ),
      },
      {
        question: "Is prior technical knowledge required?",
        answer: "No, prior knowledge is not mandatory. The program starts with basics and progresses to advanced topics.",
      },
    ],
    Program: [
      {
        question: "What will I learn in this program?",
        answer: (
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Version control (Git, GitHub).</li>
            <li>CI/CD pipelines (Jenkins, GitLab CI/CD).</li>
            <li>Containerization (Docker, Kubernetes).</li>
            <li>Infrastructure as Code (Terraform, Ansible).</li>
            <li>Monitoring and logging (Prometheus, Grafana).</li>
          </ul>
        ),
      },
    ],
    Duration: [
      {
        question: "How long does the program last?",
        answer: "The program has a duration of 3 months, designed to provide in-depth learning and practical exposure.",
      },
      {
        question: "What is the mode of delivery?",
        answer: "The program is delivered live through interactive sessions, ensuring real-time engagement and hands-on learning.",
      },
    ],
    Certification: [
      {
        question: "Will I get a certificate?",
        answer: "Yes, participants will receive an industry-recognized certificate upon completion.",
      },
      {
        question: "Will there be placement assistance?",
        answer: "Yes, the program offers placement support through industry connections.",
      },
    ],
    selectionCriteria: [
      {
        question: "Can I access the content after the program ends?",
        answer: "Yes, participants have access to recorded sessions and materials for limited time.",
      },
      {
        question: "What is the fee structure?",
        answer: "The fees are mentioned on the website. Please visit the portal for detailed information.",
      },
    ],
  },
  "specialisation-in-streamlit": {
    curriculum: [
      {
        question: "What is the Streamlit program about?",
        answer:
          "The program provides comprehensive training in building data applications using Streamlit, covering everything from basics to advanced deployment, preparing participants for modern data application development.",
      },
      {
        question: "What makes this program unique?",
        answer: (
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Industry-relevant data app development curriculum.</li>
            <li>Hands-on projects with real-world datasets.</li>
            <li>Expert mentorship and guidance.</li>
            <li>Professional certification.</li>
            <li>Active learning community and support network.</li>
          </ul>
        ),
      },
    ],
    timeCommitment: [
      {
        question: "Who can enroll in this program?",
        answer: (
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Data Scientists and Analysts seeking to create interactive apps.</li>
            <li>Python developers interested in data visualization.</li>
            <li>ML Engineers looking to deploy models with user interfaces.</li>
            <li>Anyone interested in building data applications.</li>
          </ul>
        ),
      },
      {
        question: "Is prior programming knowledge required?",
        answer: "Basic Python programming knowledge is recommended. Familiarity with data analysis concepts would be beneficial but not mandatory.",
      },
    ],
    Program: [
      {
        question: "What will I learn in this program?",
        answer: (
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Streamlit framework fundamentals and setup.</li>
            <li>Interactive data visualization and analytics.</li>
            <li>ML model deployment and integration.</li>
            <li>Custom components and advanced features.</li>
            <li>Production deployment and optimization.</li>
          </ul>
        ),
      },
    ],
    Duration: [
      {
        question: "How long does the program last?",
        answer: "The program spans 2 months, with 24+ hours of comprehensive learning and practical projects.",
      },
      {
        question: "What is the mode of delivery?",
        answer: "Live interactive sessions with hands-on coding practice, ensuring real-time learning and doubt resolution.",
      },
    ],
    Certification: [
      {
        question: "Will I get a certificate?",
        answer: "Yes, upon successful completion of the course and projects, participants receive an industry-recognized certification.",
      },
      {
        question: "Is there job assistance?",
        answer: "Yes, we provide career guidance and help connect participants with relevant job opportunities in data application development.",
      },
    ],
    selectionCriteria: [
      {
        question: "Can I access the course content after completion?",
        answer: "Yes, participants get extended access to course materials, recorded sessions, and resources for continued learning.",
      },
      {
        question: "What are the program fees?",
        answer: "Please check our website for current fee structure and available discounts. We offer flexible payment options.",
      },
    ],
  },


  // Using shared content for other specializations
  "specialisation-in-prometheus-grafana": {
    ...sharedSpecializationContent
  },

"specialisation-in-kubernetes" : {
    ...sharedSpecializationContent
},
"specialisation-in-n8n": {
  curriculum: [
    {
      question: "What is the n8n Automation course about?",
      answer:
        "This course provides hands-on training in building automation workflows using n8n. You will learn to integrate APIs, automate tasks, and streamline business processes without extensive coding.",
    },
    {
      question: "What makes this course unique?",
      answer: (
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Real-world automation projects.</li>
          <li>Step-by-step hands-on workflow creation.</li>
          <li>API integrations without coding.</li>
          <li>Learn both self-hosted and cloud versions of n8n.</li>
          <li>Certification upon completion.</li>
        </ul>
      ),
    },
  ],
  timeCommitment: [
    {
      question: "Who can enroll in this course?",
      answer: (
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Students: Those interested in automation and workflow management.</li>
          <li>Business Owners: Want to automate repetitive tasks.</li>
          <li>Developers: Looking to integrate APIs effortlessly.</li>
          <li>Freelancers: Seeking to offer automation services.</li>
          <li>Non-Tech Professionals: Want to automate work without coding.</li>
        </ul>
      ),
    },
    {
      question: "Is prior technical knowledge required?",
      answer:
        "No, this course starts from the basics. You don't need coding experience, but basic familiarity with SaaS tools and APIs will be helpful.",
    },
  ],
  Program: [
    {
      question: "What will I learn in this course?",
      answer: (
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>n8n workflow fundamentals.</li>
          <li>Triggering automations with webhooks.</li>
          <li>Connecting and integrating APIs (Google Sheets, Notion, Telegram, etc.).</li>
          <li>Using logic-based nodes (If, Merge, and Switch).</li>
          <li>Debugging, error handling, and performance optimization.</li>
        </ul>
      ),
    },
  ],
  Duration: [
    {
      question: "How long does the course last?",
      answer:
        "The course is designed to be completed in 4-6 weeks, depending on your learning pace.",
    },
    {
      question: "What is the mode of delivery?",
      answer:
        "The course is delivered through self-paced video lessons, hands-on projects, and live Q&A sessions.",
    },
  ],
  Certification: [
    {
      question: "Will I get a certificate?",
      answer:
        "Yes, upon successfully completing the course, you will receive an industry-recognized certificate.",
    },
    {
      question: "Will there be job placement support?",
      answer:
        "Yes, we provide career guidance and connect learners with automation-related job opportunities.",
    },
  ],
  selectionCriteria: [
    {
      question: "Can I access the content after the course ends?",
      answer:
        "Yes, you will have lifetime access to recorded lessons and resources.",
    },
    {
      question: "What is the fee structure?",
      answer:
        "The fees are listed on our website. Please visit the course page for more details.",
    },
  ],
},
"master-web-scraping-with-beautifulsoup4": {
  curriculum: [
    {
      question: "What is the BeautifulSoup4 Web Scraping course about?",
      answer:
        "This course teaches you to extract, parse, and analyze web data using Python's BeautifulSoup4 library. You'll learn to scrape websites ethically, handle dynamic content, and automate data collection for real-world applications.",
    },
    {
      question: "What makes this course unique?",
      answer: (
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Hands-on projects (e-commerce, news, job portals).</li>
          <li>Anti-bot bypass techniques (proxies, headers, delays).</li>
          <li>Integration with APIs and databases (SQL, CSV).</li>
          <li>Ethical scraping and legal best practices.</li>
          <li>Certification upon completion.</li>
        </ul>
      ),
    },
  ],
  timeCommitment: [
    {
      question: "Who can enroll in this course?",
      answer: (
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Data Scientists</strong>: Needing datasets for AI/ML models.</li>
          <li><strong>Marketers</strong>: Tracking competitors' prices or trends.</li>
          <li><strong>Developers</strong>: Building data pipelines.</li>
          <li><strong>Researchers</strong>: Collecting academic/public data.</li>
          <li><strong>Freelancers</strong>: Offering scraping services.</li>
        </ul>
      ),
    },
    {
      question: "Is prior technical knowledge required?",
      answer:
        "Basic Python knowledge is recommended, but no prior scraping experience is needed. HTML/CSS fundamentals will be covered.",
    },
  ],
  Program: [
    {
      question: "What will I learn in this course?",
      answer: (
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>HTML parsing with BS4 (<code>find()</code>, <code>select()</code>).</li>
          <li>Handling pagination and JavaScript-heavy sites.</li>
          <li>Data cleaning/storage (Pandas, SQLite).</li>
          <li>Scraping APIs alongside HTML.</li>
          <li>Avoiding IP bans and CAPTCHAs.</li>
        </ul>
      ),
    },
  ],
  Duration: [
    {
      question: "How long does the course last?",
      answer:
        "The course is designed for 6-8 weeks, with self-paced learning and weekly live sessions.",
    },
    {
      question: "What is the mode of delivery?",
      answer:
        "Video lectures, Jupyter Notebook exercises, real-world projects, and a private Slack community for support.",
    },
  ],
  Certification: [
    {
      question: "Will I get a certificate?",
      answer:
        "Yes, a verifiable certificate is provided after completing all projects and a final assessment.",
    },
    {
      question: "Will there be job placement support?",
      answer:
        "Yes, we share scraping-related job openings and resume tips for roles like Data Engineer or Research Analyst.",
    },
  ],
  selectionCriteria: [
    {
      question: "Can I access the content after the course ends?",
      answer:
        "Yes, lifetime access to materials, including future updates (e.g., new anti-bot techniques).",
    },
    {
      question: "What is the fee structure?",
      answer:
        "Check the course page for pricing. Scholarships available for students.",
    },
  ],
},
"automation-with-selenium": {
  Program: [
    {
      question: "What is the Selenium Training Program?",
      answer:
        "The Selenium Training Program is an industry-focused course designed to teach Selenium, the most popular open-source automation tool for web applications. The program covers Selenium WebDriver, TestNG, frameworks, real-time project integration, and more."
    },
    {
      question: "Why should I learn Selenium?",
      answer:
        "Selenium is widely used in the software testing industry for automating web-based applications. Learning Selenium helps you become a professional QA automation engineer, boosts your testing skills, and increases your job opportunities in automation testing."
    }
  ],
  selectionCriteria: [
    {
      question: "Who can join this Selenium course?",
      answer:
        "Anyone interested in software testing, automation, or quality assurance can join. It is ideal for manual testers, QA engineers, developers transitioning to testing, and students with a basic understanding of software systems."
    },
    {
      question: "Is prior programming knowledge required?",
      answer:
        "No, prior programming experience is not mandatory. The course starts from the basics and gradually progresses to advanced topics. A willingness to learn and basic computer skills are all you need!"
    }
  ],
  curriculum: [
    {
      question: "What topics are covered in this Selenium training?",
      answer: (
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Selenium WebDriver fundamentals</li>
          <li>Locators and XPath strategies</li>
          <li>TestNG framework and assertions</li>
          <li>Data-driven and keyword-driven testing</li>
          <li>Page Object Model (POM)</li>
          <li>Integration with Maven, Jenkins, and Git</li>
          <li>Automation frameworks and best practices</li>
        </ul>
      )
    },
    {
      question: "Will there be practical sessions?",
      answer:
        "Yes. The course includes hands-on exercises, live coding, project implementation, and real-time testing scenarios to ensure job-readiness."
    }
  ],
  timeCommitment: [
    {
      question: "How long is the Selenium training program?",
      answer:
        "The complete program is structured into multiple sessions. Each session runs for 2.5 to 3 hours. The overall duration may vary depending on the learner’s pace and class depth."
    },
    {
      question: "Is the program online or offline?",
      answer:
        "The training is conducted in live online mode with interactive classes and direct mentorship."
    }
  ],
  Duration: [
    {
      question: "What is the duration of the Selenium course?",
      answer: "The course spans approximately 6 weeks, with flexible schedules to accommodate learners."
    },
    {
      question: "Are there any breaks during the course?",
      answer: "Yes, the course includes short breaks between sessions to ensure effective learning."
    }
  ],
  Certification: [
    {
      question: "Will I receive a certificate after the course?",
      answer:
        "Yes. You will be awarded an industry-recognized certificate upon successfully completing the training."
    }
  ],
  accessAndFees: [
    {
      question: "What is the course fee?",
      answer:
        "Fee details will be provided upon registration or inquiry. Early applicants may be eligible for discounts or scholarships."
    },
    {
      question: "Will I get lifetime access to the course content?",
      answer:
        "Yes. Post-enrollment, you will receive lifetime access to session recordings, test scripts, and all shared resources."
    }
  ]
},
"specialisation-in-mojo": {

    Program: [
      {
        question: "What is the Mojo Training Program?",
        answer:
          "The Mojo Training Program is an industry-focused course designed to teach Mojo—a new programming language built for AI developers that combines Python’s simplicity with C-level performance. The program covers fundamentals, system-level programming, matrix math, LLVM, MLIR, and more."
      },
      {
        question: "Why should I learn Mojo?",
        answer:
          "Mojo offers the power of systems programming with the readability of Python. It’s built to overcome Python’s limitations in AI/ML workloads, making it ideal for next-gen AI engineers, compiler designers, and performance-focused developers."
      }
    ],
    selectionCriteria: [
      {
        question: "Who can join this Mojo course?",
        answer:
          "Anyone interested in AI, systems programming, or high-performance computing can join. It is ideal for Python developers, ML engineers, AI researchers, and students with a programming background."
      },
      {
        question: "Is prior programming knowledge required?",
        answer:
          "No, prior programming experience is not required. We start from the basics, and the course is designed to help beginners grasp programming concepts. A passion for learning and interest is all you need!"
      }
    ],
    curriculum: [
      {
        question: "What topics are covered in this Mojo training?",
        answer:
          "Key topics include Mojo syntax, variables, memory handling, LLVM & MLIR, matrix optimization, OOP, and Python interoperability."
      },
      {
        question: "Will there be practical sessions?",
        answer:
          "Yes. The course includes hands-on sessions, code walkthroughs, and use-case implementations to ensure industry-readiness."
      }
    ],
    timeCommitment: [
      {
        question: "How much time should I dedicate weekly to complete this course successfully?",
        answer: "The recommended time commitment is 5-7 hours per week, but learners can adjust based on their pace."
      },
      {
        question: "Is the program flexible for working professionals?",
        answer: "Yes, the program is designed to accommodate working professionals with flexible schedules."
      }
    ],
    Duration: [
      {
        question: "How long is the Mojo training program?",
        answer:
          "Each session is around 2.5 to 3 hours. The complete program is structured into multiple sessions, and the duration may vary depending on pace and depth."
      },
      {
        question: "Is the program online or offline?",
        answer:
          "The training is delivered in live online mode with interactive classes and real-time mentorship."
      }
    ],
    Certification: [
      {
        question: "Will I receive a certificate after the course?",
        answer:
          "Yes. You will receive an industry-recognized certificate upon successful completion of the program."
      }
    ],
    accessAndFees: [
      {
        question: "What is the course fee?",
        answer:
          "Fee details will be shared upon registration or inquiry. Scholarships or discounts may be available for early applicants."
      },
      {
        question: "Will I get lifetime access to the course content?",
        answer:
          "Yes. You will have lifetime access to recordings, code files, and resources post-enrollment."
      }
    ]
  },
  
  "gitops-with-argo ": {
    Program: [
      {
        question: "What is the Argo CD Training Program?",
        answer:
          "The Argo CD Training Program is an industry-relevant course designed to teach GitOps and modern CI/CD practices using Argo CD. It covers everything from the basics of GitOps to deploying, managing, and automating Kubernetes workloads using Argo CD, with a hands-on and beginner-friendly approach."
      },
      {
        question: "Why should I learn Argo CD?",
        answer:
          "Argo CD is one of the most in-demand GitOps tools in DevOps and Cloud Native Engineering. It automates Kubernetes application deployment and management directly from Git, enabling scalable, reliable, and auditable workflows. Mastering Argo CD helps you become job-ready for modern cloud-native DevOps roles."
      }
    ],
    timeCommitment: [
      {
        question: "How much time should I dedicate weekly to complete this course successfully?",
        answer: "The recommended time commitment is 5-7 hours per week, but learners can adjust based on their pace."
      },
      {
        question: "Is the program flexible for working professionals?",
        answer: "Yes, the program is designed to accommodate working professionals with flexible schedules."
      }
    ],
    selectionCriteria: [
      {
        question: "Who can join this Argo CD course?",
        answer:
          "Anyone interested in DevOps, Cloud Computing, or Kubernetes can join. It is ideal for students, developers, system administrators, QA professionals, DevOps engineers, and IT professionals looking to transition into GitOps practices."
      },
      {
        question: "Is prior programming or DevOps knowledge required?",
        answer:
          "No. The course is designed for absolute beginners. Everything is taught from scratch including Git basics, YAML, Kubernetes concepts, and step-by-step Argo CD implementation."
      }
    ],
    curriculum: [
      {
        question: "What topics are covered in this Argo CD training?",
        answer:
          "Key topics include GitOps principles, Argo CD installation, application syncing, manifest structuring, auto/manual sync, rollback strategies, multi-cluster delivery, secrets handling, RBAC, Helm/Kustomize integration, monitoring, and debugging."
      },
      {
        question: "Will there be practical sessions?",
        answer:
          "Yes. Every session includes hands-on lab exercises with real-time Kubernetes clusters. You will deploy actual applications using GitOps and simulate real-world workflows."
      }
    ],
    Duration: [
      {
        question: "How long is the Argo CD training program?",
        answer:
          "The complete program is structured into 8 core modules with additional revision and project sessions. Each session is around 1.5 to 2 hours, depending on the depth of the topic."
      },
      {
        question: "Is the program online or offline?",
        answer:
          "The training is conducted in live online mode with interactive mentoring, real-time doubt clearing, and hands-on support."
      }
    ],
    Certification: [
      {
        question: "Will I receive a certificate after the course?",
        answer:
          "Yes. You will receive an industry-recognized certificate after successful completion of the Argo CD training program."
      },
      {
        question: "Does the program offer placement assistance?",
        answer:
          "Yes. Resume building, interview preparation, and GitOps role guidance will be provided. Select learners may also receive referrals to hiring partners."
      }
    ],
    accessAndFees: [
      {
        question: "What is the course fee?",
        answer:
          "Fee details will be shared upon registration or inquiry. Early-bird discounts and student scholarships may be available."
      },
      {
        question: "Will I get lifetime access to the course content?",
        answer:
          "Yes. You will have access to recorded sessions, practice labs, manifests, GitHub repositories, and documentation for up to 1 year after enrollment."
      }
    ]
  },
  



  "specialisation-in-docker": {
    ...sharedSpecializationContent
  },

  "specialisation-in-jenkins": {
    ...sharedSpecializationContent
  },

  "specialisation-in-terraform": {
    ...sharedSpecializationContent
  },

  "specialisation-in-ansible": {
    ...sharedSpecializationContent
  },
  "specialisation-in-java": {
    ...sharedSpecializationContent
  },
  "specialisation-in-mongodb": {
    ...sharedSpecializationContent
  },
  "specialisation-in-shell-scripting": {
    ...sharedSpecializationContent
  },
  "specialisation-in-splunk": {
    ...sharedSpecializationContent
  },
  "specialisation-in-ai-ml": {
    ...sharedSpecializationContent
  },
  "specialisation-in-javascript": {
    ...sharedSpecializationContent
  },
  "specialisation-in-javascriptandreact":{
    ...sharedSpecializationContent
  },
  "specialisation-in-javascriptandreactnode":{
    ...sharedSpecializationContent
  },
  "prompt-engineering-masterclass": {
    ...sharedSpecializationContent
  },
  "haproxy-masterclass":{
    ...sharedSpecializationContent,
  },
  "ldap-masterclass":{
    ...sharedSpecializationContent
  },
  "aws-certified-solutions-architect-associate":{
    ...sharedSpecializationContent
  },
 "advance-linux-training":{
  ...sharedSpecializationContent,
 },
 "master-aws-eks":{
    ...sharedSpecializationContent
 },
 "aws-devops-pro":{
  ...sharedSpecializationContent
 }
};