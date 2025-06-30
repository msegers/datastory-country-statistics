"use client";

import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import {
  LineChart,
} from 'echarts/charts'; import {
  CanvasRenderer,
  // SVGRenderer,
} from 'echarts/renderers';
import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
  DatasetComponent,
} from 'echarts/components';
import { CountryStatistics } from '@/lib/actions/get-country-statistics-action';
import React from 'react';


export default function ChartComponent({ countryData }: { countryData: CountryStatistics }) {
  echarts.use(
    [TitleComponent, TooltipComponent, GridComponent, LineChart, CanvasRenderer]
  );

  // map the returned data into usable graph data
  const options = Object.entries(countryData).map(([category, statistics]) => ({
    category,
    option: {
      xAxis: {
        type: 'category',
        data: statistics.map((v) => v.year)
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: statistics.map(v => v.value),
          type: 'line'
        }
      ]
    }
  }));


  return (<>
    {options.map(({ category, option }) => (
      <React.Fragment key={category}>
        <h2>{category}</h2>
        <ReactEChartsCore
          echarts={echarts}
          option={option}
          notMerge={true}
          lazyUpdate={true}
          theme={"theme_name"}
        />
      </React.Fragment>))}
  </>);
}
