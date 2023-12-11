
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Currencies from './pages/Currencies'
import Main from './pages/Main'
import Price from './pages/Price'
import Nav from './components/Nav'


function App() {
  

  return (
    <div className='App'>
    <Nav />

    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/Currencies' element={<Currencies />} />
      <Route path='/Price/:symbol' element={<Price />} />
    </Routes>
    </div>
  )
}


export default App
