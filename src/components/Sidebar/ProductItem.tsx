import React from 'react'

import { Items } from '../../interfaces/ICategories';
import { Loader } from '../shared/Loader';
import tw, {css} from 'twin.macro';
import { 
	ProductContainer,
	ProductLabel,
	ProductImg
} from './SidebarStyles';

const ImgLoaderContainer = tw.div`h-full w-full flex justify-center items-center`
const ImgLoaderFail = tw.div`h-40 w-40 flex justify-center items-center bg-gray-100 text-gray-400 text-sm text-center font-medium`

const ProductItem = ({name, img}:Items) => {
	const [isLoading, setIsLoading] = React.useState<boolean>(true)
	const [imgError, setImgError] = React.useState<boolean>(false)
	const _handleLoad = () => {
		setIsLoading(false)
	}
	const _handleError = () => {
		console.info('error de imagen')
		setImgError(true)
		setIsLoading(false)
	}

	const ImgLoader = () => (
		<ImgLoaderContainer>
			<Loader />
		</ImgLoaderContainer>
	)

	return (
	<ProductContainer>
		{isLoading && <ImgLoader />}
		
		<div css={[isLoading ? tw`hidden` : tw`block`]}>
			
			{	!imgError &&
					<ProductImg
						src={img}
						onLoad={_handleLoad}
						onError={_handleError}/> }

			{	imgError &&
					<ImgLoaderFail>
						Imagen no disponible
					</ImgLoaderFail> }
		</div>

		<ProductLabel>
			{name}
		</ProductLabel>
	</ProductContainer>
)}

export default ProductItem