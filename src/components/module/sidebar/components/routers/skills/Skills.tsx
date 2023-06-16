import { type FC } from "react"

import skills from '../../../../../../assets/skills.png'

export const Skills: FC = () => {
    return (
      <li className='w-full h-14 text-center flex items-center hover:bg-slate-100 rounded-xl'>
        <div className='w-auto h-11 px-3'>
          <img src={skills} alt='profile' className='max-w-full max-h-full rounded-xl' />
        </div>
        <b className='text-slate-500 px-2'>НАВЫКИ</b>
      </li>
    )
}