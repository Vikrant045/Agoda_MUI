import * as React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

const data = [
  { value: 10, label: '' },
  { value: 15, label: '' },
  { value: 20, label: '' },
];

const size = {
  width: 305,
  height: 300,
};

export default function Pie_Chart() {
  return (
    <PieChart
      series={[
        {
          arcLabel: (item) => `${item.label} `,
          arcLabelMinAngle: 45,
          data,
          innerRadius: 70,
          outerRadius:120,
          cx: 170,
          cy: 140,
         
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontWeight: 'bold',
        },
        mr:5,
        width:"20px",
        height:"20px",
        mt:5
      }}
      {...size}
      slotProps={{ legend: { hidden: true } }}

    />
  );
}