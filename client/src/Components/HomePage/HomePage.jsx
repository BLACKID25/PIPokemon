import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon, getTypes } from "../../Redux/Actions"
import Navbar from "../NavBar/NavBarr";
import Cards from "../Cards/Cards";
import Pagination from "../Pagination/Pagintaion";
import "./HomePage.css";

function Home() {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.allPokemon);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokeXPage] = useState(12);
  const indexOfLastPokemon = currentPage * pokeXPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokeXPage;
  const currentPokemons = allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);
  const totalPages = Math.ceil(allPokemons.length / pokeXPage);

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const goToFirstPage = () => {
    setCurrentPage(1);
  };

  const goToLastPage = () => {
    setCurrentPage(totalPages);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [setCurrentPage, allPokemons.length]);

  useEffect(() => {
    dispatch(getPokemon());
    dispatch(getTypes());
  }, [dispatch]);

  return (
    <div>
      <div className="home">
        <Navbar />
        <div className="content">
          
          <Cards currentPokemons={currentPokemons} />
          <Pagination
            pagination={pagination}
            allPokemons={allPokemons.length}
            pokeXPage={pokeXPage}
            page={currentPage}
          />
          <div className="pagination-buttons">
            <button
              className="pagination-button"
              onClick={goToFirstPage}
              disabled={currentPage === 1}
            >
              Inicio
            </button>
            <button
              className="pagination-button"
              onClick={goToLastPage}
              disabled={currentPage === totalPages}
            >
             Siguiente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Home;
