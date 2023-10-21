import React, {useState} from "react"
import { useDispatch } from "react-redux"
import { getByName, getPokemon } from "../../Redux/Actions"
import "./SearchBar.css"

 function SearchBar (){

    const dispatch = useDispatch()
    
    const [inp, set_inp] = useState("")

    const handleChange = (e) =>{
        if(e.target.value===""){
            dispatch(getPokemon)
        }
        set_inp(e.target.value)
    }
    
    const handSearch=()=>{
        dispatch(getByName(inp))
    }


    const handleClick = (e) => {
        e.preventDefault()
    if (inp.length !==0){
        handSearch()
      }

    }

    return (
        <div className="searchForm">
            <form onSubmit={handleClick}>
                <input 
                className="input"
                type="text" 
                value={inp} 
                placeholder="Ingrese un pokémon "
                onChange={handleChange}
                />
                <button
                type='submit'
                className="searchButton">
                    Atrapar Ya
                </button>
            </form>
        </div>
    )
}

export default SearchBar