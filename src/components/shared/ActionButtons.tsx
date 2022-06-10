import React from 'react'
import arrow from '../../assets/Flecha.png';
import plusIcon from '../../assets/plus.png';
import minusIcon from '../../assets/minus.png';
import tw, {styled} from "twin.macro";

const ActionBtnContainer = tw.section`flex w-48 h-32 bottom-4 right-0 absolute justify-center items-center`
const BtnIcon = tw.img`w-5 h-5 block cursor-pointer hover:bg-gray-200 rounded-md`
const ActionBtnAddSubstract = tw.article`bg-white h-20 w-8 rounded-md flex flex-col justify-around items-center mr-6`
const ActionBtnArrowsContainer = tw.section`bg-white h-20 w-20 rounded-md flex flex-col justify-around items-center p-1`

const ArrowBtnIcon = styled.img<{ direction?: string }>`
${tw`w-6 h-6 cursor-pointer cursor-pointer hover:bg-gray-200 rounded-md`}
${({ direction }) => direction === 'right' && tw`rotate-90`};
${({ direction }) => direction === 'down' && tw`rotate-180`};
${({ direction }) => direction === 'left' && tw`rotate-[-90deg]`};
`

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
				
				<div tw='flex justify-between w-full'>
					<ArrowBtnIcon onClick={() => _handleClick('LEFT')} src={arrow} direction='left'/>
					<ArrowBtnIcon onClick={() => _handleClick('RIGHT')} src={arrow} direction='right'/>
				</div>
				
				<ArrowBtnIcon onClick={() => _handleClick('DOWN')} src={arrow} direction='down'/>
			</ActionBtnArrowsContainer>
		</ActionBtnContainer>
	)
}

export default ActionButtons