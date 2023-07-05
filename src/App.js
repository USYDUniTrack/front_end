import './App.css';
import { Header } from './Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import UnitDescription from './component/UnitDescription';
import NavigationBar from './component/NavigationBar';
import Reviews from './component/Reviews';
import VerticalLinearStepper from './component/steps';

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
          <Reviews/>
          
        </div>
        <div className='rightNavigationWrapper'>
        <VerticalLinearStepper />
        </div>
        
      </div>
      
    </div>
    
  );
}

export default App;
