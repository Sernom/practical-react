import React, { useReducer } from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'

const initialState = {
	number: '',
	name: '',
	expiry: '',
	cvc: '',
	focus: ''
}

const reducer = (state, { field, value }) => {
	return {
		...state,
		[field]: value
	}
}

const ReactCreditCardsDemo = () => {
	const [state, dispatch] = useReducer(reducer, initialState)
	const { number, name, expiry, cvc, focus } = state

	const onChange = e => {
		dispatch({ field: e.target.name, value: e.target.value })
	}

	const onFocus = e => {
		dispatch({ field: 'focus', value: e.target.name })
	}

	return (
		<div>
			<Cards
				number={number}
				name={name}
				expiry={expiry}
				cvc={cvc}
				focused={focus}
			/>
			<form>
				<input
					type='tel'
					name='number'
					placeholder='Card Number'
					value={number}
					onChange={e => onChange(e)}
					onFocus={e => onFocus(e)}
				/>
				<input
					type='text'
					name='name'
					placeholder='Name'
					value={name}
					onChange={e => onChange(e)}
					onFocus={e => onFocus(e)}
				/>
				<input
					type='text'
					name='expiry'
					placeholder='MM/YY Expiry'
					value={expiry}
					onChange={e => onChange(e)}
					onFocus={e => onFocus(e)}
				/>
				<input
					type='text'
					name='cvc'
					placeholder='CVC'
					value={cvc}
					onChange={e => onChange(e)}
					onFocus={e => onFocus(e)}
				/>
			</form>
		</div>
	)
}

export default ReactCreditCardsDemo
