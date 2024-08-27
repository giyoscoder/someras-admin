import Contact from "../Contacts";
import LastesStories from "../Lateststories";
import Services from "../services";
import ShowcaseSection from "../Showcase";
import TrendingLots from "../TrendingLots";
import Upcoming from "../upcoming";


export const tabList = [
    {
        name: 'Showcase',
        slug: ''
    },
    {
        name: 'Trending Lots',
        slug: 'trending'
    },
    {
        name: 'Upcoming auctions',
        slug: 'upcoming'
    },
    {
        name: 'Latest stories',
        slug: 'stories'
    },
    {
        name: 'Contact',
        slug: 'contact'
    },
    {
        name: 'Services',
        slug: 'services'
    }
]



export const TabActions = () => {

    const GetCurrentPage = (tab: string) => {
        switch (tab) {
            case 'upcoming':
                return <Upcoming />;
            case 'stories':
                return <LastesStories />
            case 'trending':
                return <TrendingLots />;
            case 'contact':
                return <Contact />
            case 'services':
                return <Services />
            default:
                return <ShowcaseSection />
        }
    }

    return { GetCurrentPage }

}