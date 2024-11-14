import { Card, Box, Stack, Paper } from '@mui/material'
import React from 'react'

const dbs = [ "MongoDB", "Firebase", "MySQL", ];
const fws = [ "NextJS", "ExpressJS", "Flutter", ];
const langs = [ "Javascript", "Dart", "Python", ];
const dps = [ "Github", "Vercel", "Netlify", "AWS", ]
const libs = [ "React", "NodeJs", "Tailwind", "Material-UI"];

const TechStack = () => {
  return (
    <Card sx={{ p: 2 }}>
      <Box 
        sx={{
          width: '100%',
          padding: '5px',
          maxWidth: 600,
          mx: 'auto',
        }}
      > 
        <Stack 
          paddingY={2}
          display={'flex'}
          direction={'row'}
          flexWrap={'wrap'}
          justifyContent={'space-between'}
        >
          <Paper
            sx={{
              minWidth: '100px',
              margin: '5px',
              textAlign: 'center'
            }}
          >
            <h6 className='p-2 bg-warning'>Languages</h6>
            <h6 className='my-3'>
              {langs.map((lang, index) => 
                <p 
                  key={index}
                  className='text-center'
                >
                  {lang}
                </p>
              )}
            </h6>
          </Paper>
          
          <Paper
            sx={{
              minWidth: '100px',
              margin: '5px',
              textAlign: 'center'
            }}
          >
            <h6 className='p-2 bg-secondary text-white'>Libraries</h6>
            <h6 className='my-3'>
              {libs.map((lib, index) => 
                <p 
                  key={index}
                  className='text-center'
                >
                  {lib}
                </p>
              )}
            </h6> 
          </Paper>

          <Paper
            sx={{
              minWidth: '100px',
              margin: '5px',
              textAlign: 'center'
            }}
          >
            <h6 className='p-2 bg-link text-secondary'>Frameworks</h6>
            <h6 className='my-3'>
              {fws.map((fw, index) => 
                <p 
                  key={index}
                  className='text-center'
                >
                  {fw}
                </p>
              )}
            </h6>
          </Paper>

          <Paper
            sx={{
              minWidth: '100px',
              margin: '5px',
              textAlign: 'center'
            }}
          >
            <h6 className='p-2 bg-gray text-white'>Databases</h6>
            <h6 className='my-3'>
              {dbs.map((db, index) => 
                <p 
                  key={index}
                  className='text-center'
                >
                  {db}
                </p>
              )}
            </h6>
          </Paper>
          
          <Paper
            sx={{
              minWidth: '100px',
              margin: '5px',
              textAlign: 'center'
            }}
          >
            <h6 className='p-2 bg-success text-white'>Deploy Env.</h6>
            <h6 className='my-3'>
              {dps.map((dp, index) => 
                <p 
                  key={index}
                  className='text-center'
                >
                  {dp}
                </p>
              )}
            </h6>
          </Paper>
        </Stack>
      </Box>
    </Card>              
  )
}

export default TechStack