import { Routers } from '../router/Routers'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'

export const Layout = () => {
  return (
    <div className="font-Boroto max-h-screen overflow-hidden h-[100vh]">
      <div className="h-[10vh]">
        <Navbar />
      </div>
      <div className="flex h-[90vh]">
        <Sidebar />
        <Routers />
      </div>
    </div>
  )
}
