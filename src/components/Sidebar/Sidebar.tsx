import { SidebarMain } from './SidebarMain'
import { SidebarToggle } from './SidebarToggle'

export const Sidebar = ({ toggleSideBar }: { toggleSideBar: boolean }) => {
  return (
    <>
      {toggleSideBar ? (
        <div className="w-[5.5%] bg-white transition-all ease-in-out duration-200">
          <SidebarToggle />
        </div>
      ) : (
        <div className="w-2/12 bg-white overflow-auto  transition-all ease-in-out duration-200">
          <SidebarMain />
        </div>
      )}
    </>
  )
}
