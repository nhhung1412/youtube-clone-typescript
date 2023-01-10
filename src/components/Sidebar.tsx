import {
  helpLinks,
  mainLinks,
  secondaryLinks,
  subscriptionLinks,
  textLinks,
  youtubeLinks,
} from '../assets/linkIcon'
import { NavLink } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <div className="w-2/12 bg-white overflow-auto sidebar">
      {/* main links sidebar */}
      <ul className="flex flex-col pb-3 border-b-2 bg-white px-3">
        {mainLinks.map(({ icon, name, path }) => (
          <NavLink to={path}>
            <li
              key={name}
              className="pl-4 py-2 hover:bg-gray-100 flex items-center gap-5 rounded-xl"
            >
              <span className="opacity-50">{icon}</span>
              <span className="text-sm tracking-wider">{name}</span>
            </li>
          </NavLink>
        ))}
      </ul>
      {/* second link sidebar */}
      <ul className="flex flex-col py-3 border-b-2 bg-white px-3">
        {secondaryLinks.map(({ icon, name, path }) => (
          <NavLink to={path}>
            <li
              key={name}
              className="pl-4 py-2 hover:bg-gray-100 flex items-center gap-5 rounded-xl"
            >
              <span className="opacity-50">{icon}</span>
              <span className="text-sm tracking-wider">{name}</span>
            </li>
          </NavLink>
        ))}
      </ul>
      {/* subcribe link */}
      <ul className="flex flex-col py-3 border-b-2 bg-white px-3">
        <h1 className="pl-3 py-1">Explore</h1>
        {subscriptionLinks.map(({ icon, name, path }) => (
          <NavLink to={path}>
            <li
              key={name}
              className="pl-4 py-2 hover:bg-gray-100 flex items-center gap-5 rounded-xl"
            >
              <span className="opacity-50">{icon}</span>
              <span className="text-sm tracking-wider">{name}</span>
            </li>
          </NavLink>
        ))}
      </ul>
      {/* youtube link */}
      <ul className="flex flex-col py-3 border-b-2 bg-white px-3">
        <h1 className="pl-3 py-1">More from YouTube</h1>
        {youtubeLinks.map(({ icon, name, path }) => (
          <NavLink to={path}>
            <li
              key={name}
              className="pl-4 py-2 hover:bg-gray-100 flex items-center gap-5 rounded-xl"
            >
              <span className="text-main">{icon}</span>
              <span className="text-sm tracking-wider">{name}</span>
            </li>
          </NavLink>
        ))}
      </ul>
      {/* help link */}
      <ul className="flex flex-col py-3 border-b-2 bg-white px-3">
        <h1 className="pl-3 py-1">Explore</h1>
        {helpLinks.map(({ icon, name, path }) => (
          <NavLink to={path}>
            <li
              key={name}
              className="pl-4 py-2 hover:bg-gray-100 flex items-center gap-5 rounded-xl"
            >
              <span className="opacity-50">{icon}</span>
              <span className="text-sm tracking-wider">{name}</span>
            </li>
          </NavLink>
        ))}
      </ul>
      {/* text links */}
      <div className="flex flex-col">
        <div className="px-5 pt-3 flex flex-wrap">
          {textLinks[0].map((item, index) => (
            <a
              key={index}
              href="#"
              className="text-[12px] text-[#60607f] font-bold mr-[5px]"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="px-5 pt-3 flex flex-wrap">
          {textLinks[1].map((item, index) => (
            <a
              key={index}
              href="#"
              className="text-[12px] text-[#60607f] font-bold mr-[5px]"
            >
              {item}
            </a>
          ))}
        </div>

        <span className="text-xs px-5 py-3 text-gray-400">
          © 2023 Google LLC
        </span>
      </div>
    </div>
  )
}
