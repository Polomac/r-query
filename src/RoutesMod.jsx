import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Intro from './pages/Intro'

const RoutesMod = () => {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/movies" element={ <Movies /> } />
      <Route path="/intro/:id" element={ <Intro /> } />
    </Routes>
  )
}

export default RoutesMod