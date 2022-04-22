// import { Link, Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import VerticalTabs from './Home/VerticalTabs';
// import VerticalTabs from './Home/VerticalTabs';
import FlightList from './pages/FlightList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import SearchFlight from './SearchFlight/index';

import TodoForm from './Home/components/TodoForm';


function App() {

  return (
     
    <div className="App">
        <Header />
      
     
   
              {/* <Link to={"/FlightList"} className="nav-link">
                Items
              </Link>
         
              <Link to={"/SearchFlight"} className="nav-link">
                Add
              </Link>
      
        
          <Routes>
            
            <Route exact path="/FlightList" element={<FlightList />} />
            <Route exact path="/SearchFlight" element={<SearchFlight />} />
           
          </Routes>  */}
           {/* <Routes>
            <Route exact path="/flightList" element={<FlightList />} />
            <Route exact path="/home"  element={<Home />}/>
          </Routes>  */}
          
          <Home />
          
       
        
        <Footer />
    </div>

 
  );
}

export default App;
