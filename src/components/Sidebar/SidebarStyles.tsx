import tw, {styled, css} from "twin.macro";

export const SideMenuContainer = tw.section`flex flex-col justify-center items-center w-24 h-screen text-gray-800 bg-white`

export const MenuItemImg = tw.img`w-7 h-7 mx-auto`
export const MenuItemLabel = tw.p`text-center text-gray-500 text-xs`

export const MenuItemContainer = styled.article<{ isActive: boolean }>`
${tw`flex flex-col justify-center items-center cursor-pointer w-full h-20`}
${({ isActive }) => isActive && tw`bg-gray-100 relative rounded-lg

before:absolute before:bottom-[-12%] before:h-[18px] before:w-full before:rounded-r-full before:bg-white before:left-0

after:absolute after:top-[-8%] after:h-[18px] after:w-full after:rounded-r-full after:bg-white`};
`

export const NavigationDrawer = tw.aside`w-[40%] h-screen bg-gray-100 absolute top-0 left-24 text-black pt-24 px-6`

export const ChevronIconLeft = tw.img`w-4 h-4 mx-auto`
export const CloseDrawerBtn = tw.button`w-6 h-24 absolute right-[-6%] bg-gray-100 rounded-tr-full rounded-br-full top-72

md:right-[-8%] overscroll-y-contain
lg:right-[-4%]
xl:right-[-3%]`

export const ChevronIconRight = tw(ChevronIconLeft)`rotate-180 mr-0`

export const DrawerItemContainer = tw.div`flex justify-between items-center mx-auto bg-white px-4 py-2 rounded-xl mb-2 cursor-pointer hover:bg-gray-300 transition-colors duration-300`

export const NavigationDrawerProducts = tw(NavigationDrawer)`overflow-auto`
export const ProductImg = tw.img`w-32 h-32 rounded-md object-cover`
export const ProductLabel = tw(MenuItemLabel)`text-sm pt-1 font-light text-gray-900 border rounded-b-lg bg-gray-200 mt-[-4px]`
export const ProductContainer = tw.article`hover:scale-95 transition duration-300 cursor-pointer pb-4`
export const ProductsContainer = tw.article`flex gap-2 flex-wrap justify-around`
export const ProductBadge = tw.div`font-light text-xs px-0 cursor-pointer text-gray-400 flex w-10 h-5 flex items-center hover:underline`
export const ChevronBadge = tw(ChevronIconLeft)`w-3 h-3 mr-1`

export const CategoryTitle = tw.h2`text-gray-600 text-xl mb-3 font-bold flex justify-between items-center`
export const CategoryLabel = tw.h2`text-gray-500 font-normal`

export const ImgLoaderContainer = tw.div`h-full w-full flex justify-center items-center`
export const ImgLoaderFail = tw.div`h-32 w-32 flex justify-center items-center bg-gray-100 text-gray-400 text-sm text-center font-medium`

export const ButtonsContainer = tw.div`absolute right-4 w-60 h-14 top-24 flex justify-evenly items-center gap-2`