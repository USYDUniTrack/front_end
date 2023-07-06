import '../src/App.css';
import { Header } from '../src/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import UnitDescription from '../src/component/UnitDescription';
import NavigationBar from '../src/component/NavigationBar';
  
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
        </div>
        <div className='rightNavigationWrapper'>

        </div>
      </div>
    </div>
  );
}
  
export default App;
