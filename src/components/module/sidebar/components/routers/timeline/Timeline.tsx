import { type FC } from "react"

import timeline from '../../../../../../assets/timeline.png'


export const Timeline: FC = () => {
    return (
      <li className='w-full h-14  text-center flex items-center hover:bg-slate-100 rounded-xl'>
        <div className='w-auto h-11 px-3'>
          <img src={timeline} alt='profile' className='max-w-full max-h-full rounded-xl' />
        </div>
        <b className='text-slate-500 px-2'>ТАЙМЛАЙН</b>
      </li>
    )
}