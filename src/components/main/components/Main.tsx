import { type FC } from 'react'
import { Outlet } from 'react-router-dom'


export const Main: FC = () => {
  return (
    <main className='border-[0.1rem] border-[#1d1d1d] w-[57rem] h-full rounded-2xl zoom_straight flex justify-center items-center'>
      <Outlet />
    </main>
  )
}
