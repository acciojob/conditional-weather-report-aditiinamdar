
import React from "react";
import './../styles/App.css';

const App = () => {
  const [weather,setWeather]=useState({
  temperature:25,
  conditions:"Sunny",
  });
  useEffect(()=>{
  },[]);
  return (
    <div>
        {/* Do not remove the main div */}
    <WeatherDisplay weather={weather}/>
    </div>
  )
}

export default App
