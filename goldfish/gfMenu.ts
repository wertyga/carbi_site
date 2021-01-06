import HomeIcon from '@material-ui/icons/Home';

import TimelineIcon from '@material-ui/icons/Timeline';
import PersonIcon from '@material-ui/icons/Person';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import InfoIcon from '@material-ui/icons/Info';

export const gfMenu = [
  {
    key: 'home',
    label: 'Home',
    getIcon: () => HomeIcon,
    href: '/',
    isRender: () => true,
  },
  {
    key: 'chart',
    label: 'Chart',
    getIcon: () => TimelineIcon,
    href: '/chart',
    isRender: () => true,
  },
  {
    key: 'tariff',
    label: 'Tariff plans',
    getIcon: () => AccountBalanceWalletIcon,
    href: '/tariffs',
    isRender: () => true,
  },
  {
    key: 'user',
    label: 'Profile',
    getIcon: (user) => (user ? PersonIcon : PermIdentityIcon),
    href: '/user',
    isRender: () => true,
  },
  {
    key: 'signals',
    label: 'Signals',
    getIcon: () => InfoIcon,
    href: '/signals',
    isRender: (user) => !!user,
  },
];
