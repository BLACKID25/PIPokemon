import React from "react";

import FilterAttack from "../Filter/Filter";
import Search from "../SearchBar/SearchBar"
import Filtername from "../Filter/filtername";
import Filter2 from "../Filter/Filter2";
import { Link } from "react-router-dom";
import "./NavBarr.css";

function Navbar({ onSearch }) {
  return (
    <div className="navbar">
      <Filter2 className="navbar-item" />
      <Filtername className="navbar-item" />
      <FilterAttack className="navbar-item" />
      <Search onSearch={onSearch} className="navbar-item" />
      <Link to="/create" className="create-button navbar-item">
        Crear
      </Link>
    </div>
  );
}

export default Navbar;