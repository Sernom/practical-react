import React, {useState} from 'react'
import LineChart from './charts/LineChart'
import BarChart from './charts/BarChart'
import DoughnutChart from './charts/DoughnutChart'

const ReactChartDemo = () => {
  const [chartType, setChartType] = useState('')

  const onChange = e => {
    setChartType(e.target.value)
  }

  return (
    <div className='chartContainer'>
      <div className='chartButtons'>
        <button value='line' onClick={e => onChange(e)}>Line Chart</button>
        <button value='bar' onClick={e => onChange(e)}>Bar Chart</button>
        <button value='doughnut' onClick={e => onChange(e)}>Doughnut Chart</button>
      </div>
      <div className='chart'>
        {chartType === 'line' ? (
          <LineChart/>
        ) : chartType === 'bar' ? (
          <BarChart/>
        ) : chartType === 'doughnut' ? (
          <DoughnutChart/>
        ) : null }
      </div>
    </div>
  )
}

export default ReactChartDemo