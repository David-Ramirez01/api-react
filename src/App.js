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
    <div className = "container">
      <nav className="navbar navbar-dark bg-dark">
        <div className="container d-flex d-flex justify-content-start ">
          <img src="https://e7.pngegg.com/pngimages/181/758/png-clipart-goku-dragon-ball-z-collectible-card-game-dragon-ball-collectible-card-game-logo-kartikeya-television-text.png" alt="" style={{maxWidth: "100px", maxHeight: "50px",}}/> 
          <h3 className="ml-5 text-light" col> Api de Dragon ball</h3>
        </div>
        </nav>
      
      < Personaje personajes={personajes} />
    </div>
    </>
  );
}

export default App;
