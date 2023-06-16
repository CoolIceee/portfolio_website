import { type FC } from 'react'

import contact from '../../../../../../assets/contact.png'

export const Contact: FC = () => {
  return (
    <li className='w-full h-14 text-center flex items-center hover:bg-slate-100 rounded-xl'>
      <div className='w-auto h-11 px-3'>
        <img src={contact} alt='profile' className='max-w-full max-h-full rounded-xl ' />
      </div>
      <b className='text-slate-500 px-2'>КОНТАКТЫ</b>
    </li>
  )
}
