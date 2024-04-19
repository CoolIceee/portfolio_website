import { FC } from 'react'

import iGit from '../../../../../assets/iGit.jpeg'

import './windowWithAvatar.css'
export const WindowWithAvatar: FC = () => {
  return (
    <div className='w-[80%] h-[25%] m-auto flex flex-col justify-end relative '>
      <div className=' w-full flex items-center flex-col absolute top-0'>
        <div className='w-[5rem] border-[0.5rem] border-[#787BFE]  rounded-full git_info_container'>
          <img className='w-full rounded-full' src={iGit} />
        </div>
      </div>
      <div className='border-[#787BFE] bg-[#787BFE] h-[75%] git_info_container text-center flex flex-col justify-center items-center rounded-xl'>
        <div className='text-[#ffffffb4] w-[70%] text-lg bg-[#5355c4] rounded-xl mt-10'>
          Magomed M
        </div>
        <div className='text-[#5355c4] text-xs'>Фронтенд Разработчик</div>
        <div className='text-[#5355c4] text-xs'>19 лет</div>
      </div>
    </div>
  )
}
