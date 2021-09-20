import Rating from "./Rating";
import { useDispatch } from "react-redux";
import { search_name } from "../redux/action";
const Search = () => {
    const dispatch=useDispatch()
    const searchHandler=(e)=>{
        dispatch(search_name((e.target.value) )) 
      
  }
    return (
    <div className="Search">
        <div className="SchByName">
            <input 
                type="text" 
                placeholder="enter Name"
                onChange={searchHandler}
            />
        </div>
        <div ClassName="SchByRate"> 
        <Rating/>
        </div>
    </div>

      );
}
 
export default Search;