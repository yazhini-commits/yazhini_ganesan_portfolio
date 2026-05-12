import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import './Experience.css';

const experienceData = [
  {
    company: "God Particles, Chennai",
    role: "Web Development Intern",
    period: "Feb 2026",
    description: [
      "Built a web-based Invoice Generator product based on SAP project for automated invoice creation.",
      "Worked on the Tambaram Budget Project, contributing to web development and feature implementation."
    ]
  },
  {
    company: "Zaalima pvt. Ltd. (Remote)",
    role: "Machine Learning Intern",
    period: "Dec 2025 - Feb 2026",
    description: [
      "Built a production-ready IoT predictive maintenance ML system.",
      "Worked on an end-to-end computer vision-based visual quality control system for defect detection."
    ]
  },
  {
    company: "IBM SkillsBuild Program",
    role: "1M1B AI + Sustainability Virtual Internship",
    period: "March 2025",
    description: [
      "Worked on AI-based sustainability models using IBM Cloud and Watson Studio."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Internships
        </motion.h2>

        <div className="experience-list">
          {experienceData.map((exp, index) => (
            <motion.div 
              className="experience-item card"
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="exp-header flex-between">
                <div className="exp-title-group">
                  <div className="exp-icon text-primary">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <h4 className="exp-company text-secondary">{exp.company}</h4>
                  </div>
                </div>
                <div className="exp-period text-primary">{exp.period}</div>
              </div>
              <ul className="exp-description">
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
