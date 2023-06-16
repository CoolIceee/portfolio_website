import { type FC } from 'react'

import { Navigate } from './components/Navigate/Navigate'

export const Sidebar: FC = () => {
  return (
    <div className='w-64 border-2 h-full'>
      <section className='mx-auto w-56 h-full py-10 flex justify-center'>
        <Navigate />
      </section>
    </div>
  )
}
