import { Card, Grid, Stack } from '@mui/material'
import Image from 'next/image';
import React from 'react'

interface ProgressChipProps {
  inv: unknown
  text: string
}

const user: string = "Gi Doe";
const title: string = "Software Engineer | Javascript Dev"

const ProgressChip: React.FC<ProgressChipProps> = ({ inv, text }) => {
  return (
    <div className={inv ? 'right-chip' : 'left-chip'}> 
      <span className={inv ? '' : 'text-dark'}>{text}</span>
    </div>
  )
}

const Hero = () => {
  return (
    <Card
      elevation={4}
      sx={{
        padding: '3%',
        width: {
          xs: '100%', 
          sm: '100%',
          md: '44%',
        },
      }}
    >
      <Grid 
        display={'flex'}
        flexWrap={'wrap'}
        className='welcome-card'
        justifyContent={'space-between'}
        >
        <Stack 
          padding='5px 20px 5px' 
          spacing={2}
        >
          <h4>Hello, I am {user}</h4>
          <p>{title}</p>

          <Stack 
            direction={'row'}
            padding={'40px 0'}
          >
            <ProgressChip inv={false} text="Mid-Level" />
            <ProgressChip inv={true} text="100%" />
          </Stack>
        </Stack>
        <Image 
          src={"/bg-card2.jpg"} 
          height={100}
          width={100}
          alt='welcome to your dashboard'
          className='gif-box'
        />
      </Grid>
    </Card>
  )
}

export default Hero