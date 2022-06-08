import Card from "../Card";
import { useState, useEffect } from "react";
import "./style.css";

const Home = (props) => {
  const [frutas, setFrutas] = useState([]);

  const getFrutas = async () => {
    const response = await fetch("http://localhost:3001/frutas/all-frutas");
    const list = await response.json();
    console.log(list);
    setFrutas(list);
  };
  
  useEffect(() => {
    getFrutas();
   }, []);

  
  return (
    <div className="home-container">
      <h2>Frutas</h2>
      <div>
     
      </div>
      <div className="cardsList-container">
        {frutas.map((elemento) => {
          return (
            <Card key={elemento._id} name={elemento.nome} image={elemento.foto} description={elemento.descricao} />
          );
        })}
      </div>
    </div>
  );
 
};



export default Home;
