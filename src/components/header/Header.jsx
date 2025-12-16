import { Link, NavLink } from 'react-router'
import { navbarData } from '../../constants/constants'
import './Header.scss'
import { useContext } from 'react'
import { appContext } from '../../context/appContext'
const Header = () => {
  const {state} = useContext(appContext)
  const toggleActiveNav = ({isActive}) => isActive?'active-nav':''
  
  return (
    <div className='header'>
      <Link to={'/'}>
        <p className='special'>Alisher</p>
      </Link>
      <nav>
        <ul>
          {
              navbarData.map(item => (
                <li key={item.id}>
                  <NavLink className={toggleActiveNav}  to={item.path}>
                    {item.title}
                  </NavLink>
                </li>
              ))
          }
        </ul>
      </nav>
      <button className="theme">
        {/* <span></span>
        <span></span> */}
        {(state.theme !== 'dark')?'🌙':'☀️'}

        
        
      </button>
    </div>
  )
}

export default Header