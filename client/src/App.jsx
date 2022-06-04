import React, {useState, useEffect} from 'react';
import axios from "axios";
import { useCallback } from 'react';


const baseURL = "https://api.nasa.gov/neo/rest/v1/neo/browse/?api_key=XbOL6eVBSgeONZepEUOQhgEODrnISyPUHht7iTsC";



function App() {
  const [meteor, setMeteor] = useState(null);
  
  const getRandomAsteroid = useCallback((asteroids) => {
    const meteorArraySize = asteroids.length - 1;
  
    console.warn(`tamanho array: ${meteorArraySize}`);

    let random = Math.floor(Math.random() * meteorArraySize + 1);
    
    console.warn(random);

    setMeteor(asteroids[random]);
  }, []);

  useEffect(() => { 
    axios.get(baseURL).then((response) => {
      getRandomAsteroid(response.data.near_earth_objects)
    });
  },[]);
 
  return (
    <div>
      {(meteor) && (meteor.name)}
    </div>
  );
}

export default App;