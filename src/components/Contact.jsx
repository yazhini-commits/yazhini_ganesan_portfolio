import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ submitting: false, success: false, error: null });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ ...status, error: "Name, Email, and Message are required." });
      return;
    }
    
    setStatus({ submitting: true, success: false, error: null });
    try {
      await addDoc(collection(db, "messages"), {
        ...formData,
        timestamp: new Date()
      });
      setStatus({ submitting: false, success: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(s => ({ ...s, success: false })), 5000);
    } catch (err) {
      console.error("Error adding document: ", err);
      setStatus({ submitting: false, success: false, error: "Failed to send message. Check database connection." });
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>

        <div className="contact-content grid grid-2">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>Let's talk about everything!</h3>
            <p className="text-secondary">
              Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon flex-center text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <span className="info-label text-secondary">Email</span>
                  <a href="mailto:yazhiniganesan2006@gmail.com" className="info-value">yazhiniganesan2006@gmail.com</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon flex-center text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <span className="info-label text-secondary">Phone</span>
                  <a href="tel:+919080573509" className="info-value">+91 9080573509</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon flex-center text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <span className="info-label text-secondary">Location</span>
                  <span className="info-value">Puducherry, India</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form 
            className="contact-form card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
          >
            {status.error && <div className="status-message error">{status.error}</div>}
            {status.success && <div className="status-message success">Message sent successfully!</div>}
            
            <div className="form-group">
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="form-control" />
            </div>
            <div className="form-group">
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="form-control" />
            </div>
            <div className="form-group">
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" className="form-control" />
            </div>
            <div className="form-group">
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" rows="5" className="form-control"></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100 flex-center" disabled={status.submitting}>
              {status.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
