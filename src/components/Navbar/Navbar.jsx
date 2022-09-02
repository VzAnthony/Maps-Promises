import './Navbar.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <header className='header'>
        <nav>
            <ul className='nav-items'>
              <Link to='/'>
                <li>Home</li>
              </Link>

              <Link to='/categoria/silla'>
                <li>Silla</li>
              </Link>

              <Link to='/categoria/tecnologia'>
                <li>Tecnologia</li>
              </Link>

              <Link to='/categoria/MigaDePan'>
                <li>Miga de pan</li>
              </Link>

            </ul>
        </nav>
    </header>
  )
}
