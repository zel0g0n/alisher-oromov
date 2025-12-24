import React, { useContext, useEffect } from 'react'
import { useService } from '../../../hooks/service'
import { appContext } from '../../../context/appContext'
import AboutItem from '../about-item/AboutItem'
import AboutChild from '../about-child/AboutChild'
import './About.scss'
import ErrorCatcher from '../../../methods/Methods'
const About = () => {
  const {getAboutData} = useService()
  const {state,dispatch} = useContext(appContext)
  
  useEffect(() => {
    let ignore = true
    const get = async () => {
      const data = await getAboutData()
      if(!ignore) {
        dispatch({type: 'about',payload: data})
      }
    }
    get()

    return () => {ignore=false}
  },[])
  

  return (
    <div id='about' className={`about ${state.theme?'about-light':''} app-item`}>
      <h4 className={`title-nav-item ${state.theme?"light-nav":''}`}>About Me</h4>
      <p className={`descr-nav-item ${state.theme?"light-nav":''}`}>
        Get to know more about my journey and passion for technology
      </p>
      <div className="about__item">
        {
          state.about ? (
            <>
            <div className="about__item-features">
              {(state.about)?(
                state.about.aboutMain.map(item  => (
                  <AboutItem key={item.id} data={item}/>
                ))
              ):1}
            </div>
            <div className="about__item-indicator">
              {
                state.about.aboutAdv.map(
                  item => (
                    <AboutChild key={item.id} data={item}/>
                  )
                )
              }
            </div>
            </>
          ): (
            ''
          )
        }
        
      </div>
    </div>
  )
}

export default About