import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { Card, Box, useTheme, useMediaQuery } from '@mui/material';

const chartSetting = {
  yAxis: [{ label: 'Experience (xp)'}],
  height: 333,
  sx: {
    width: '100%',
    '& .MuiChartsLegend-series': {
      '& tspan': {
        fontSize: '0.75rem',
      },
      '& .MuiChartsLegend-mark': {
        height: '15px',
        width: '15px',
      },
    },
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-12px, 0)',
    },
  },
};

const dataset = [
  {
    MongoDB: 60,
    ExpressJs: 80,
    React: 99,
    NodeJs: 80,
    month: 'MERN Stack',
  },
];

function valueFormatter(value: number | null) {
  return `${value}%`;
}

export default function DashBarChart() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Card sx={{ p: 2 }}>
      <Box
        sx={{
          width: '100%',
          padding: '5px',
          height: isSmallScreen ? 333 : 360,
          maxWidth: 600,
          mx: 'auto',
        }}
      >
        <BarChart
          dataset={dataset}
          xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
          series={[
            { dataKey: 'MongoDB', label: 'Mongo DB', valueFormatter, color: 'gray' },
            { dataKey: 'ExpressJs', label: 'ExpressJs', valueFormatter, color: '#6babfa' },
            { dataKey: 'React', label: 'React', valueFormatter, color: 'blueviolet' },
            { dataKey: 'NodeJs', label: 'NodeJs', valueFormatter, color: '#4040a1' },
          ]}
          {...chartSetting}
        />
      </Box>
    </Card>
  );
}
