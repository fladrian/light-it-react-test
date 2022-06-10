import React from 'react'
import logo from '../../assets/Logo.svg';
import tw from "twin.macro";

const options = [
  { value: '#', label: 'Guardar y salir' },
  { value: '#', label: 'Salir sin guardar' },
  { value: '#', label: 'Guardar y continuar' }
]

const HeaderSection = tw.section`flex px-40 z-10 absolute w-[100%] justify-between bg-gray-900 text-white h-20 items-center`
const HeaderSelect = tw.select`h-10 w-52 cursor-pointer rounded px-2 border-gray-700 border-2 bg-white text-gray-900 text-lg`
const HeaderImg = tw.img`w-32 h-14 mx-auto`

const Header = () => {
	return (
		<HeaderSection>
			<div>
				<HeaderImg src={logo}/>
			</div>
			<div>
				<HeaderSelect name="" id="">
					{options.map(({value, label}, index) => (
						<option key={index} value={value}>{label}</option>
					))}
				</HeaderSelect>
			</div>
		</HeaderSection>
	)
}

export default Header