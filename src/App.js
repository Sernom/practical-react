import React, { useState } from 'react'
import './App.css'
import ReactColorDemo from './components/ReactColorDemo'
import ReactCreditCardsDemo from './components/ReactCreditCardsDemo'
import ReactDatePickerDemo from './components/ReactDatePickerDemo'
import ReactPlayerDemo from './components/ReactPlayerDemo'
import ReactSpinnersDemo from './components/ReactSpinnersDemo'
import ReactChartDemo from './components/ReactChartDemo'

const demoList = [
	{ value: '', name: '' },
	{ value: 'react-color', name: 'React Color' },
	{ value: 'react-credit-cards', name: 'React Credit Cards' },
	{ value: 'react-datepicker', name: 'React Date Picker' },
	{ value: 'react-player', name: 'React Player' },
	{ value: 'react-spinners', name: 'React Spinners' },
	{ value: 'react-chartjs-2', name: 'React Chartjs 2'}
]

function App() {
	const [showDemo, setShowDemo] = useState('')

	return (
		<div className='App'>
			<h1>Practical React</h1>
			<br />
			<h3>React Package Demos</h3>
			<select onChange={e => setShowDemo(e.target.value)}>
				{demoList.map(({ value, name }, index) => (
					<option value={value} key={index}>
						{name}
					</option>
				))}
			</select>
			<hr />
			{showDemo === 'react-color' ? (
				<ReactColorDemo />
			) : showDemo === 'react-credit-cards' ? (
				<ReactCreditCardsDemo />
			) : showDemo === 'react-datepicker' ? (
				<ReactDatePickerDemo />
			) : showDemo === 'react-player' ? (
				<ReactPlayerDemo />
			) : showDemo === 'react-spinners' ? (
				<ReactSpinnersDemo />
			) : showDemo === 'react-chartjs-2' ? (
				<ReactChartDemo/>
			) : null }
		</div>
	)
}

export default App
