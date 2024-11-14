import { Card, Grid2, Stack } from '@mui/material'
import Image from 'next/image';
import React from 'react'

let user = "Gi Doe";
let title = "Software Engineer | Javascript Dev"

function ProgressChip({ inv, text }: string | number | any) {
  return (
    <div className={inv ? 'right-chip' : 'left-chip'}> 
      <span className={inv ? '' : 'text-white'}><b>{text}</b></span>
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
      <Grid2 
        display={'flex'}
        flexWrap={'wrap'}
        className='welcome-card'
        justifyContent={'space-between'}
        >
        <Stack 
          padding='5px 20px 5px' 
          spacing={2}
        >
          <h4>Welcome, {user}</h4>
          <p>{title}</p>

          <Stack 
            direction={'row'}
            padding={'40px 0'}
          >
            <ProgressChip text="Mid-Level" />
            <ProgressChip inv text="100%" />
          </Stack>
        </Stack>
        <Image 
          src={"/bg-card2.jpg"} 
          height={100}
          width={100}
          alt='welcome to your dash'
          className='gif-box'
          />
      </Grid2>
    </Card>
  )
}

export default Hero