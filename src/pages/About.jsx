import React, { useEffect, useRef } from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const heroRef = useRef(null);
  const missionRef = useRef(null);
  const teamRef = useRef(null);

  useEffect(() => {
    // Hero section animation
    gsap.from(heroRef.current, {
      duration: 1.5,
      y: 100,
      opacity: 0,
      ease: 'power4.out',
    });

    // Mission section animation
    gsap.from('.mission-content', {
      scrollTrigger: {
        trigger: missionRef.current,
        start: 'top center',
        toggleActions: 'play none none reverse',
      },
      duration: 1,
      x: -100,
      opacity: 0,
      stagger: 0.2,
      ease: 'power3.out',
    });

    // Team section animation
    gsap.from('.team-member', {
      scrollTrigger: {
        trigger: teamRef.current,
        start: 'top center',
        toggleActions: 'play none none reverse',
      },
      duration: 1,
      y: 50,
      opacity: 0,
      stagger: 0.2,
      ease: 'power3.out',
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const teamMembers = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Lead Conservationist',
      image: '/images/team/sarah.jpg',
      description: 'Expert in wildlife conservation with 15+ years of experience.',
    },
    {
      name: 'Dr. Raj Patel',
      role: 'Research Director',
      image: '/images/team/raj.jpg',
      description: 'Specialist in biodiversity research and habitat preservation.',
    },
    {
      name: 'Dr. Maria Garcia',
      role: 'Cryopreservation Expert',
      image: '/images/team/maria.jpg',
      description: 'Leading expert in genetic preservation techniques.',
    },
    {
      name: 'Dr. James Wilson',
      role: 'Emergency Response Lead',
      image: '/images/team/james.jpg',
      description: 'Specialized in wildlife rescue and emergency management.',
    },
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0a192f 0%, #112240 100%)',
        color: '#ffffff',
        overflow: 'hidden',
      }}
    >
      {/* Hero Section */}
      <Box
        ref={heroRef}
        sx={{
          height: '60vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at center, rgba(0,242,255,0.1) 0%, transparent 70%)',
            zIndex: 0,
          },
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '3rem', md: '4.5rem' },
              fontWeight: 800,
              background: 'linear-gradient(135deg, #00f2ff, #0066ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2,
            }}
          >
            About Sanrakshika
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: '#8892b0',
              maxWidth: '800px',
              lineHeight: 1.6,
            }}
          >
            We are dedicated to preserving Earth's biodiversity through advanced conservation techniques, research, and community engagement.
          </Typography>
        </Container>
      </Box>

      {/* Mission Section */}
      <Box
        ref={missionRef}
        sx={{
          py: 10,
          background: 'rgba(17, 34, 64, 0.5)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                className="mission-content"
                sx={{
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '-20%',
                    left: '-20%',
                    width: '140%',
                    height: '140%',
                    background: 'radial-gradient(circle at center, rgba(0,242,255,0.1) 0%, transparent 70%)',
                    animation: 'pulse 4s ease-in-out infinite',
                  },
                  '@keyframes pulse': {
                    '0%': { transform: 'scale(1)', opacity: 0.5 },
                    '50%': { transform: 'scale(1.1)', opacity: 0.3 },
                    '100%': { transform: 'scale(1)', opacity: 0.5 },
                  },
                }}
              >
                <img
                  src="/images/mission.jpg"
                  alt="Our Mission"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '20px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className="mission-content">
                <Typography
                  variant="h2"
                  sx={{
                    mb: 4,
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, #00f2ff, #0066ff)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Our Mission
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#8892b0',
                    mb: 3,
                    lineHeight: 1.8,
                    fontSize: '1.1rem',
                  }}
                >
                  At Sanrakshika, we believe in the power of science and technology to protect our planet's precious biodiversity. Our mission is to:
                </Typography>
                <Box
                  sx={{
                    display: 'grid',
                    gap: 2,
                  }}
                >
                  {[
                    'Preserve endangered species through advanced monitoring and protection techniques',
                    'Restore and protect natural habitats for wildlife conservation',
                    'Develop innovative solutions for biodiversity preservation',
                    'Engage communities in conservation efforts',
                  ].map((item, index) => (
                    <Paper
                      key={index}
                      sx={{
                        p: 2,
                        background: 'rgba(255,255,255,0.05)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '10px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                      }}
                    >
                      <Typography
                        sx={{
                          color: '#00f2ff',
                          fontSize: '1.5rem',
                        }}
                      >
                        {['🌍', '🌿', '🔬', '🤝'][index]}
                      </Typography>
                      <Typography
                        sx={{
                          color: '#8892b0',
                        }}
                      >
                        {item}
                      </Typography>
                    </Paper>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Team Section */}
      <Box
        ref={teamRef}
        sx={{
          py: 10,
          background: 'linear-gradient(135deg, #112240 0%, #0a192f 100%)',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 6,
              fontWeight: 700,
              background: 'linear-gradient(135deg, #00f2ff, #0066ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Our Team
          </Typography>
          <Grid container spacing={4}>
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper
                  className="team-member"
                  sx={{
                    p: 3,
                    height: '100%',
                    background: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '20px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      height: '200px',
                      mb: 2,
                      borderRadius: '15px',
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 1,
                      color: '#00f2ff',
                    }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      mb: 2,
                      color: '#8892b0',
                    }}
                  >
                    {member.role}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#8892b0',
                    }}
                  >
                    {member.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default About; 