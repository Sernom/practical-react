import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const ReactDatePickerDemo = () => {
	const [selectedDate, setSelectedDate] = useState(new Date())
	return (
		<div>
			<DatePicker
				selected={selectedDate}
				onChange={date => setSelectedDate(date)}
				dateFormat='dd/MM/yyyy'
				minDate={new Date()}
        maxDate={new Date().setMonth(new Date().getMonth() + 1)}
        filterDate={date => date.getDay() !== 6 && date.getDay() !== 0 }
        isClearable
        showYearDropdown
        scrollableMonthYearDropdown
			/>
		</div>
	)
}

export default ReactDatePickerDemo
