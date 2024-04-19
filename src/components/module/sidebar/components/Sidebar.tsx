import { type FC } from 'react'

import { Navigation } from './navigation/Navigation'

import './sidebar.css'
export const Sidebar: FC = () => {
  return (
    <nav className='border-[0.1rem] border-[#1d1d1d] w-[17rem] h-full rounded-2xl enlargement_sideways_and_straight flex justify-center items-center'>
      <Navigation />
    </nav>
  )
}
