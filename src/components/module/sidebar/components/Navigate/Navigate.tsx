import { type FC } from 'react'

import logo from '../../../../../assets/logo.png'
import { Contact } from '../routers/contact/Contact'
import { Folder } from '../routers/folder/Folder'
import { Profile } from '../routers/profile/Profile'
import { Skills } from '../routers/skills/Skills'
import { Timeline } from '../routers/timeline/Timeline'

export const Navigate: FC = () => {
  return (
    <ul className='w-full h-[450px] flex flex-col justify-between'>
      <li className='w-full h-20 border-b-2'>
        <img src={logo} className='max-w-full max-h-full' />
      </li>
      <Profile />
      <Skills />
      <Folder />
      <Timeline />
      <Contact />
    </ul>
  )
}
