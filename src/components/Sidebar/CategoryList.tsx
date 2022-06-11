import React from 'react'
import { ICategory, Items } from '../../interfaces/ICategories'
import CategoryItem from './CategoryItem';

type Props = {
	isLoading: boolean,
	categories?: ICategory[],
	handleProducts: (name:string, items:Items[]) => void
}

const CategoryList = ({isLoading, categories, handleProducts}: Props) => (
	<>
		{!isLoading && categories?.map((category:ICategory, idx) => (
			<CategoryItem 
				key={idx}
				category={category}
				handleProducts={handleProducts}
				/>
		))}
	</>
)

export default CategoryList