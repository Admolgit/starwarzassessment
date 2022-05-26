import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {useState, useEffect} from 'react';
import Home from "./Home"
import Anewhope from './Anewhope';

const baseURL = process.env.REACT_APP_STAR_WARS_URL;
export default function Pages() {

  const [ characters, setCharacters ] = useState([])

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        let response = await fetch(baseURL)
        let data = await response.json();
        setCharacters(data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovie()
  }, []);

  
    return (
        <Router> 
            <Routes>
              <Route path='/' element={<Home starwarsData={characters} /> } />
               <Route path={'/movie/:movieId'} element={<Anewhope starwarsData={characters} />} />
            </Routes>
        </Router>
    )
}