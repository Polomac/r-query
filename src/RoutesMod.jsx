import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Posts from './pages/Posts'
import Comments from './pages/Comments'
import ZuStand from './pages/ZuStand'

const RoutesMod = () => {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/posts" element={ <Posts /> } />
      <Route path="/comments/:id" element={ <Comments /> } />
      <Route path="/zustand" element={ <ZuStand /> } />
      <Route path="*" element={ <Home /> } />
    </Routes>
  )
}

export default RoutesMod