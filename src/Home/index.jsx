import "bootstrap/dist/css/bootstrap.css";
import "react-datepicker";
import Cover from "../Cover";
// import flag from "../resource/flag.png";
// import h10 from "../resource/h10.jpg";
// import h7 from "../resource/h7.jpg";
// import h8 from "../resource/h8.jpg";
// import h9 from "../resource/h9.jpg";
import BasicTabs from "./BasicTabs";
import Reservation from "./Reservation";
// import TravelInspiration from "./TravelInspiration";
import "./style.css";
import TravelInspiration from "./TravelInspiration";
import VerticalTabs from "./VerticalTabs";

function Home(props) {
  

 
  return (
    <div className="minhtan">
     
        <Cover />
    
      <div className="flag">
        <VerticalTabs />
      </div>
      {/* <div>
        <FlightList />
      </div> */}

      <TravelInspiration />

      <Reservation />
      <h1 className="topic">Bạn muốn khám phá điều gì?</h1>
      <BasicTabs />

      


     
    </div>
  );
}
export default Home;
