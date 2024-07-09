import { Package, Settings, User, Wallet } from 'lucide-react'

export const accountNavlinks = [
  {
    name: 'Profile',
    href: '/user/profile',
    current: false,
    icons: <User size={24} />
  },
  {
    name: 'Packages',
    href: '/user/packages',
    current: false,
    icons: <Package size={24} />
  },
  {
    name: 'Wallet',
    href: '/user/wallet',
    current: true,
    icons: <Wallet size={24} />
  },
  {
    name: 'Settings',
    href: '/user/setting',
    current: false,
    icons: <Settings size={24} />
  }
]
