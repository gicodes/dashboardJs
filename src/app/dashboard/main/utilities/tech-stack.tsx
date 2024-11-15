import { Card, Box, Stack, Paper, useMediaQuery, useTheme } from '@mui/material';

interface TSBadgeProps {
  name: string
  list: string[]
  classes: string
}

const dbs = [ "MongoDB", "Firebase", "MySQL", ];
const fws = [ "NextJS*", "ExpressJS", "Flutter", ];
const langs = [ "Javascript*", "Typescript*", "Dart", "Python", ];
const dps = [ "Github", "Vercel*", "Netlify", "AWS", ]
const libs = [ "React*", "NodeJs", "Material-UI*", "Tailwind CSS*"];

const TechStackBadge: React.FC<TSBadgeProps> = ({
  name, 
  list,
  classes
}) => {
  return (
    <Paper 
      sx={{
      minWidth: '100px',
      margin: '5px',
      textAlign: 'center'
    }}>
    <h6 className={`p-2 ${classes}`}>{name}</h6>
      <h6 className='my-3'>
        {list.map((x, index) => 
          <p 
            key={index}
            className='text-center'
          >
            {x}
          </p>
        )}
      </h6>
    </Paper>
  )
}

const TechStack = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Card sx={{ p: 2 }}>
      <Box 
        sx={{
          width: '100%',
          padding: '5px',
          maxWidth: 600,
          mx: 'auto',
          height: isSmallScreen ? 420 : 360,
        }}
      > 
        <p className='typo-sm'> <i><b>*</b> indicate technologies used for this project</i></p>
        <Stack 
          paddingY={2}
          display={'flex'}
          direction={'row'}
          flexWrap={'wrap'}
          justifyContent={'space-between'}
        >
          <TechStackBadge name={'Languages'} list={langs} classes='bg-warning text-secondary' />
          <TechStackBadge name={'Libaries'} list={libs} classes='bg-secondary text-white'/>
          <TechStackBadge name={'Frameworks'} list={fws} classes='bg-link text-secondary'/>
          <TechStackBadge name={'Databases'} list={dbs} classes='bg-gray text-white'/>
          <TechStackBadge name={'Deploy Env.'} list={dps} classes='bg-success text-white' />
        </Stack>
      </Box>
    </Card>              
  )
}

export default TechStack;
