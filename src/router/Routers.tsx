import { Routes, Route } from 'react-router-dom'
import { useState, ReactNode, FC } from 'react'

import { Home } from '../pages/Home'
import { Watch } from '../pages/Watch'
import { Search } from '../pages/Search'
import { Login } from '../pages/Login'
import { NotFound } from '../pages/NotFound'

import { Navbar } from '../components/Navbar'
import { Sidebar } from '../components/Sidebar/Sidebar'

type Types = {
  children: ReactNode
}

const Layout: FC<Types> = ({ children }) => {
  const [toggleSideBar, setToggleSideBar] = useState<boolean>(false)

  const handleToggleSideBar = () => {
    setToggleSideBar((value) => !value)
  }

  return (
    <div className="font-Boroto max-h-screen overflow-hidden h-[100vh]">
      <Navbar handleToggleSideBar={handleToggleSideBar} />
      <div className="flex h-[90vh]">
        <Sidebar toggleSideBar={toggleSideBar} />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  )
}

export const Routers: React.FC = () => {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <Layout>
            <NotFound />
          </Layout>
        }
      />
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/search"
        element={
          <Layout>
            <Search />
          </Layout>
        }
      />
      <Route
        path="/watch/:id"
        element={
          <Layout>
            <Watch />
          </Layout>
        }
      />

      <Route path="/login" element={<Login />} />
    </Routes>
  )
}
