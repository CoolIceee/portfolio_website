import { type FC } from 'react'

import folder from '../../../../../../assets/folder.png'

export const Folder: FC = () => {
  return (
    <li className='w-full h-14 text-center flex items-center bg-slate-100 hover:bg-slate-200 rounded-xl'>
      <div className='w-auto h-11 px-3'>
        <img src={folder} alt='profile' className='max-w-full max-h-full rounded-xl' />
      </div>
      <b className='text-slate-500 px-2'>ПРОЕКТЫ</b>
    </li>
  )
}
