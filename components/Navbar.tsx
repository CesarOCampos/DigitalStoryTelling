import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import Link from 'next/link'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'

const NavbarComp = () => {
  const { user, logout } = useAuth()
  const router = useRouter()

return (
    <div className='nav-background'>
      <Nav className="me-aut">
      {user ? (
        
        <div className='nav-sections'>
          <div className='justify-left nav-spacing'>
          <Link href="/" passHref>
          <a className="nav-spacing mr-6 "><button className='navbar-buttons font-bold text-lg text-black'>Home</button></a>
          </Link>
        </div>
        
          <Link href="/dashboard" passHref>
          <a className="nav-spacing mr-6"><button className='navbar-buttons font-bold text-lg text-black'>Dashboard</button></a>
          </Link>
          <Nav.Link className='nav-spacing mr-6'
            onClick={() => {
              logout()
              router.push('/')
            }}>
            <button className='navbar-buttons font-bold text-lg text-black'>
            Logout
            </button>
          </Nav.Link>
        </div>
        ) : (
          <div className='nav-sections'>
            <Link href="/signup" passHref>
            <a className="nav-spacing mr-2"><button className='navbar-buttons font-bold text-lg text-black'>Register</button></a>
            </Link>
            <Link href="/login" passHref>
            <a className="nav-spacing mr-4"><button className='navbar-buttons font-bold text-lg text-black'>Login</button></a>
            </Link>
          </div>
        )}
      </Nav>
    </div>
  )
}

export default NavbarComp