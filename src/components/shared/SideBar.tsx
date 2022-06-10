import React from 'react'
import tw, {styled} from "twin.macro";

// ICONS
import apertureIcon from '../../assets/Aberturas.png';
import equipmentIcon from '../../assets/Equipamiento.png';
import completionIcon from '../../assets/Terminaciones.png';
import chevronIcon from '../../assets/activo.png'

import { Resources } from "../../constants/Enums";

import { GetApertures } from '../../services/aperture.services';
import { GetEquipments } from '../../services/equipment.services';
import { GetCompletions } from '../../services/completion.services';

// interfaces
import { ICategory, Items } from '../../interfaces/ICategories';

const MenuOptions = [
  { icon: apertureIcon, label: 'Aberturas' },
  { icon: equipmentIcon, label: 'Equipamiento' },
  { icon: completionIcon, label: 'Terminaciones' },
]

const SideMenuContainer = tw.section`flex flex-col justify-center items-center w-24 h-screen text-gray-800 bg-white`

const MenuItemImg = tw.img`w-7 h-7 mx-auto`
const MenuItemLabel = tw.p`text-center text-gray-500 text-xs`

const MenuItemContainer = styled.article<{ isActive: boolean }>`
${tw`flex flex-col justify-center items-center cursor-pointer w-full h-20`}
${({ isActive }) => isActive && tw`bg-gray-100 relative rounded-lg

before:absolute before:bottom-[-12%] before:h-[18px] before:w-full before:rounded-r-full before:bg-white before:left-0

after:absolute after:top-[-8%] after:h-[18px] after:w-full after:rounded-r-full after:bg-white`};
`

const NavigationDrawer = tw.aside`w-[40%] h-screen bg-gray-100 absolute top-0 left-24 text-black pt-24 px-6`

const ChevronIconLeft = tw.img`w-4 h-4 mx-auto`
const CloseDrawerBtn = tw.button`w-6 h-24 absolute right-[-4%] bg-gray-100 rounded-tr-full rounded-br-full top-72`

const ChevronIconRight = tw(ChevronIconLeft)`rotate-180 mr-0`

const DrawerItemContainer = tw.div`flex justify-between items-center mx-auto bg-white px-4 py-2 rounded-xl mb-2 cursor-pointer hover:bg-gray-300 transition-colors duration-300`

const NavigationDrawerProducts = tw(NavigationDrawer)``
const ProductImg = tw.img`w-40 h-40 rounded-md object-cover`
const ProductLabel = tw(MenuItemLabel)`text-sm pt-1 font-light text-gray-900 border rounded-b-lg bg-gray-200 mt-[-4px]`
const PoductContainer = tw.article`hover:scale-95 transition duration-300 cursor-pointer h-20`
const ProductsContainer = tw.article`flex justify-around`

const CategoryTitle = tw.h2`text-gray-600 text-xl mb-3 font-bold flex justify-between items-center`
const CategoryLabel = tw.h2`text-gray-500 font-normal`

const ProductBadge = tw.div`font-light text-xs px-0 cursor-pointer text-gray-400 flex w-10 h-5 flex items-center hover:underline`
const ChevronBadge = tw(ChevronIconLeft)`w-3 h-3 mr-1`

const Loader = () => (
	<svg role="status" className="inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
</svg>
)


type MenuItem = {
	icon: string,
	label: string,
	key: number
}

const SideMenu = () => {
	const [currentMenuItem, setCurrentMenuItem] = React.useState<string>()
	const [isOpen, setIsOpen] = React.useState<boolean>(false)
	const [categories, setCategories] = React.useState<ICategory[]>()
	const [products, setProducts] = React.useState<Items[]>()
	const [productName, setProductName] = React.useState<string>()
	const [isLoading, setIsLoading] = React.useState<boolean>(false)


	const getApertures = async () => {
		const apertures = await GetApertures();
		console.info(apertures)
		setCategories(apertures)
		setIsLoading(false)
		
	}
	const getEquipments = async () => {
		const equipments = await GetEquipments();
		console.info(equipments)
		setCategories(equipments)
		setIsLoading(false)
	}
	const getCompletions = async () => {
		const completions = await GetCompletions();
		console.info(completions)
		setCategories(completions)
		setIsLoading(false)
	}

	React.useEffect(() => {
		setIsLoading(true)
		currentMenuItem?.toLocaleLowerCase() === Resources.ABERTURAS && getApertures();
		currentMenuItem?.toLocaleLowerCase() === Resources.EQUIPAMENTO && getEquipments();
		currentMenuItem?.toLocaleLowerCase() === Resources.TERMINACIONES && getCompletions();
	},[currentMenuItem])

	const _onClickHandler = (item:string) => {
		setCurrentMenuItem(item)
		setIsOpen(true)
		setProducts(undefined)
	}

	const _closeDrawer = () => {
		setCurrentMenuItem(undefined)
		setIsOpen(false)
		setProducts(undefined)
	}

	const _handleProducts = (name:string, items:Items[]) => {
		setProducts(items)
		setProductName(name)
	}

	const _goToCategories = () => {
		setProducts(undefined)
	}

	const _isCurrentMenuItemActive = (item:string) => item === currentMenuItem

	const MenuItem = ({icon, label}:MenuItem) => (
		<MenuItemContainer
			isActive={_isCurrentMenuItemActive(label)}
			onClick={() => _onClickHandler(label)}>
			<MenuItemImg src={icon} />
			<MenuItemLabel>
				{label}
			</MenuItemLabel>
		</MenuItemContainer>
	)

	const DrawerItem = ({name, items}:ICategory) => (
		<DrawerItemContainer onClick={() => _handleProducts(name, items)}>
			<CategoryLabel>
			{name}
			</CategoryLabel>
			<ChevronIconRight src={chevronIcon} />
		</DrawerItemContainer>
	)

	const ProductItem = ({name, img}:Items) => (
		<PoductContainer>
			<ProductImg src={img}/>
			<ProductLabel>
				{name}
			</ProductLabel>
		</PoductContainer>
	)



	return (
		<>
		<SideMenuContainer>
			{
				MenuOptions.map(({icon, label}, index) => (
				<	MenuItem icon={icon} label={label} key={index} />
				))
			}
		</SideMenuContainer>
		{
			isOpen && (
				<NavigationDrawer>
					<CategoryTitle>
						{currentMenuItem}
						{isLoading && <Loader />}
					</CategoryTitle>
					<div>
					{!isLoading && categories?.map(({name, items}:ICategory, idx) => (
						<DrawerItem key={idx} name={name} items={items} />
					))}
					</div>
					
					<CloseDrawerBtn onClick={_closeDrawer}>
						<ChevronIconLeft src={chevronIcon} />
					</CloseDrawerBtn>
				</NavigationDrawer>
			)
		}

		{
			products && (
				<NavigationDrawerProducts>
					<ProductBadge onClick={_goToCategories}>
						<ChevronBadge src={chevronIcon} />
						{currentMenuItem}
					</ProductBadge>
					<CategoryTitle>
						{productName}
					</CategoryTitle>
					<ProductsContainer>
					{products.map(({name, img}, idx) => (
						<ProductItem  key={idx} name={name} img={img} />
					))}
					</ProductsContainer>
				</NavigationDrawerProducts>
			)
		}
		</>
	)
}

export default SideMenu