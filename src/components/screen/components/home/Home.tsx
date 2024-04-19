import { type FC } from 'react'

import { Main } from '../../../main'
import { Sidebar } from '../../../module/sidebar'

export const Home: FC = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center '>
      <div className='flex justify-between w-[75rem] h-[85%]  mmw:h-[75%] mmsw:h-[65%] msw:h-[55%]'>
        <Sidebar />
        <Main />
      </div>
    </div>
  )
}
