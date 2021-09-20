import { useSelector, useDispatch } from "react-redux";
import Movie from "./Movie";
import { search_name, search_rate } from "../redux/action";
import { useEffect } from "react";
import Rating from "./Rating";
export default function MovieList() {
    
const dispatch=useDispatch()
const Movies = useSelector(state => state.Movies)
const search=useSelector(state=>state.searchName)
const rating=useSelector(state=>state.searchRate)

useEffect(()=>{
  dispatch(search_name())
},[search,Movies])
useEffect(()=>{
  dispatch(search_rate())
},[rating,Movies])
    return ( 
        <div className="Movies">
          {
            Movies &&( Movies.filter((film) => film.Name.toLowerCase().includes("THE".toLowerCase().trim())&& film.Rating >= 2)
             .map((film)=>(<Movie Key={film.Id} film={film}/>)))
          }
        </div>
     );
}
 