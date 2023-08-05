import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import ImageIcon from '@mui/icons-material/Image';
import DnsIcon from '@mui/icons-material/Dns';

export const mainNavbarItems = [
    {
        id: 0,
        icon: <HomeIcon />,
        label: 'Home',
        route: '/',
    },
    {
        id: 1,
        icon: <PeopleIcon />,
        label: 'Authentication',
        route: 'authentication',
    },
    {
        id: 2,
        icon: <DnsIcon />,
        label: 'HomeFeed',
        route: 'home-feed',
    },
    {
        id: 3,
        icon: <ImageIcon />,
        label: 'ItemEntry',
        route: 'item-entry',
    },
]