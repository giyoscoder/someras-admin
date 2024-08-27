import { useForm } from 'react-hook-form';
import Header from '../../components/Ui/Header'
import ShowcaseSection from './Showcase';
import TrendingLots from './TrendingLots';
import Upcoming from './upcoming';
import LastesStories from './Lateststories';
import CTabs from '../../components/CElements/CTabs';
import useGetQueries from '../../hooks/useGetQuries';
import { TabActions, tabList } from './Logic';


const MainPage = () => {
  const { tab } = useGetQueries()
  const { GetCurrentPage } = TabActions()


  return (
    <div className='w-full pt-[64px] space-y-[30px]'>
      <Header title={'Dashboard'} />
      <div className='px-6 flex'>
        <CTabs tabList={tabList} />
      </div>
      <div className='px-6'>
        {GetCurrentPage(tab)}
      </div>
    </div>
  )
}

export default MainPage