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
  const [ setActiveSection] = useState('');

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
              category="Software Development"
              description="This project is focused on improving performance and optimizing workflows."
              imageSrc="/image/minecraft.png"
              link="/project-details" />
            <ProjectCard  title="SafeStreetNYC" 
              category="SafeStreetNYC"
              description="This project is focused on improving performance and optimizing workflows."
              imageSrc="/image/safestreetnyc.png"
              link="/project-details"/>
               <ProjectCard  title="Mocap" 
              category="Petbook"
              description="This project is focused on improving performance and optimizing workflows."
              imageSrc="/image/mocap.png"
              link="/project-details"/>
            <ProjectCard  title="Eduquest" 
              category="Petbook"
              description="This project is focused on improving performance and optimizing workflows."
              imageSrc="/image/eduquest.png"
              link="/project-details"/>
            <ProjectCard  title="Spark" 
              category="SafeStreetNYC"
              description="This project is focused on improving performance and optimizing workflows."
              imageSrc="/image/spark.png"
              link="/project-details"/>
            <ProjectCard  title="Petbook" 
              category="Petbook"
              description="This project is focused on improving performance and optimizing workflows."
              imageSrc="/image/petbook.png"
              link="/project-details"/>

           
            
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
