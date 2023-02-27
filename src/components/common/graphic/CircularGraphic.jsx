import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js'
Chart.register(ArcElement);

// const data = {
//     labels: ['Valor', 'Resto'],
//     datasets: [
//         {
//             data: [15, 100 - 15],
//             backgroundColor: ['#36A2EB', '#FFCE56'],
//             hoverBackgroundColor: ['#36A2EB', '#FFCE56'],
//         },
//     ],
// };

// const options = {
//     responsive: true,
//     maintainAspectRatio: false,
// };

// const CircularGraphic = ({ valor }) => {
//     return <Doughnut data={data} options={options} />;
// };

const CircularGraphic = ({ data, options }) => {
    return <Doughnut data={data} options={options} />;
};

export default CircularGraphic;