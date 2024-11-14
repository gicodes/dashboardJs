"use client";
import './dashboard.scss';

import Hero from './hero';
import Hero1 from './hero-1';
import Hero2 from './hero-2';
import Header from './header';
import DashMain2 from './main-2';
import { DashMain } from './main';
import { Card, Grid2 } from '@mui/material';

export default function Dashboard() {
  return (
    <Card sx={{
      background: 'silver',
    }}>
      <Header />
      <Grid2 
        rowGap={2}
        padding={2}
        columnGap={1}
        display={'flex'}
        flexWrap={'wrap'} 
        justifyContent={'space-around'} 
      >
        <Hero />
        <Hero1 />
        <Hero2 />
      </Grid2>
      <Grid2 
        rowGap={2}
        padding={2}
        display={'flex'}
        flexWrap={'wrap'} 
        justifyContent={'space-around'} 
      >
        <DashMain />
        <DashMain2 />
      </Grid2>
    </Card>    
  )
}
