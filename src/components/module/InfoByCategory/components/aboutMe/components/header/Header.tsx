import { FC } from 'react'

import { AvatarPhoto } from './components/AvatarPhoto'
import './header.css'
export const Header: FC = () => {
  return (
    <div className='flex relative items-center  w-[100%]'>
      <AvatarPhoto />
      <div className='absolute w-[10.2rem] h-[3rem] bg-[#787BFE] rounded-e-3xl left-[4.5rem]'></div>
      <div className='absolute w-[30rem] h-[1.5rem] left-[14.4rem] rounded-e-3xl  bg-[#787BFE]'></div>
    </div>
  )
}
