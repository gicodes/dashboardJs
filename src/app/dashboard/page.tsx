"use client";

import './dashboard.scss';
import Header from './header';
import Hero from './hero/profile';
import Hero1 from './hero/hero-1';
import Hero2 from './hero/hero-2';
import FeedbackForm from './form';
import { useState } from 'react';
import { DashMain } from './main/main';
import { Card, Grid2 } from '@mui/material';

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(false);
  const handleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <Card 
      sx={{
        background: 'silver',
        minHeight: '100vh',
      }}
      className={darkMode ? "dashboard-dark" : "dashboard-light"}
    >
      <Header 
        handleDarkMode={handleDarkMode}
        darkMode={darkMode}
      />
      <Grid2 
        rowGap={2}
        padding={2}
        columnGap={1}
        display={'flex'}
        flexWrap={'wrap'} 
        justifyContent={'space-around'} 
      >
        <Hero /> <Hero1 /> <Hero2 />
      </Grid2>
      <Grid2 
        rowGap={2}
        padding={2}
        display={'flex'}
        flexWrap={'wrap'} 
        justifyContent={'space-around'} 
      >
        <DashMain /> <FeedbackForm />
      </Grid2>
    </Card>    
  )
}