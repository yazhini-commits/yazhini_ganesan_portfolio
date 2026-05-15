import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import './Projects.css';

const projectsData = [
  {
    title: "MECH CABS",
    period: "Jun 2025 - Sept 2025",
    description: "MECH_CABS is an AI-powered roadside assistance platform that helps users connect with nearby verified mechanics and book emergency cab or bike services during vehicle breakdown situations.",
    techStack: ["Java", "Android Studio", "Firebase Realtime Database", "Google Maps API", "Location Services"],
    github: "https://github.com/yazhini-commits/MECH_CABS/tree/main",
    live: "#"
  },
  {
    title: "Smart Train Ticket Verification System",
    period: "Feb 2024 - Sept 2024",
    description: "Automated IoT ticket verification system with NFC and camera authentication. Improved verification accuracy by 65% and processing efficiency by 70%.",
    techStack: ["Arduino UNO", "ESP32 wificam", "Arduino IDE", "NFC", "Firebase"],
    github: "#",
    live: "#"
  },
  {
    title: "FactoryGuard-AI-IoT-Predictive-Maintenance-Engine",
    period: "Recent",
    description: "FactoryGuard AI leverages advanced time-series analytics and machine learning to detect early failure indicators in robotic equipment, helping organizations prevent unplanned downtime and optimize operations.",
    techStack: ["Python", "Machine Learning", "IoT"],
    github: "https://github.com/yazhini-commits/FactoryGuard-AI-IoT-Predictive-Maintenance-Engine",
    live: "#"
  },
  {
    title: "VISION_SPEC_QC",
    period: "Recent",
    description: "Production-grade computer vision system for automated PCB defect detection using transfer learning and Grad-CAM explainability. Designed for real-time visual quality inspection in high-speed manufacturing.",
    techStack: ["Python", "Computer Vision"],
    github: "#",
    live: "#"
  },
  {
    title: "Smart Laundry & Fabric Care",
    period: "Recent",
    description: "An AI-powered laundry automation system using computer vision to identify fabric types from uploaded images. It recommends optimal washing parameters to prevent fabric damage and improve efficiency.",
    techStack: ["React.js", "Node.js", "Express.js", "Computer Vision", "Tailwind CSS"],
    github: "https://github.com/yazhini-commits/FABRIC_CARE",
    live: "#"
  },
  {
    title: "SAP Based Invoice Generator",
    period: "Recent",
    description: "An SAP-based Invoice Management System with dynamic dashboard analytics, GST/TDS/TCS support, secure authentication, profile customization, and PDF invoice generation.",
    techStack: ["SAP", "SAP HANA", "SAP Fiori", "React", "Node.js"],
    github: "https://github.com/yazhini-commits/invoice_creator.git",
    live: "https://mikasa-invoice-app.vercel.app/"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>

        <div className="projects-grid grid grid-2">
          {projectsData.map((project, index) => (
            <motion.div
              className="project-card card"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="project-header flex-between">
                <FolderGit2 size={40} className="text-primary" />
                <div className="project-links">
                  <a href={project.github} className="project-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                  </a>
                  <a href={project.live} className="project-link" aria-label="Live Demo" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-period text-secondary">{project.period}</span>
                <p className="project-description">{project.description}</p>
              </div>

              <div className="project-tech">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
