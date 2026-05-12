import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Database, Wrench } from 'lucide-react';
import './Skills.css';

const skillsData = [
  {
    category: "Programming Languages",
    icon: <Code size={30} />,
    skills: ["Java (Intermediate)", "C", "C++", "Python"]
  },
  {
    category: "Web Technologies",
    icon: <Layout size={30} />,
    skills: ["HTML", "CSS", "Node.js", "JavaScript", "React", "TypeScript"]
  },
  {
    category: "Databases & Core",
    icon: <Database size={30} />,
    skills: ["SQL", "Machine Learning", "IoT", "DSA"]
  },
  {
    category: "Tools & Platforms",
    icon: <Wrench size={30} />,
    skills: ["VS Code", "Git", "Github", "PgAdmin"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>

        <div className="skills-grid grid grid-2">
          {skillsData.map((group, index) => (
            <motion.div 
              className="skill-card card"
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="skill-header flex-center">
                <div className="skill-icon text-primary">{group.icon}</div>
                <h3 className="skill-category">{group.category}</h3>
              </div>
              <div className="skill-tags">
                {group.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
