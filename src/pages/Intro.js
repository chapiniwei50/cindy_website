import React, { useState, useEffect } from 'react';
import { Grid, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram'; // Import Instagram icon
import './Intro.css';
import ProjectCard from '../components/projectCard';
import JobCard from '../components/jobCard';

const IntroPage = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 });

    const sections = document.querySelectorAll('div[id]');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="intro-container">
      <div id="about" className="top-container">
        <div className="intro-content">
          <div className="text-section">
            <h1>Hello, I'm Cindy 👋</h1>
            <p>I am currently a 4th year student pursuing a Master's in Computer Graphics and Gaming Technology, along with a Bachelor's degree in Computer Science. I am actively seeking a Summer 2025 internship opportunity!</p>
            {/* Add icons below intro text */}
            <div className="social-icons">
              <IconButton
                color="primary"
                href="https://www.linkedin.com/in/cindy-wei-7ba778227/" // Replace with your LinkedIn profile
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                color="primary"
                href="https://github.com/chapiniwei50" // Replace with your GitHub profile
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                color="primary"
                href="mailto:weicindy@seas.upenn.edu" // Replace with your email address
                target="_blank"
                rel="noopener noreferrer"
              >
                <EmailIcon />
              </IconButton>
              <IconButton
                color="primary"
                href="https://www.instagram.com/chapinillustration/" // Replace with your Instagram profile
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon /> {/* Instagram icon */}
              </IconButton>
            </div>
          </div>

          <div className="image-section">
            <img src="/image/anim.gif" alt="Animated GIF" className="intro-image" />
          </div>
        </div>
      </div>

      <div className="bottom-container">
        <div id="experience" className="column">
          <h2>💼 Professional Experience</h2>
          <Grid container spacing={2}>
            <JobCard title="TSMC" role="Software Engineer Intern"   date="Jun 2022 - Aug 2022" date2 ="Jun 2024 - Aug 2024"  description="Improved the FNO model for defect detection in AMRS-DB by generating and comparing reference images" imageSrc="/image/tsmc.png"  link="/tsmc"/>
            <JobCard title="CyteSi Inc."role="Software Engineer Intern"   date="Jun 2023 - Aug 2023" description="Detected precise positions of manipulated droplets on device to help enhance subsequent calculations" imageSrc="/image/cytesi.png" link="/cytesi"/>
            <JobCard title="Stanford Wing Hung Wong Laboratory"  date="Jun 2023 - Aug 2023" role="Software Engineer Intern" description="Developed and implemented image processing algorithms for droplet manipulation in cutting-edge biological automation project" imageSrc="/image/stanford.png" link="/stanford"/>
          </Grid>
        </div>

        <div id="projects" className="column">
          <h2>💻 Projects</h2>
          <Grid container spacing={2}>
            <ProjectCard  title="Mini Minecraft" 
              category="Game Development | Group Project"
              description="a simplified version of Minecraft implemented using C++ and OpenGL"
              imageSrc="/image/minecraft.png"
              link="/mini-minecraft" />
            <ProjectCard  title="SafeStreetNYC" 
              category="Web Project | Group Project"
              description="a web application aimed at helping users make informed decisions when choosing housing or Airbnb locations in New York City"
              imageSrc="/image/safestreetnyc.png"
              link="/safestreetnyc"/>
              <ProjectCard  title="Penn Course Selection" 
              category="UI/UX Case Study | Personal Project"
              description="a redesigned Penn course selection system addressing concerns raised by students"
              imageSrc="/image/path.png"
              link="/"/>
            <ProjectCard  title="Eduquest" 
              category="UI/UX Case study | Web Project | Group Project"
              description="a web platform integrated with Canvas, with different views for students and teachers, grades 5-12"
              imageSrc="/image/eduquest.png"
              link="https://docs.google.com/presentation/d/1FrQMIK5qoYuUtO1AnGGTky19tDijOC0A24tnMJMdo_A/edit?usp=sharing"/>
            <ProjectCard  title="PennSpark" 
              category="Student Club"
              description=" a student club at the University of Pennsylvania that bridge tech and design to build both creative projects and impactful products for clients and the community"
              imageSrc="/image/spark.png"
              link="/pennspark"/>
            <ProjectCard  title="Petbook" 
              category="Web Project | Group Project"
              description="a social media platform that allows pet owners to connect, share updates, and celebrate their pets"
              imageSrc="/image/petbook.png"
              link="/petbook"/>

           
            
          </Grid>
        </div>

        <div id="passion" className="column">
          <h2>✨ Passion</h2>
          <Grid container spacing={2}>
          
            <ProjectCard  title="Pennsori" 
              category="Acapella Student Club | Business Chair"
              description="the University of Pennsylvania's premier K-music fusion a cappella group."
              imageSrc="/image/sori.png"
              link="https://www.instagram.com/pennsori/"/>
                <ProjectCard  title="Chapinillustration" 
              category="2D Animation"
              description="I make animations on my ipad :D"
              imageSrc="/image/chapini.png"
              link= "https://www.instagram.com/chapinillustration/"/>
            
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
