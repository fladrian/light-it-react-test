import React from 'react';

// icons
import chevronIcon from '../../assets/activo.png';

// constants
import { menuOptions } from '../../constants/MenuItems';
import { Resources } from '../../constants/Enums';

import { GetApertures } from '../../services/aperture.services';
import { GetEquipments } from '../../services/equipment.services';
import { GetCompletions } from '../../services/completion.services';

// interfaces
import { ICategory, Items } from '../../interfaces/ICategories';

// shared
import { Loader } from '../shared/Loader';

//styles
import {
	ProductBadge,
	NavigationDrawer,
	CategoryTitle,
	SideMenuContainer,
	ChevronBadge,
	ChevronIconLeft,
	CloseDrawerBtn,
	NavigationDrawerProducts,
	ButtonsContainer,
} from './SidebarStyles';

import ProductList from './ProductList';
import CategoryList from './CategoryList';
import MenuList from './MenuList';
import Button from '../shared/Button';

// external libraries
import toast, { Toaster } from 'react-hot-toast';

const SideMenu = () => {
	const [currentMenuItem, setCurrentMenuItem] = React.useState<string>();
	const [isOpen, setIsOpen] = React.useState<boolean>(false);
	const [categories, setCategories] = React.useState<ICategory[]>();
	const [products, setProducts] = React.useState<Items[]>();
	const [productName, setProductName] = React.useState<string>();
	const [isLoading, setIsLoading] = React.useState<boolean>(false);

	const getApertures = async () => {
		const apertures = await GetApertures();
		setCategories(apertures);
		setIsLoading(false);
	};
	const getEquipments = async () => {
		const equipments = await GetEquipments();
		setCategories(equipments);
		setIsLoading(false);
	};
	const getCompletions = async () => {
		const completions = await GetCompletions();
		setCategories(completions);
		setIsLoading(false);
	};

	React.useEffect(() => {
		setIsLoading(true);
		currentMenuItem?.toLocaleLowerCase() === Resources.ABERTURAS &&
			getApertures();
		currentMenuItem?.toLocaleLowerCase() === Resources.EQUIPAMENTO &&
			getEquipments();
		currentMenuItem?.toLocaleLowerCase() === Resources.TERMINACIONES &&
			getCompletions();
	}, [currentMenuItem]);

	const _handleClick = (item: string) => {
		setCurrentMenuItem(item);
		setIsOpen(true);
		setProducts(undefined);
	};

	const _closeDrawer = () => {
		setCurrentMenuItem(undefined);
		setIsOpen(false);
		setProducts(undefined);
	};

	const _handleProducts = (name: string, items: Items[]) => {
		setProducts(items);
		setProductName(name);
	};

	const _goToCategories = () => {
		setProducts(undefined);
	};

	const _isCurrentMenuItemActive = (item: string) => item === currentMenuItem;

	return (
		<>
			<Toaster />
			<SideMenuContainer>
				<MenuList
					menuOptions={menuOptions}
					isMenuItemActive={_isCurrentMenuItemActive}
					handleClick={_handleClick}
				/>
			</SideMenuContainer>

			{isOpen && (
				<>
					<NavigationDrawer>
						<CategoryTitle>
							{currentMenuItem}
							{isLoading && <Loader />}
						</CategoryTitle>

						<CategoryList
							isLoading={isLoading}
							categories={categories}
							handleProducts={_handleProducts}
						/>

						<CloseDrawerBtn onClick={_closeDrawer}>
							<ChevronIconLeft src={chevronIcon} />
						</CloseDrawerBtn>
					</NavigationDrawer>

					<ButtonsContainer>
						<Button label='Fijar' />
						<Button label='Borrar' />
					</ButtonsContainer>
				</>
			)}

			{products && (
				<NavigationDrawerProducts>
					<ProductBadge onClick={_goToCategories}>
						<ChevronBadge src={chevronIcon} />
						{currentMenuItem}
					</ProductBadge>

					<CategoryTitle>{productName}</CategoryTitle>

					<ProductList products={products} />
				</NavigationDrawerProducts>
			)}
		</>
	);
};

export default SideMenu;
