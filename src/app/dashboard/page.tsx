"use client";
import './dashboard.scss';

import Hero from './hero/profile';
import Header from './header';
import DashMain2 from './form';
import { DashMain } from './main/main';
import { Card, Grid2 } from '@mui/material';
import Hero1 from './hero/hero-1';
import Hero2 from './hero/hero-2';

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
