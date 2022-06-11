import React from 'react';
import { IMenuItem } from '../../interfaces/IMenu';
import MenuItem from './MenuItem';

type Props = {
	menuOptions: IMenuItem[];
	isMenuItemActive: (label: string) => any;
	handleClick: (label: string) => void;
};

const MenuList = ({ menuOptions, isMenuItemActive, handleClick }: Props) => (
	<>
		{menuOptions?.map((menuItem: IMenuItem, index: number) => (
			<MenuItem
				key={index}
				menuItem={menuItem}
				isMenuItemActive={isMenuItemActive}
				handleClick={handleClick}
			/>
		))}
	</>
);

export default MenuList;
