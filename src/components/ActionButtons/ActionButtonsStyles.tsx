import tw, {styled} from "twin.macro";

export const BtnIcon = tw.img`w-5 h-5 block cursor-pointer hover:bg-gray-200 rounded-md`
export const ActionBtnContainer = tw.section`flex w-48 h-32 bottom-4 right-0 absolute justify-center items-center`
export const ActionBtnAddSubstract = tw.article`bg-white h-20 w-8 rounded-md flex flex-col justify-around items-center mr-6`
export const ActionBtnArrowsContainer = tw.section`bg-white h-20 w-20 rounded-md flex flex-col justify-around items-center p-1`

export const ArrowBtnIcon = styled.img<{ direction?: string }>`
${tw`w-6 h-6 cursor-pointer cursor-pointer hover:bg-gray-200 rounded-md`}
${({ direction }) => direction === 'right' && tw`rotate-90`}
${({ direction }) => direction === 'down' && tw`rotate-180`}
${({ direction }) => direction === 'left' && tw`rotate-[-90deg]`}
`

export const LeftRightBtnContainer = tw.div`flex justify-between w-full`