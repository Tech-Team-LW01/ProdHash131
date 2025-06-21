import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Flask Web Application with CI/CD",
      objective: "Build and deploy a Python Flask application with automated testing and deployment pipeline",
      techStack: ["Python Flask", "Docker", "Jenkins", "GitHub", "AWS EC2"],
      steps: [
        "Create a Flask web application with multiple routes",
        "Write unit tests using pytest framework",
        "Set up Docker containerization",
        "Configure Jenkins CI/CD pipeline",
        "Deploy to AWS EC2 with automated rollback"
      ]
    },
    {
      id: 2,
      title: "Containerized Microservices Architecture",
      objective: "Design and implement a microservices architecture using Docker containers",
      techStack: ["Docker", "Docker Compose", "Flask", "Redis", "PostgreSQL"],
      steps: [
        "Break monolithic app into microservices",
        "Create Docker images for each service",
        "Set up inter-service communication",
        "Implement Redis for caching",
        "Configure PostgreSQL database",
        "Use Docker Compose for orchestration"
      ]
    },
    {
      id: 3,
      title: "Kubernetes Cluster Management",
      objective: "Deploy and manage applications on Kubernetes with auto-scaling and load balancing",
      techStack: ["Kubernetes", "kubectl", "YAML", "AWS EKS", "Helm"],
      steps: [
        "Set up Kubernetes cluster on AWS EKS",
        "Create deployment and service manifests",
        "Configure horizontal pod autoscaling",
        "Implement load balancing with ingress",
        "Set up persistent volumes",
        "Monitor cluster health and performance"
      ]
    },
    {
      id: 4,
      title: "Infrastructure as Code with Terraform",
      objective: "Provision and manage cloud infrastructure using Terraform automation",
      techStack: ["Terraform", "AWS", "Infrastructure as Code", "S3", "VPC"],
      steps: [
        "Design cloud architecture blueprint",
        "Write Terraform configuration files",
        "Create VPC, subnets, and security groups",
        "Provision EC2 instances and load balancers",
        "Set up S3 buckets for state management",
        "Implement infrastructure versioning"
      ]
    },
    {
      id: 5,
      title: "Monitoring and Alerting System",
      objective: "Implement comprehensive monitoring, logging, and alerting for production systems",
      techStack: ["Prometheus", "Grafana", "ELK Stack", "AWS CloudWatch", "PagerDuty"],
      steps: [
        "Set up Prometheus for metrics collection",
        "Configure Grafana dashboards",
        "Implement ELK stack for log aggregation",
        "Create custom metrics and alerts",
        "Set up notification channels",
        "Build SLA monitoring system"
      ]
    },
    {
      id: 6,
      title: "Complete DevOps Pipeline Integration",
      objective: "Integrate all previous projects into a unified, production-ready DevOps pipeline",
      techStack: ["All Previous Technologies", "GitOps", "ArgoCD", "Security Scanning"],
      steps: [
        "Implement GitOps workflow with ArgoCD",
        "Add security scanning to pipeline",
        "Set up multi-environment deployments",
        "Configure backup and disaster recovery",
        "Implement blue-green deployment strategy",
        "Create comprehensive documentation"
      ]
    }
  ];

  const bonusProject = {
    id: 7,
    title: "ML Model Deployment Pipeline",
    objective: "Deploy a machine learning model with complete MLOps pipeline including monitoring and A/B testing",
    techStack: ["Python", "Flask", "Streamlit", "Docker", "Jenkins", "AWS EKS", "Prometheus", "Terraform"],
    steps: [
      "Prepare and validate ML model (.pkl file)",
      "Create Flask API for model serving",
      "Build Streamlit interface for testing",
      "Containerize application with Docker",
      "Set up Jenkins pipeline for ML deployments",
      "Deploy to AWS EKS with auto-scaling",
      "Implement model monitoring with Prometheus",
      "Create infrastructure with Terraform",
      "Set up A/B testing framework",
      "Monitor model drift and performance"
    ]
  };

  return (
    <section id="projects" className="section-padding bg-dark-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Project <span className="gradient-text">Highlights</span>
          </h2>
          <div className="w-24 h-1 bg-primary-red mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Each project builds upon the previous one, creating a comprehensive learning experience 
            that mirrors real-world DevOps scenarios and challenges.
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-primary-red mb-4">Bonus Project</h3>
            <p className="text-gray-300">Take your skills to the next level with advanced ML deployment</p>
          </div>
          <ProjectCard project={bonusProject} index={6} isBonus={true} />
        </div>
      </div>
    </section>
  );
};

export default Projects;