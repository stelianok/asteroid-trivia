import React, {useState, useEffect} from 'react';
import axios from "axios";
// import AsteroidTriviaCard from './components/AsteroidTriviaCard';

const baseURL = "https://api.nasa.gov/neo/rest/v1/neo/browse/?api_key=XbOL6eVBSgeONZepEUOQhgEODrnISyPUHht7iTsC";

function App() {
  const [asteroids, setAsteroids] = useState(null);

  useEffect(() => { 
    axios.get(baseURL).then((response) => {
      setAsteroids(response.data.near_earth_objects);
    }).catch(() => {
      console.log("API error!");
    })
  },[]);
 
  return (
    <div>Pamonha</div>
  );
}

export default App;