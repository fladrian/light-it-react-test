import React from 'react'

import ProductItem from './ProductItem';

import { ProductsContainer } from './SidebarStyles'
import { Items } from '../../interfaces/ICategories';

type Props = {
	products: Items[]
}

const ProductList = ({products}:Props) => {
	return (
		<ProductsContainer>
		{products.map(({name, img}, idx) => (
			<ProductItem  key={idx} name={name} img={img} />
		))}
		</ProductsContainer>
	)
}

export default ProductList