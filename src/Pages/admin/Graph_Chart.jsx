import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

   


export default function Graph_Chart() {
  return (
    <BarChart
    xAxis={[{ scaleType: 'band', data: ['Jan', 'Feb', 'Mar','Apr','May','Jun','Jul','Aug',"Sep",'Oct','Nov',"Dec"] }]}
    series={[
      { data: [1, 6, 5, 5, 1, 2, 4, 2, 1, 5, 1.5, 1.5] }, // Sample data for the first series
      { data: [3, 3, 2, 4, 6, 3.5, 1, 6, 5, 2, 5, 6] }, // Sample data for the second series
    ]}
    width={600}
    height={300}
    colors={['#CCCCCC', '#0096C7']} // Light grey and light blue colors

  />
  );
}