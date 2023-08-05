import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import ImageIcon from '@mui/icons-material/Image';
import DnsIcon from '@mui/icons-material/Dns';
import Home from 'pages/Home';
import HomeFeed from 'pages/HomeFeed';
import ItemEntry from 'pages/ItemEntry';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';

export const AppTitle = "Event Book";

export const PageInfo = [
    {
        id: 0,
        icon: <HomeIcon />,
        pageComponent: <Home/>,
        label: 'Home',
        route: '/',
        menuItem: true,
        appBarItem: true,
    },
    {
        id: 1,
        icon: <PeopleIcon />,
        pageComponent: <SignIn/>,
        label: 'SignIn',
        route: '/signin',
        menuItem: false,
        appBarItem: false,
    },
    {
        id: 2,
        icon: <PeopleIcon />,
        pageComponent: <SignUp/>,
        label: 'SignUp',
        route: '/signup',
        menuItem: false,
        appBarItem: false,
    },
    {
        id: 3,
        icon: <DnsIcon />,
        pageComponent: <HomeFeed/>,
        label: 'HomeFeed',
        route: '/home-feed',
        menuItem: true,
        appBarItem: true,
    },
    {
        id: 4,
        icon: <ImageIcon />,
        pageComponent: <ItemEntry/>,
        label: 'ItemEntry',
        route: '/item-entry',
        menuItem: true,
        appBarItem: true,
    },
];

export const userSettings = ['Profile', 'Account', 'Dashboard', 'Logout'];