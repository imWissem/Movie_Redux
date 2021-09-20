import { useState } from "react";
import { useDispatch } from "react-redux";
import { addHandler} from "../redux/action";
import Modal from "react-modal";
import { FaPlus } from "react-icons/fa";
export default function AddMovie() {
  const [Pic, setPic] = useState('')
  const [Name, setName] = useState('')
  const [Type, setType] = useState('')
  const [Date, setDate] = useState('')
  const [Description, setDescription] = useState('')
  const [Rating, setRating] = useState('')
  const [Trailer, setTrailer] = useState('')
  const [show, setshow] = useState(false);
  const toggle = () => {
    setshow(!show);
  };
  
  const dispatch = useDispatch();

  const addMovies = (film) => {
    film.preventDefault()
    if (!Name) {
      alert('Please add a Movie')
      return }
    dispatch(
      addHandler({
        Id: Math.floor(Math.random()*10000)+1,
        Pic: Pic,
        Name: Name,
        Date: Date,
        Type: Type,
        Rating: Rating,
        Description: Description, 
        Trailer: Trailer,
      })
    );
    setPic('') ;
    setName('') ;
    setType('');
    setDate('');
    setDescription('');
    setRating('');
    setTrailer('');
    toggle();
  };
  Modal.setAppElement("#root");
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <div>
      <FaPlus color="White" onClick={toggle}/>
    <Modal isOpen={show} style={customStyles}>
    <div className="AddForm">
    <div className="right">  
      <label>Poster :</label>
      <input 
          Type='url'
          placeholder='poster_link'
          value={Pic}
          onChange={(e) => setPic(e.target.value)}
      />

      <label>Name :</label>
      <input 
          Type='text'
          placeholder='Movie_name'
          value={Name}
          onChange={(e) => setName(e.target.value)}
      />

      <label>Type :</label>
      <input 
          Type='text'
          placeholder='Movie_type'
          value={Type}
          onChange={(e) => setType(e.target.value)}
      />

      <label>Date :</label>
      <input 
          Type='text'
          placeholder='Date'
          value={Date}
          onChange={(e) => setDate(e.target.value)}
      />
</div><div className="left">
      <label>Description :</label>
      <input 
          Type='text'
          placeholder='Movie_Description'
          value={Description}
          onChange={(e) => setDescription(e.target.value)}
      />

      <label>Rating</label>
      <input 
          Type='text'
          placeholder='Movie_Rating'
          value={Rating}
          onChange={(e) => setRating(e.target.value)}
      />

      <label>Trailer</label>
      <input 
          Type='url'
          placeholder='Trailer_link'
          value={Trailer}
          onChange={(e) => setTrailer(e.target.value)}
      />
      <button onClick={addMovies} className='btn btn-block'>Add</button>
      <button onClick={toggle} className='btn btn-block'>reset</button>
</div>
</div>
</Modal>
  </div>
  );
}