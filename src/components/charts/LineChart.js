import React from 'react'
import { Line } from 'react-chartjs-2'

const LineChart = () => {
	const data = {
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
		datasets: [
			{
				label: 'Sales for 2020 (M)',
        data: [3, 2, 2, 1, 7],
        borderColor: ['rgba(255, 206, 86, 0.2)'],
        backgroundColor: ['rgba(255, 206, 86, 0.2)'],
        pointBackgroundColor: ['rgba(255, 206, 86, 0.2)'],
        pointBorderColor: ['rgba(255, 206, 86, 0.2)']
      },
      {
				label: 'Sales for 2019 (M)',
        data: [4, 9, 1, 2, 0],
        borderColor: ['rgba(54, 162, 235, 0.2)'],
        backgroundColor: ['rgba(54, 162, 235, 0.2)'],
        pointBackgroundColor: ['rgba(54, 162, 235, 0.2)'],
        pointBorderColor: ['rgba(54, 162, 235, 0.2)']
			}
		]
  }
  const options = {
    title: {
      display: true,
      text: 'Line Chart',
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 10,
            stepSize: 1
          }
        }
      ]
    }
  }
	return <Line data={data} options={options} />
}

export default LineChart
