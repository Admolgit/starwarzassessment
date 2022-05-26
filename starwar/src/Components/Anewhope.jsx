import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import axios from 'axios';

function Anewhope(props) {

  const { movieId } = useParams('movieId');

  const {starwarsData} = props;

  const [charResolved, setCharResolved] = useState([])
  const [retrive, setRetrive] = useState([])

  let selectedMovie = starwarsData.results?.filter(movie => movie.episode_id === +movieId);

  const charstate = selectedMovie && selectedMovie[0].characters;

  useEffect(()=>{
    console.log(charstate);
    let charactersPromise = charstate && charstate.map(character =>{
  
        let response = axios.get(character);

      return response

    })

    setCharResolved(charactersPromise)

  },[charstate])

  useEffect(()=>{
    console.log(charstate, charResolved);
    if(charResolved && charResolved.length > 0) {
      async function resolvedData(charResolved){
        let dataSolved = await Promise.allSettled(charResolved);
      
        let dataOutput = dataSolved && dataSolved.map(data =>{ return data.value.data})
        setRetrive(dataOutput);
      }
    
      resolvedData(charResolved)
    }
  
  },[charResolved])


  return (
    <div>   
      <table id="table">
        <thead className="table-header">
          <tr className="table-row">
            <th>Name</th>
            <th>Gender</th>
            <th>Height</th>
          </tr>
        </thead>
        <tbody>
          {retrive.length > 0 && retrive.map((retriv)=>(<tr key={retriv.name}>
            <td>{retriv?.name ? retriv?.name : "name" }</td>
            <td>{retriv?.gender ? retriv?.gender : "gender"}</td>
            <td>{retriv?.height ? retriv?.height : "height"}</td>
          </tr>))}
        </tbody>
      </table>
    </div>
  )
}

export default Anewhope