import { type FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import { InfoByCategory } from '../module/InfoByCategory/components/InfoByCategory'
import { Skills } from '../module/skills'
import { Home } from '../screen/components/home/Home'

export const Routers: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route index element={<InfoByCategory />} />
        <Route path='/skills' element={<Skills />} />
      </Route>
    </Routes>
  )
}
