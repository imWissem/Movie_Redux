import {FaStar} from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { search_rate } from '../redux/action'

export default function Rating ({Rating}){
  
  const dispatch=useDispatch()

    
  const stars = (x) => {
        let starsArray = [];
        for (let i = 1; i <= 5; i++) {
          if (i <= x) {
            starsArray.push(
              <span key={i} onClick={()=> dispatch(search_rate(i))} >
                <FaStar color="yellow"/>
              </span>
            );
          } else {
            starsArray.push(
              <span key={i} onClick={()=> dispatch(search_rate(i))} >
                <FaStar color="White"/>
              </span>
            );
          }
        }
        return starsArray;
      };
      return <div>{stars(Rating)}</div>;
    };