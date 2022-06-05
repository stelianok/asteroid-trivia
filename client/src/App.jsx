import React, {useState, useEffect} from 'react';
import axios from "axios";

const baseURL = "https://api.nasa.gov/neo/rest/v1/neo/browse/?api_key=XbOL6eVBSgeONZepEUOQhgEODrnISyPUHht7iTsC";

function App() {
  const [asteroid, setAsteroid] = useState(null);

  useEffect(() => { 
    axios.get(baseURL).then((response) => {
      setAsteroid(response.data.near_earth_objects);
    });
  },[]);
 
  return (
    <div>pamonha</div>
  );
}

export default App;