import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import UnitDescription from './component/UnitDescription';
import NavigationBar from './component/NavigationBar';
import Reviews from './component/Reviews';
import VerticalLinearStepper from './component/steps';
import UnitOutline from './component/UnitOutline';

function App() {
  return (
    <div className="App">
    <Header/>
      <div className='HomePageWrapper'>
        <div className='leftNavigationWrapper'>
          <NavigationBar />
        </div>
        <div className='centerContentWrapper'>
          <UnitDescription />
          <UnitOutline />
          <Reviews />
        </div>
        <div className='rightNavigationWrapper'>
        <VerticalLinearStepper />
        </div>
        
      </div>
      
    </div>
    
  );
}

export default App;
