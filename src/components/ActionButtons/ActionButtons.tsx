import React from 'react'
import arrow from '../../assets/Flecha.png';
import plusIcon from '../../assets/plus.png';
import minusIcon from '../../assets/minus.png';
import { 
	ActionBtnContainer,
	ActionBtnAddSubstract,
	BtnIcon,
	ActionBtnArrowsContainer,
	ArrowBtnIcon,
	LeftRightBtnContainer
} from './ActionButtonsStyles';

const ActionButtons = () => {

	const _handleClick = (action:string) => {
		console.info(`${action} button click`)

	}
	return (
		<ActionBtnContainer>
			<ActionBtnAddSubstract>
				<BtnIcon onClick={() => _handleClick('PLUS')} src={plusIcon}/>
				<BtnIcon onClick={() => _handleClick('MINUS')} src={minusIcon}/>
			</ActionBtnAddSubstract>

			<ActionBtnArrowsContainer>
				<ArrowBtnIcon onClick={() => _handleClick('UP')} src={arrow} />
				
				<LeftRightBtnContainer>
					<ArrowBtnIcon onClick={() => _handleClick('LEFT')} src={arrow} direction='left'/>
					<ArrowBtnIcon onClick={() => _handleClick('RIGHT')} src={arrow} direction='right'/>
				</LeftRightBtnContainer>
				
				<ArrowBtnIcon onClick={() => _handleClick('DOWN')} src={arrow} direction='down'/>
			</ActionBtnArrowsContainer>
		</ActionBtnContainer>
	)
}

export default ActionButtons