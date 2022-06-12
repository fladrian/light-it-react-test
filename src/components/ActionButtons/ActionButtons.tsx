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

// external libraries
import toast, { Toaster } from 'react-hot-toast';

type ArrowAction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT'

const ActionButtons = () => {

	const _getToastPosition = (arrowAction:ArrowAction) => {
		switch (arrowAction) {
			case 'UP':
				return 'top-center'	
			case 'DOWN':
				return 'bottom-center'	
			case 'LEFT':
				return 'top-left'	
			case 'RIGHT':
				return 'top-right'
			default:
				return 'bottom-right'
		}
	}

	const _handleClick = (action:string) => {
		const actionMsg = `${action} button click` 

		console.info(actionMsg)

		toast.success(
			actionMsg,
			{
				position: _getToastPosition(action as ArrowAction)
			}
		)
	}

	return (
		<ActionBtnContainer>
			<Toaster />
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