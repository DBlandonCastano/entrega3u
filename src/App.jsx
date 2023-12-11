import { useEffect, useState } from "react";
import {getRandomNumber} from "./helpers/random";
import axios from "axios";
 import Location from "./component/Location";
import ResidentList from "./component/ResidentList";

function App() {
  const [locationInfo, setLocationInfo] = useState(null)

  useEffect(() => {
   const randomDimension=getRandomNumber(126);
  //  console.log(randomDimension)
    axios
      .get(`https://rickandmortyapi.com/api/location/${randomDimension}`)
      .then(({ data }) => setLocationInfo(data))
      .catch((err) => console.log(err));
  },[]);
 
  return ( 
    <main className="grid grid-cols-1 justify-items-center">
      <Location locationInfo={locationInfo} setLocationInfo={setLocationInfo} /> 
      <ResidentList residents={locationInfo?.residents ?? []}/>
    </main>
    
  );
};

export default App;
