import { type FC } from 'react'

import { Contact } from '../contacts/Contact'
import { WindowWithAvatar } from '../windowWithAvatar/WindowWithAvatar'

import { NavigateLink } from './components/NavigateLink'

import './navigation.css'
export const Navigation: FC = () => {
  return (
    <div className='w-[100%] h-[90%]'>
      <WindowWithAvatar />
      <div className='w-[100%] relative mt-10'>
        <NavigateLink />
      </div>
      <Contact />
    </div>
  )
}
