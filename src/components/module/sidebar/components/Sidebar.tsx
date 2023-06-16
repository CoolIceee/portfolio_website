import { type FC } from 'react'

import { Navigate } from './navigate/Navigate'

export const Sidebar: FC = () => {
  return (
    <div className='w-80 border-2 h-full'>
      <section className='mx-auto w-64 h-full py-10 flex justify-center'>
        <Navigate />
      </section>
    </div>
  )
}
