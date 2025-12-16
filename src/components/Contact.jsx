import React from "react";
import "./Contact.css";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact">
      {/* TOP BANNER */}
      <div className="contact-hero">
        <h1>I Would Love to Make Your Ideas Real.</h1>
        <p>Get In Touch</p>
      </div>

      {/* MAIN CONTENT */}
      <div className="contact-container">
        {/* LEFT */}
        <div className="contact-left">
          <h2>Connect With Me</h2>

          {/* Email */}
          <div className="contact-card">
            <Mail className="icon blue" />
            <h3>Email</h3>
            <p>vismayakv258@gmail.com</p>
            <a href="mailto:vismayakv258@gmail.com">Write me </a>
          </div>

          {/* Phone */}
          <div className="contact-card">
            <Phone className="icon green" />
            <h3>Let's Chat</h3>
            <p>+91 9074723020</p>
            <a href="tel:+919074723020">Call / WhatsApp  </a>
          </div>

          {/* Location */}
          <div className="contact-card">
            <MapPin className="icon red" />
            <h3>Location</h3>
            <p>Kannur, Kerala</p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="contact-right">
          <h2>Write Me About Your Project</h2>

          <form className="contact-form">
            <div className="input-group">
              <label>Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>

            <div className="input-group">
              <label>Project</label>
              <textarea rows="6" placeholder="Write your project"></textarea>
            </div>

            <button type="submit">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
