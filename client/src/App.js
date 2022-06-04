import React, {useState, useEffect} from 'react';
import axios from "axios";

const baseURL = "https://api.nasa.gov/neo/rest/v1/neo/browse/?api_key=NULL";


function App() {
  
  const [meteor, setMeteor] = useState();

  function RandomAsteroid()
   {
    
  useEffect(() => { axios.get(baseURL).then((response) => {
      var random = Math.floor(Math.random() * 19 + 1);
      setMeteor(response.data.near_earth_objects[random]);
      console.log(random)
      

    }).catch(() => {
      console.log("Deu erro na api")
    })
  }, []);

  console.log(meteor);

  }

  RandomAsteroid();
 
  return (
    <div>
      <h1> {meteor ? (meteor.name) : ("batata")}</h1>
    </div>
  );
}

export default App;