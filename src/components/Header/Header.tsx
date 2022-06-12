import React from 'react'
import logo from '../../assets/Logo.svg';
import { 
	HeaderSection,
	HeaderSelect,
	HeaderImg
} from './HeaderStyles';

import { selectOptions } from '../../constants/SelectItems';


const Header = () => (
		<HeaderSection>
			<div>
				<HeaderImg src={logo}/>
			</div>
			<div>
				<HeaderSelect>
					{selectOptions.map(({value, label}, index) => (
						<option key={index} value={value}>{label}</option>
					))}
				</HeaderSelect>
			</div>
		</HeaderSection>
)

export default Header