
import {Link} from 'react-router-dom';
import {FaHome} from 'react-icons/fa'
import AddMovie from './AddMovie';
import Search from './Search';
export default function Header ({nameSearch,ratingSearch}) {
    
    return ( 
        <div className="Header">
            <h1>MovieApp</h1>
            <Search         
            nameSearch={nameSearch}
            ratingSearch={ratingSearch} />
            <Link to={`/`}>
             <FaHome color="White"/>
            </Link>
            <AddMovie/>
 
        </div>
     );
}