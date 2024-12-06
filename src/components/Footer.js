import React from 'react';
import { Box, Typography, Link, Grid } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#1e1e1e', // Dark background color
        color: '#fff', // White text
        padding: '2rem 0', // Vertical padding
      }}
    >
      <Box
        sx={{
          maxWidth: '900px', // Fixed width of 1000px
          margin: '0 auto', // Center the container horizontally
        }}
      >
        <Grid container justifyContent="space-between" alignItems="stretch">
          {/* Left Section */}
          <Grid item xs={12} sm={6}>
            <Box sx={{ textAlign: 'left', height: '100%' }}>
              <Typography
                variant="h6"
                sx={{ color: '#ff8e61', fontWeight: 'bold', marginBottom: '1rem' }}
              >
               Thanks for visiting :D
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: '0.5rem' }}>
                weicindy@seas.upenn.edu
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: '0.5rem' }}>
                (+1) 415-316-9732
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: '0.5rem' }}>
                This website is best viewed on desktop
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: '1.5rem' }}>
                © 2024 Cindy Wei
              </Typography>
            </Box>
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end', // Push links to the bottom
                height: '100%',
                textAlign: 'right',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  gap: '2rem',
                  justifyContent: 'flex-end', // Right-align the links
                }}
              >
                <Link
                  href="mailto:weicindy@seas.upenn.edu"
                  sx={{
                    color: '#fff',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                    '&:hover': {
                      color: '#f97316', // Hover color
                    },
                  }}
                >
                  Email
                </Link>
                <Link
                  href="https://github.com/chapiniwei50"
                  target="_blank"
                  sx={{
                    color: '#fff',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                    '&:hover': {
                      color: '#f97316', // Hover color
                    },
                  }}
                >
                  Github
                </Link>
                <Link
                  href="https://www.linkedin.com/in/cindy-wei-7ba778227/"
                  target="_blank"
                  sx={{
                    color: '#fff',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                    '&:hover': {
                      color: '#f97316', // Hover color
                    },
                  }}
                >
                  LinkedIn
                </Link>
                <Link
                  href="https://peach-binny-4.tiiny.site/"
                  target="_blank"
                  sx={{
                    color: '#fff',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                    '&:hover': {
                      color: '#ff8e61', // Hover color
                    },
                  }}
                >
                  Resume
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
