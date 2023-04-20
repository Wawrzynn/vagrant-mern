import './App.css';
import {useState, useEffect} from 'react';
import Axios from 'axios';


function App() {
  const [listOfFilms, setListOfFilms] = useState([]);

  useEffect(() => {
    Axios.get("http://192.168.21.37:3001/films")
    .then((response) => {
      setListOfFilms(response.data)
    })
    .catch(() => {
      console.log("Error")
    })
  }, []);

  return (
    <div className="App">
    <h1>Movies table</h1>
    <table>
      <thead>
        <tr>
          <th>Rank</th>
          <th className='grey'>Name</th>
          <th>Year</th>
          <th className='grey'>Rating</th>
          <th>Genre</th>
          <th className='grey'>Certificate</th>
          <th>Run time</th>
          <th className='grey'>Tagline</th>
          <th>Budget</th>
          <th className='grey'>Box office</th>
          <th>Casts</th>
          <th className='grey'>Directors</th>
        </tr>
      </thead>
      <tbody>
      {listOfFilms.map((val) => {
      return <tr>
        <td>{val.rank}</td>
        <td className='grey'>{val.name}</td>
        <td>{val.year}</td>
        <td className='grey'>{val.rating}</td>
        <td>{val.genre}</td>
        <td className='grey'>{val.certificate}</td>
        <td>{val.run_time}</td>
        <td className='grey'>{val.tagline}</td>
        <td>{val.budget}</td>
        <td className='grey'>{val.box_office}</td>
        <td>{val.casts}</td>
        <td className='grey'>{val.directors}</td>
      </tr>
    })}
      </tbody>
    </table>
    </div>
  );
}

export default App;
