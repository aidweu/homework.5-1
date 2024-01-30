import { NavLink } from "react-router-dom"
import  "../App.css";




const NavBar = () => {
  return (
    <nav className='tags'>
        <ul className="posts" style={{display:'flex', gap: '80px'}}>
            <li>
                <NavLink className='activeMenu' to="/">Home</NavLink>
            </li>
            <li>
                <NavLink className='activeMenu' to="/about">About us</NavLink>
            </li>
            <li>
                <NavLink className='activeMenu' to="/posts">Posts</NavLink>
            </li>
            <li>
                <NavLink className='activeMenu' to="/postPush">PostsPush</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar