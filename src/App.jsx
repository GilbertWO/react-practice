import { Routes, Route, NavLink } from 'react-router'
import TicTacToe from './pages/TicTacToe.jsx'
import PostsList from './pages/PostsList.jsx'

export default function App() {
  return (
    <>
      <nav>
        <NavLink to="/">Game</NavLink> <NavLink to="/posts">Posts</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<TicTacToe />} />
        <Route path="/posts" element={<PostsList />} />
      </Routes>
    </>
  )
}