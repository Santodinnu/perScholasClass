
import { useState, useEffect } from 'react'
import './App.css'
import Starships from './Starships'

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const starshipsData = await getAllStarships();
        setStarships(starshipsData);
      } catch (error) {
        console.error('Error fetching starships:', error);
      }
    };

    fetchStarships();
  }, []);

  async function getAllStarships(){
    
    const response = await fetch(`https://swapi.dev/api/starships/`)
    const data = await response.json()
    console.log(data)
    return data
  }

  return (
    <div>
        <h1>STAR WARS STARSHIPS</h1>
        <div className="App">
          {starships.map((starship) => (
           <StarshipCard key={starship.name} name={starship.name} />
    ))}
      </div>
    </div>
  )
}

export default App


function App() {

  const [data, setData] = useState ([])
  
 
  useEffect(() => {
    

    async function getData () {
      
      const response = await fetch (`https://swapi.dev/api/starships/?format=json`)
      const data = await response.json()
      console.log(data)
      setData(data.results)
    
    
    
    }
    getData()

  },  [])

 

 

  return (
    <div>
    <h1>Star  Wars Ships</h1>

   <Starships data={data}/>
   </div>
  )
}

export default App