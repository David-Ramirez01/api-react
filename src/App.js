import React,{useEffect , useState } from "react";
import Personaje from "./componentes/personajes";

function App() {

  const [personajes, setpersonajes] = useState([]);

  const Initialurl = "https://dragon-ball-super-api.herokuapp.com/api/characters"

  const FetchPersonajes = (url) => {
    fetch(url)
    .then(resp => resp.json())
    .then(data => setpersonajes(data))
    .catch(console.log(Error))
  
  }
  
  useEffect (() => {
    FetchPersonajes(Initialurl);
  },[])


  return (
    <>
    <div className = "container mt-5 mb-5">
      <h3 className="text-center"> Api de Dragon ball</h3>
      < Personaje personajes={personajes} />
    </div>
    </>
  );
}

export default App;
