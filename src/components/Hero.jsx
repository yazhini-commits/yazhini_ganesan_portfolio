import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import profileImg from '../assets/profile.png';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero flex-center">
      <div className="container hero-container">
        <motion.div 
          className="hero-image-container flex-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="image-wrapper">
            <div className="inner-circle">
              <img src={profileImg} alt="Yazhini Ganesan" className="hero-img" onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "https://ui-avatars.com/api/?name=Yazhini+Ganesan&background=1f2833&color=66fcf1&size=400";
              }} />
            </div>
            <div className="glow-effect"></div>
          </div>
        </motion.div>

        <motion.div 
          className="hero-content text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="subtitle text-primary">Hello, I'm</span>
          <h1 className="title">Yazhini Ganesan</h1>
          <h2 className="role text-secondary">B.Tech in Computer Science & Engineering</h2>
          <p className="description">
            Passionate software engineer with expertise in Java and SAP, building robust web and IoT applications. 
            Currently pursuing my degree at Sri Manakula Vinayagar Engineering College.
          </p>
          <div className="hero-buttons flex-center">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline">
              <Mail size={20} /> Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
