import { Link, NavLink } from 'react-router'
import { navbarData } from '../../constants/constants'
import './Header.scss'
import { useContext, useState } from 'react'
import { appContext } from '../../context/appContext'
const Header = () => {
  const {state,dispatch} = useContext(appContext)
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(prev => !prev)
    console.log(modal)
  }

  const toggleActiveNav = ({isActive}) => isActive?'active-nav':''
  const toggleTheme = () => {
    dispatch({type: 'theme',payload: !state.theme})
  }
  return (
    <div className={`header ${state.theme?'header-light':''}`}>
      <Link to={'/'}>
        <p className='special'>Alisher</p>
      </Link>
      <nav className={`${modal?'open-modal':''} ${state.theme?'open-modal-light':''}`}>
        <ul>
          {
              navbarData.map(item => (
                <li key={item.id}>
                  <a href={item.path} className={toggleActiveNav}  to={item.path}>
                    {item.title}
                  </a>
                </li>
              ))
          }
        </ul>
      </nav>
      <div className='btns'>
        <button onClick={toggleTheme} className="theme">
          {(state.theme)?'🌙':'☀️'}
        </button>
        <button onClick={toggleModal} className='modal-btn'>
          {
            !modal ? (
              <i className="fa-solid fa-bars"></i>
            ): (
              <i className="fa-solid fa-xmark"></i>
            )
          }
          
        </button>
      </div>
    </div>
  )
}

export default Header