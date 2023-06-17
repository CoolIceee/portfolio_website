import { type FC } from 'react'

import profile from '../../../../../../assets/profile.png'

export const Profile: FC = () => {
  return (
    <li className='w-full h-14 text-center flex items-center bg-slate-100 hover:bg-slate-200 rounded-xl'>
      <div className='w-auto h-11 px-3'>
        <img src={profile} alt='profile' className='max-w-full max-h-full rounded-xl' />
      </div>
      <b className='text-slate-500 px-2'>ОБО МНЕ</b>
    </li>
  )
}
