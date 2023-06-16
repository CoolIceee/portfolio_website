import { type FC } from 'react'

import profile from '../../../../../assets/profile.png'

export const Navigate: FC = () => {
  return (
    <ul className='w-full h-[400px] flex flex-col justify-between '>
      <li>logo</li>
      <li className='w-full h-14 cursor-pointer  text-center flex items-center hover:bg-slate-100'>
        <div className='w-auto h-11 px-2'>
          <img src={profile} alt='profile' className='max-w-full max-h-full' />
        </div>
        <b className='text-slate-500 px-2'>ОБО МНЕ</b>
      </li>
      <li className='w-full h-14 border-2 text-center flex items-center'>
        <div className='w-auto h-11 px-2'>
          <img src={profile} alt='profile' className='max-w-full max-h-full' />
        </div>
        <b className='text-slate-500 px-2'>НАВЫКИ</b>
      </li>
      <li className='w-full h-14 border-2 text-center flex items-center'>
        <div className='w-auto h-11 px-2'>
          <img src={profile} alt='profile' className='max-w-full max-h-full' />
        </div>
        <b className='text-slate-500 px-2'>ТАЙМЛАЙН</b>
      </li>
      <li className='w-full h-14 border-2 text-center flex items-center'>
        <div className='w-auto h-11 px-2'>
          <img src={profile} alt='profile' className='max-w-full max-h-full' />
        </div>
        <b className='text-slate-500 px-2'>ПРОЕКТЫ</b>
      </li>
      <li className='w-full h-14 border-2 text-center flex items-center'>
        <div className='w-auto h-11 px-2'>
          <img src={profile} alt='profile' className='max-w-full max-h-full' />
        </div>
        <b className='text-slate-500 px-2'>КОНТАКТЫ</b>
      </li>
    </ul>
  )
}
