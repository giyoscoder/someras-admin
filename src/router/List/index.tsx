import MainPage from "../../view/Main";
import Users from "../../view/User";
import SingleUser from "../../view/User/SingleUser";

export const routeList = [
    {
        parent: 'dashboard',
        sidebar: true,
        icon: 'dashboard',
        title: 'Auctions',
        element: <MainPage />
    },
    {
        parent: 'user',
        sidebar: true,
        icon: 'user',
        title: 'Users',
        element: <Users />
    },
    {
        parent: 'user/:id',
        sidebar: false,
        icon: '',
        title: 'Users',
        element: <SingleUser />
    }
]