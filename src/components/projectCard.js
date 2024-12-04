import React from 'react';
import { Card, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const CardComponent = ({ title, category, description, imageSrc, link }) => {
  return (
    <Link to={link} style={{ textDecoration: 'none' }}>
      <Card
        sx={{
          width: 410, // Make the card wider
          height: 430, // Adjust height accordingly
          margin: '20px',
          boxShadow: 3,
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '15px',
          border: 'none',
          backgroundColor: 'white', // Set the background to white
          position: 'relative',
          '&:hover': {
            transform: 'scale(1.05)',
            transition: 'transform 0.3s ease-in-out',
          },
        }}
      >
        {/* Image container */}
        <Box sx={{ flex: 2, backgroundColor: 'white', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}>
          <img
            src={imageSrc}
            alt="Project"
            style={{ 
              width: '410px', // Fixed width for the image
              height: '250px', // Fixed height for the image
              objectFit: 'cover', // Ensures the image covers the fixed size without distortion
            }}
          />
        </Box>

        {/* Title, Category, and Description */}
        <Box sx={{ padding: '20px', flex: 1 }}>
          {/* Title */}
          <Typography variant="h6" component="div" sx={{ color: 'black', fontWeight: 'bold' }}>
            {title}
          </Typography>
          
          {/* Category (smaller, gray) */}
          <Typography variant="body2" sx={{ color: 'gray', marginTop: '5px', fontSize: '12px' }}>
            {category}
          </Typography>
          
          {/* Description */}
          <Typography variant="body2" sx={{ color: 'black', marginTop: '10px', fontSize: '14px' }}>
            {description}
          </Typography>
        </Box>
      </Card>
    </Link>
  );
};

export default CardComponent;
