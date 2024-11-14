import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
  useGaugeState,
} from '@mui/x-charts/Gauge';

function GaugePointer() {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();

  if (valueAngle === null) {
    // No value to display
    return null;
  }

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  };
  return (
    <g>
      <circle cx={cx} cy={cy} r={5} fill="red" />
      <path
        d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
        stroke="red"
        strokeWidth={3}
      />
    </g>
  );
}

const DashMain2 = () => {
  return (
    <Card 
      elevation={4}
      sx={{
        padding: '2%',
        width: {
          xs: '100%', 
          sm: '100%',
          md: '36%',
        },
        margin: 'auto',
        minHeight: '333px',
      }}
    >
      <h5 className='text-center'><b>Javascript, React </b></h5>
      <Box display={'flex'}>
        <GaugeContainer
          width={250}
          height={180}
          startAngle={-110}
          endAngle={110}
          value={90}
        >
          <GaugeReferenceArc />
          <GaugeValueArc />
          <GaugePointer />
        </GaugeContainer>
      </Box>
      
      <p className='p-1 typo-sm'>
        <b>JavaScript</b> is a powerful programming language, invented by Brendan Eich.
        It is light-weight relatively compact, yet flexible.
        <span className='block'>
          Developers have written a variety of tools on top of the core JavaScript language, 
          unlocking a vast amount of functionality and creating tools for developers to build scalable, interactive web applications.
        </span>
      </p>
      <p className='p-1 typo-sm'>
        <b>React</b> is a free and open-source front-end JavaScript library for building user interfaces based on components by Facebook Inc. 
        It is maintained by Meta and a community of developers. React can be used to develop single-page, mobile, 
        or server-rendered applications with frameworks like Next.js
      </p>
    </Card>
  )
}

export default DashMain2