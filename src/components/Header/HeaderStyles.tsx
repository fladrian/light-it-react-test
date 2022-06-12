import tw from "twin.macro";

export const HeaderSection = tw.section`flex flex-col items-center px-40 z-10 absolute w-[100%] justify-center bg-gray-900 text-white h-20

md:flex md:flex-row md:justify-between md:items-center`

export const HeaderSelect = tw.select`h-6 w-52 cursor-pointer rounded px-2 border-gray-700 border-2 bg-white text-gray-900 text-lg md:h-8`

export const HeaderImg = tw.img`min-w-[80px] w-20 h-10 mx-auto md:w-32 md:h-14`
