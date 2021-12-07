import './Nav.scss'
import { Link, NavLink } from 'react-router-dom'
const Nav = () => {

    return (
        <div className="topnav">
            <NavLink activeClassName="active1" exact to="/home">Home</NavLink>
            <NavLink activeClassName="active1" to="/covid">Covid</NavLink>
            <NavLink activeClassName="active1" to="/timer">Timer app</NavLink>
            <NavLink activeClassName="active1" to="/todo">Todo App</NavLink>
        </div >
    )
}

export default Nav