import { type FC } from 'react'

import video from '../../../../../assets//video/video.mp4'
import { Contact } from '../routers/contact/Contact'
import { Folder } from '../routers/folder/Folder'
import { Profile } from '../routers/profile/Profile'
import { Skills } from '../routers/skills/Skills'
import { Timeline } from '../routers/timeline/Timeline'

export const Navigate: FC = () => {
  return (
    <ul className='w-full h-[600px] flex flex-col justify-between'>
      <li className='w-full h-40 flex justify-center border-2'>
        <video className='w-full' controls>
          <source type='video/ogg; codecs="theora, vorbis"' src={video} />
        </video>
      </li>
      <li className='w-full h-[350px] flex flex-col  justify-between'>
        <Profile />
        <Skills />
        <Folder />
        <Timeline />
        <Contact />
      </li>
      <li>
        <button className='w-full h-12 border-[3px] rounded-xl text-slate-500'>
          <b>РЕЗЮМЕ</b>
        </button>
      </li>
    </ul>
  )
}
