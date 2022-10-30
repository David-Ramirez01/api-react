import React,{useEffect , useState } from "react";
import Personaje from "./componentes/personajes";

function App() {

  const [personajes, setpersonajes] = useState([]);

  const Initialurl = "https://naruto-api.herokuapp.com/api/v1/characters"


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
    <div className = "container">
      <nav className="navbar navbar-dark bg-dark">
        <div className="container d-flex d-flex justify-content-start ">
          <h3 className="ml-5 text-light" col> Api de Naruto</h3>
        </div>
        </nav>
      
      < Personaje personajes={personajes} />
    </div>
    </>
  );
}

export default App;
