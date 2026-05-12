import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Award, Medal } from 'lucide-react';
import './Achievements.css';

const achievementsData = [
  {
    title: "1st Prize - Innovators Day (SMVEC)",
    description: "Smart Train Ticket Verification System",
    icon: <Trophy />,
    image: "/innovators-cert.jpg",
    link: "/innovators-cert.jpg"
  },
  {
    title: "2nd Prize - Paper Presentation",
    description: "KEC, Erode",
    icon: <Medal />,
    image: "/kongu-cert.jpg",
    link: "/kongu-cert.jpg"
  },
  {
    title: "Participated in 3x Hackathons",
    description: "Active participant in competitive programming and development.",
    icon: <Star />
  },
  {
    title: "NPTEL Elite Certificate",
    description: "Joy of Computing (Python)",
    icon: <Award />,
    image: "/nptel-cert.jpg",
    link: "/nptel-cert.jpg"
  },
  {
    title: "AI and AI Tools Workshop",
    description: "Top Engineers, IIT Madras Research Park (2026)",
    icon: <Award />,
    image: "/ai-workshop-cert.jpg",
    link: "/ai-workshop-cert.jpg"
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Achievements & Certificates
        </motion.h2>

        <div className="achievements-grid">
          {achievementsData.map((item, index) => (
            <motion.div 
              className="achievement-card glass"
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="achievement-icon text-primary flex-center">
                {item.icon}
              </div>
              <div className="achievement-content">
                <h3 className="achievement-title">{item.title}</h3>
                <p className="achievement-desc text-secondary">{item.description}</p>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="btn-certificate">
                    View Certificate
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
