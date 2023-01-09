import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Watch } from '../pages/Watch'
import { Search } from '../pages/Search'

export const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search' element={<Search />} />
            <Route path='/watch/:id' element={<Watch />} />
        </Routes>
    )
}
