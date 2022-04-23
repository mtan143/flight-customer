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
      
     
   
            
           <Routes>
           <Route exact path="/"  element={<Home />}/>
            <Route exact path="/flightList" element={<FlightList />} />
           
          </Routes> 
          
          
        
          
       
        
        <Footer />
    </div>

 
  );
}

export default App;
