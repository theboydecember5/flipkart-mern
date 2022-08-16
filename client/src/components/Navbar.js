import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { signout } from '../redux/actions/auth.actions'
import './navbar.css'

const Navbar = () => {

    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const logout = () => {
        dispatch(signout())
    }

    return (

        <header style={{ zIndex: 1 }}>
            <div className="menu" >
                <img alt="" width="30" />
            </div>

            <div className="logo" style={{ zIndex: 1 }}>
                <h4>
                    <Link to="/" style={{ textDecoration: 'none' }}> Admin Dashboard</Link>
                </h4>
            </div>

            {
                !auth.authenticate ?
                    <ul>
                        <li><Link to="/signin" style={{ textDecoration: 'none' }}>Login</Link></li>
                        <li><Link to="/signup" style={{ textDecoration: 'none' }}> Register</Link></li>
                    </ul>
                    :
                    <ul>
                        <li style={{ cursor: 'pointer' }} onClick={logout}><span>Sign Out</span></li>
                    </ul>
            }

        </header>

    )
}

export default Navbar