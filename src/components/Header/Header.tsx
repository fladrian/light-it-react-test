import React from 'react'
import logo from '../../assets/Logo.svg';
import { 
	HeaderSection,
	HeaderSelect,
	HeaderImg
} from './HeaderStyles';

const options = [
  { value: '#', label: 'Guardar y salir' },
  { value: '#', label: 'Salir sin guardar' },
  { value: '#', label: 'Guardar y continuar' }
]


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