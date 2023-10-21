import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByOriginAndType } from "../../Redux/Actions"
import "./filter.css";

const FilterByOriginType = () => {
  const [selectedOrigin, setSelectedOrigin] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const allTypes = useSelector((state) => state.types);
  const dispatch = useDispatch();

  const handleOriginChange = (event) => {
    const origin = event.target.value;
    setSelectedOrigin(origin);
  };

  const handleTypeChange = (event) => {
    const type = event.target.value;
    setSelectedType(type);
  };

  useEffect(() => {
    dispatch(filterByOriginAndType(selectedOrigin, selectedType));
  }, [selectedOrigin, selectedType, dispatch]);

    return (
      <>
      <div className='filter'>
        <label>Origin:</label>
        <select onChange={(e) => handleOriginChange(e)} value={selectedOrigin}>
          <option value="all">Todos</option>
          <option value="custom">Custom</option>
          <option value="api">Api</option>
        
        </select>
      </div>
       <div className="filter">
      <label>Types:</label>
      <select onChange={(e) => handleTypeChange(e)} value={selectedType}>
        <option value="all">Limpiar</option>
        {allTypes.map((type) => (
          <option
            name={type.name}
            key={type.id}
            value={type.id}
            
            >
            {type.name.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
   </>
    );
  };


  export default FilterByOriginType
