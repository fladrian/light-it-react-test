import React from 'react'
import { IMenuItem } from '../../interfaces/IMenu';
import {
	MenuItemContainer,
	MenuItemImg,
	MenuItemLabel
} from './SidebarStyles';


type Props = {
	menuItem: IMenuItem
	isMenuItemActive: (label:string) => any
	handleClick: (label:string) => void
}

const MenuItem = ({menuItem:{label, icon}, isMenuItemActive, handleClick}:Props) => (
	<MenuItemContainer
		isActive={isMenuItemActive(label)}
		onClick={() => handleClick(label)}>
		<MenuItemImg src={icon} />
		<MenuItemLabel>
			{label}
		</MenuItemLabel>
	</MenuItemContainer>
)

export default MenuItem