import { useNavigate } from "react-router-dom"
import Logos from './Logo';
import {useState} from 'react';

import '../index.css'
import Dropdown from './Dropdown'



function Home(props) {

  const navigate = useNavigate()
  const {starwarsData} = props;
  const [selectedValue, setSelectedValue] = useState('')

  const dropDownHandleChange = (e)=>{

    setSelectedValue(prevState => e.target.value)

    let idArray = starwarsData.results.filter(movie => movie.title === e.target.value )

    let movieId = idArray[0].episode_id
    
    navigate(`/movie/${movieId}`)
  }

  return (
    <>
      <div>
        <Logos />  
      </div>
      <div>
        <Dropdown label="Select Star Wars Movies"  moviesDetail={starwarsData.results ? starwarsData.results : []} onChange={dropDownHandleChange}  value={selectedValue}/>
      </div>
    </>
  )
}

export default Home