
import { Routes } from 'react-router'
import './App.scss'
import Header from '../header/Header'
import { useReducer } from 'react'
import { appContext } from '../../context/appContext'
import { initialState, reducer } from '../../context/appReducer'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Skill from '../pages/skill/Skill'
import Projects from '../pages/projects/Projects'
import Contact from '../pages/contact/Contact'
import Footer from '../pages/footer/Footer'

function App() {
  const {Provider} = appContext
  const [state, dispatch] = useReducer(reducer,initialState)
  return (
    <Provider value={{state,dispatch}}>
      <div className='app'>
        <Header/>
        <Home/>
        <About/>
        <Skill/>
        <Projects/>
        <Contact/>
        <Footer/>
        {/* <Routes>


        </Routes> */}
      </div>
    </Provider>
  )
}

export default App
