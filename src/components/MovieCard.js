import React from 'react';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
export default function MovieCard () {
    const dispatch=useDispatch()
    const Movies = useSelector(state => state.Movies)
    const {ID}=useParams();
    return ( 
        <div className="MovieDetails"> 
        <div>
            <img src={Movies.find(film=> film.Id===ID).Pic} />
        </div><div className="DETAIL">
            <h1>{Movies.find(film=> film.Id===ID).Name}</h1>
            <p> This {Movies.find(film=> film.Id===ID).Type} Movie Was Made in " 
            {Movies.find(film=> film.Id===ID).Date}" </p>
            {Movies.find(film=> film.Id===ID).Description}
            <iframe 
                src={Movies.find(film=> film.Id===ID).Trailer} 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
            <Link to={`/`}>
            <h3 className="gohome">Go To Home Page !!</h3>
            </Link>
         </div>
        </div>
     );
}
