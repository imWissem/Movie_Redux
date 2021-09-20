import MovieList from "./components/MovieList";
import Header from "./components/Header";
import MovieCard from "./components/MovieCard" ;
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {

  return (
    <div className="App">
      <Router>
      <Header/>

      <Route exact path='/' >
      <MovieList/> 
      </Route>

      <Route path='/:ID' >
        <MovieCard/>
      </Route>

      </Router>
    </div>
  );
}

export default App;
