import React from "react";
import Rating from "./Rating";
import { useDispatch } from "react-redux";
import {Link} from 'react-router-dom';

export default function Movie({film}) {

const dispatch=useDispatch()

  return (
    <div className="MovieCard Mv">
        <img className='Face front' src={film.Pic} alt={film.Name}/>
        <div className="Face back">
        <h3 className="nm">{film.Name}</h3>
        <p className="info">{film.Type} / {film.Date} / <Rating Rating={film.Rating}/></p>
        <Link to={`/${film.Id}`}>see Details</Link>
        </div>
    </div> 
  );
}