import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import './About.css';

const educationData = [
  {
    degree: "B.Tech Computer Science and Engineering",
    institution: "Sri Manakula Vinayagar Engineering College, Puducherry - 605107.",
    period: "Sept 2023 - May 2027",
    score: "9.25 CGPA",
    icon: <GraduationCap />
  },
  {
    degree: "Higher Secondary Certificate (12th std)",
    institution: "Bharathi Vidhya Bhavan, Erode - 638012.",
    period: "June 2022 - May 2023",
    score: "87%",
    icon: <BookOpen />
  },
  {
    degree: "Secondary School Leaving Certificate (10th)",
    institution: "Bharathi Vidhya Bhavan, Erode - 638012.",
    period: "June 2020 - May 2021",
    score: "All Pass",
    icon: <Award />
  }
];

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education Journey
        </motion.h2>

        <div className="timeline">
          {educationData.map((item, index) => (
            <motion.div 
              className="timeline-item"
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="timeline-icon flex-center">
                {item.icon}
              </div>
              <div className="timeline-content card">
                <span className="timeline-period text-primary">{item.period}</span>
                <h3 className="timeline-degree">{item.degree}</h3>
                <h4 className="timeline-institution text-secondary">{item.institution}</h4>
                <div className="timeline-score">
                  Score: <span className="text-primary">{item.score}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
