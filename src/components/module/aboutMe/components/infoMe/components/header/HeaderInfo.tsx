import { FC } from 'react'

import iGit from '../../../../../../../assets/iGit.jpeg'

import './headerInfo.css'
export const HeaderInfo: FC = () => {
  return (
    <div className='flex relative items-center  w-[100%]'>
      <div className='w-[6rem] border-[#B50013] border-[0.5rem] rounded-full z-10'>
        <img src={iGit} className='w-full rounded-full' />
      </div>
      <div className='absolute w-[20%] h-[4rem] bg-[#B50013] rounded-e-3xl left-[5.2rem]'></div>
      <div className='w-[80%] h-[2rem] bg-[#B50013]'></div>
    </div>
  )
}
