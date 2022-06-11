import React from 'react'
import chevronIcon from '../../assets/activo.png'
import { ICategory, Items } from '../../interfaces/ICategories'
import { 
	ChevronIconRight,
	DrawerItemContainer,
	CategoryLabel
} from './SidebarStyles';


type Props = {
	category: ICategory,
	handleProducts: (name:string, items:Items[]) => void
}

const CategoryItem = ({category:{name, items}, handleProducts}:Props) => (
			<DrawerItemContainer onClick={() => handleProducts(name, items)}>
				<CategoryLabel>
					{name}
				</CategoryLabel>
				<ChevronIconRight src={chevronIcon} />
			</DrawerItemContainer>
		)

export default CategoryItem