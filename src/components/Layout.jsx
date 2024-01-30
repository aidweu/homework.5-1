import { Outlet } from "react-router-dom"

import NavBar from "./NavBar"

const Layout = () => {
  return (
    <div>
        <NavBar/>
        <Outlet/>
        <footer className="footer">
            <span>22.11.24</span>
        </footer>
    </div>
  )
}

export default Layout