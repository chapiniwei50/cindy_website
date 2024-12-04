import React, { useEffect } from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

const NavText = ({ href, text, isMain }) => {
  return (
    <Typography
      variant={isMain ? 'h6' : 'body1'}
      noWrap
      style={{
        marginRight: isMain ? '0' : '75px',
        fontFamily: 'Hammersmith One',
        fontWeight: 700,
        letterSpacing: '.2rem',
        fontSize: isMain ? '1.5rem' : '1rem',
        color: '#000',
      }}
    >
      <a
        href={href}
        style={{
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        {text}
      </a>
    </Typography>
  );
};

export default function NavBar() {
  useEffect(() => {
    const handleAnchorClick = (event) => {
      const href = event.target.getAttribute('href');
      if (href && href.includes('#')) {
        const [path, hash] = href.split('#');
        if (window.location.pathname === path) {
          event.preventDefault();
          const targetElement = document.querySelector(`#${hash}`);
          if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80; // Offset for fixed navbar
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth',
            });
          }
        }
      }
    };

    // Attach the event listener to all anchor links
    const navLinks = document.querySelectorAll('a[href*="#"]');
    navLinks.forEach((link) => {
      link.addEventListener('click', handleAnchorClick);
    });

    // Cleanup event listeners on component unmount
    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return (
    <AppBar
      position="fixed" // Fixed navbar at the top
      sx={{
        borderBottom: '3px solid black',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        color: '#000',
        zIndex: 1201, // Ensure navbar stays on top of other content
      }}
    >
      <Toolbar disableGutters sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
        {/* Left-aligned "Cindy Wei" */}
        <Box sx={{ display: 'flex', marginLeft: '100px', flexShrink: 0 }}>
          <NavText href="/intro" text="Cindy Wei" isMain />
        </Box>
        {/* Right-aligned navigation links */}
        <Box sx={{ display: 'flex', marginLeft: 'auto' }}>
          <NavText href="/intro#about" text="About" />
          <NavText href="/intro#experience" text="Professional Experience" />
          <NavText href="/intro#projects" text="Projects" />
          <NavText href="/intro#passion" text="Passion" />
          <NavText href="/" text="Reel" />
          <NavText href="https://peach-binny-4.tiiny.site/" text="Resume" />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
