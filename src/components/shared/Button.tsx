import React from 'react'
import tw from 'twin.macro';

// external libraries
import toast, { Toaster } from 'react-hot-toast';

const Btn = tw.button`bg-white w-28 h-10 rounded-md font-light text-gray-600`

type Props = {
	label: string
}
const Button = ({label}:Props) => {

	const _getAction = (action:string) => {
		if(action === 'Fijar') return 'FIX'
		if(action === 'Borrar') return 'DELETE'
	}

	const _handleButtonsClick = (action:string) => {
		const actionMsg = `${_getAction(action)} button click` 
		console.info(actionMsg)
		toast.success(actionMsg)
	}

	return (
	<>
		<Toaster />
		<Btn onClick={() => _handleButtonsClick(label)}>
			{label}
		</Btn>
	</>
	)
}

export default Button