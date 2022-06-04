import React, {useState, useEffect} from 'react';
import axios from "axios";

const baseURL = "https://api.nasa.gov/neo/rest/v1/neo/browse/?api_key=BATATA";


function App() {
  function GetRandomPlanet(){
    console.log("planeta aleatório")
  }

  const [meteor, setMeteor] = useState();

  useEffect(() => { axios.get(baseURL).then((response) => {

      setMeteor(response.data.near_earth_objects[0]);
      console.log(response.data.near_earth_objects[0]);
      GetRandomPlanet();

    }).catch(() => {
      console.log("Deu erro na api")
    })
  }, []);
 
  return (
    <div>
      <h1> {meteor ? (meteor.name) : ("batata")}</h1>
    </div>
  );
}

export default App;