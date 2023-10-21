import './App.css';
import {Route,Routes, useLocation} from 'react-router-dom'
import LandingPage from './Components/LandingPage/Landing'
import HomePage from './Components/HomePage/HomePage'
import NavBar from './Components/NavBar/NavBarr'


function App() {
  const location = useLocation();
  return (
    <div className="App">


     {location.pathname !== "/"  && (<NavBar/>)}

      <Routes>

        < Route 
          exact path='/' 
          element={<LandingPage />}>    
        </Route> 

        < Route 
          path='/home' 
          element={<HomePage />}>    
        </Route> 



      </Routes>
    </div>
  );
}

export default App;
