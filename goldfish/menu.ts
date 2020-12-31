import HomeIcon from '@material-ui/icons/Home';
import TimelineIcon from '@material-ui/icons/Timeline';
import PersonIcon from '@material-ui/icons/Person';

export const gfMenu = [
	{
		key: 'home',
		label: 'Home',
		Icon: HomeIcon,
		href: '/',
	},
	{
		key: 'chart',
		label: 'Chart',
		Icon: TimelineIcon,
		href: '/chart',
	},
	{
		key: 'user',
		label: 'Profile',
		Icon: PersonIcon,
		href: '/user',
	},
];
