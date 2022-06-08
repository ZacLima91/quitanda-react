import "./style.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <div className="card_data">

      <h3>{props.name}</h3>
      
        <p>{props.description}</p>
      </div>
      <img className="card-foto" width="100px" src={props.image} alt={`Foto de ${props.name}`} />

    </div>
  );
};

export default Card;
