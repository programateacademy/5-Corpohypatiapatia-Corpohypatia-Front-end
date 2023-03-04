import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js'
Chart.register(ArcElement);

const CircularGraphic = ({ data, options }) => {
    return <Doughnut data={data} options={options} />;
};

export default CircularGraphic;