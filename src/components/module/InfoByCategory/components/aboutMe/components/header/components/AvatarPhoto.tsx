import { FC } from 'react'

import iGit from '../../../../../../../../assets/iGit.jpeg'

export const AvatarPhoto: FC = () => {
  return (
    <div className='w-[5rem] border-[#787BFE] border-[0.5rem] rounded-full z-10 flex justify-center items-center'>
      <img src={iGit} className='w-full rounded-full' />
    </div>
  )
}
