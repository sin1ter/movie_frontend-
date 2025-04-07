import './css/App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Favourite from './pages/Favourite'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favourites' element={<Favourite />} />
        </Routes>
      </main>
    </div>
  );
}

export default App
