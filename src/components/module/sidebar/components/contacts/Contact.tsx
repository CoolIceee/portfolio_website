import { FC } from 'react'

import gitHub from '../../../../../assets/gitHub.png'
import sv from '../../../../../assets/sv.png'
import telegram from '../../../../../assets/telegram.png'

export const Contact: FC = () => {
  const styleLi = 'w-[4rem] flex items-center justify-center'
  return (
    <div className='w-[80%] h-[3rem] m-auto border-2 rounded-lg mt-10 flex flex-col justify-center'>
      <ul className='flex justify-between'>
        <li className={`${styleLi} `}>
          <div className='w-[2rem]'>
            <img className='w-full' src={gitHub} />
          </div>
        </li>
        <li className={`${styleLi}`}>
          <div className='w-[2rem]'>
            <img className='w-full' src={sv} />
          </div>
        </li>
        <li className={styleLi}>
          <div className='w-[2rem]'>
            <img className='w-full' src={telegram} />
          </div>
        </li>
      </ul>
    </div>
  )
}
