import { Head } from 'next/document';
import Header from '../components/Header';
import UnitDescription from '../components/UnitDescription';
import NavigationBar from '../components/NavigationBar';
import Reviews from '../components/Reviews';
import VerticalLinearStepper from '../components/steps';
import UnitOutline from '../components/UnitOutline';
import Timetable from '../components/Timetable';
import Tree from '../components/Tree';

export default function Home() {
    return (
        <>
            <Head>
                <title>UniTrack Homepage</title>
            </Head>
            <div className="App">
                <Header />
                <div className='HomePageWrapper'>
                    <div className='leftNavigationWrapper'>
                        <NavigationBar />
                    </div>
                    <div className='centerContentWrapper'>
                        <UnitDescription />
                        <Tree />
                        <Timetable />
                        <UnitOutline />
                        <Reviews />
                    </div>
                    <div className='rightNavigationWrapper'>
                        <VerticalLinearStepper />
                    </div>
                </div>
            </div>
        </>
    )
}


