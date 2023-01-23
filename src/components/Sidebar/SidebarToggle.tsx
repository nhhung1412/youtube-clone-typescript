import { mainLinks } from '../../assets/iconLinks'
import { NavLink } from 'react-router-dom'

export const SidebarToggle: React.FC = () => {
  return (
    <div>
      {/* mobile links sidebar */}
      <ul className="bg-white">
        {mainLinks.map(({ icon, name, path }) => (
          <NavLink to={path} key={name}>
            <li
              key={name}
              className="py-3 hover:bg-gray-100 flex flex-col items-center gap-3 rounded-xl"
            >
              <span className="opacity-50">{icon}</span>
              <span className="text-[10px]">{name}</span>
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  )
}
