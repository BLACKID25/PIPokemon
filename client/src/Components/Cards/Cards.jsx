import React from "react";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import "./Cards.css";
import Loading from "../Loading/Loading"


function Cards({ currentPokemons }) {
  return (
    <>
      {currentPokemons.length > 0 ?
        <div className="cards-container">
          {currentPokemons?.map((pokemon) => (
            <Link to={`/home/${pokemon.id}`} key={pokemon.id} className="card-link">
              <Card pokemon={pokemon} />
            </Link>
          ))}
        </div>
        : <Loading />
      }
    </>
  );
}

export default Cards;