import Locations from "./location";
import Services from "./services";
import Works from "./works";

export const tabsList = [
    {
        name: 'Works',
        slug: ''
    },
    {
        name: 'Location',
        slug: 'location'
    },
    {
        name: 'Services',
        slug: 'services'
    }
]

export const TabActions = () => {
    const GetCurrentPage = (tab: string) => {
        switch (tab) {
            case 'location':
                return <Locations />;
            case 'services':
                return <Services />
            default:
                return <Works />
        }
    }


    return { GetCurrentPage }
}