import './App.scss'
import { BrowserRouter, NavLink } from 'react-router-dom'
import RoutesMod from './RoutesMod'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        fetchOnMount: true,
        staleTime: 5000,
      }
    }
  })
  return (
    <BrowserRouter>
      <nav className="navbar bg-primary .bg-gradient text-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1 text-light">SW Movies</span>
          <div>
            <NavLink to="/" className={({isActive}) => isActive ? 'active text-light' : 'text-light'}>Home</NavLink>
            <NavLink to="/posts" className={({isActive}) => isActive ? 'active ms-3 text-light' : 'ms-3 text-light'}>Posts</NavLink>
            <NavLink to="/zustand" className={({isActive}) => isActive ? 'active ms-3 text-light' : 'ms-3 text-light'}>ZuStand</NavLink>
            </div>
        </div>
      </nav>
      <QueryClientProvider client={queryClient}>
        <RoutesMod />
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App
