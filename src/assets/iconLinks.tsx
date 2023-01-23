import {
  MdHomeFilled,
  MdOutlineSlowMotionVideo,
  MdSubscriptions,
  MdOutlineVideoLibrary,
  MdHistory,
  MdOutlineSmartDisplay,
  MdOutlineWatchLater,
  MdThumbUpOffAlt,
  MdSettings,
  MdOutlinedFlag,
  MdOutlineHelpOutline,
  MdOutlineFeedback,
  MdOutlineSportsVolleyball,
} from 'react-icons/md'

import { TbMusic, TbDeviceGamepad2 } from 'react-icons/tb'
import { FaRegCompass } from 'react-icons/fa'
import { GiFilmStrip } from 'react-icons/gi'
import { HiOutlineFire } from 'react-icons/hi'
import { SiYoutubemusic, SiYoutubestudio } from 'react-icons/si'
import { CiYoutube } from 'react-icons/ci'
import { ImYoutube } from 'react-icons/im'

type Icon = {
  icon: JSX.Element
  name: string
  path: string
}[]

export const mainLinks: Icon = [
  {
    icon: <MdHomeFilled className="text-xl" />,
    name: 'Home',
    path: '/',
  },
  {
    icon: <FaRegCompass className="text-xl" />,
    name: 'Explore',
    path: '/explore',
  },
  {
    icon: <MdOutlineSlowMotionVideo className="text-xl" />,
    name: 'Shorts',
    path: '/shorts',
  },
  {
    icon: <MdSubscriptions className="text-xl" />,
    name: 'Subcripstions',
    path: '/subcriptions',
  },
]

export const secondaryLinks: Icon = [
  {
    icon: <MdOutlineVideoLibrary className="text-xl" />,
    name: 'Library',
    path: '/library',
  },
  {
    icon: <MdHistory className="text-xl" />,
    name: 'History',
    path: '/history',
  },
  {
    icon: <MdOutlineSmartDisplay className="text-xl" />,
    name: 'Your Videos',
    path: '/yourvideo',
  },
  {
    icon: <MdOutlineWatchLater className="text-xl" />,
    name: 'Watch Later',
    path: '/watchlater',
  },
  {
    icon: <MdThumbUpOffAlt className="text-xl" />,
    name: 'Liked Videos',
    path: '/likedvideo',
  },
]

export const subscriptionLinks: Icon = [
  {
    icon: <HiOutlineFire className="text-xl" />,
    name: 'Trending',
    path: '/trending',
  },
  {
    icon: <TbMusic className="text-xl" />,
    name: 'Music',
    path: '/music',
  },
  {
    icon: <MdOutlineSportsVolleyball className="text-xl" />,
    name: 'Sport',
    path: '/sport',
  },
  {
    icon: <TbDeviceGamepad2 className="text-xl" />,
    name: 'Gaming',
    path: '/gaming',
  },
  {
    icon: <GiFilmStrip className="text-xl" />,
    name: 'Films',
    path: '/films',
  },
]

export const youtubeLinks: Icon = [
  {
    icon: <SiYoutubestudio className="text-xl" />,
    name: 'Creator Studio',
    path: '/studio',
  },
  {
    icon: <SiYoutubemusic className="text-xl" />,
    name: 'YouTube Music',
    path: '/youtube-music',
  },
  {
    icon: <ImYoutube className="text-xl" />,
    name: 'YouTube Kids',
    path: '/kids',
  },
  {
    icon: <CiYoutube className="text-xl" />,
    name: 'YouTube TV',
    path: '/tv',
  },
]

export const helpLinks: Icon = [
  {
    icon: <MdSettings className="text-xl" />,
    name: 'Setting',
    path: '/setting',
  },
  {
    icon: <MdOutlinedFlag className="text-xl" />,
    name: 'Report',
    path: '/report',
  },
  {
    icon: <MdOutlineHelpOutline className="text-xl" />,
    name: 'Help',
    path: '/help',
  },
  {
    icon: <MdOutlineFeedback className="text-xl" />,
    name: 'Feedback',
    path: '/feedback',
  },
]

export const textLinks: string[][] = [
  [
    'About',
    'Press',
    'Copyright',
    'Contact us',
    'Creator',
    'Advertise',
    'Developers',
  ],
  [
    'Terms',
    'Privacy',
    'Policy & Safety',
    'How YouTube works',
    'Test new features',
  ],
]
