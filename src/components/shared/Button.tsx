import React from 'react'
import tw from 'twin.macro';

const Btn = tw.button`bg-white w-28 h-10 rounded-md font-light text-gray-600`

type Props = {
	label: string
}
const Button = ({label}:Props) => (
	<Btn>
		{label}
	</Btn>
)

export default Button