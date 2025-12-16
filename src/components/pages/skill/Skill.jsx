import { useContext, useEffect } from 'react'
import { useService } from '../../../hooks/service'
import './Skill.scss'
import { appContext } from '../../../context/appContext'
const Skill = () => {
  const {state,dispatch} = useContext(appContext)
  const {getSkillsData} = useService()
  useEffect(() => {
    let ignore = true
    const get = async () => {
      try {
        if(ignore) {
          const data = await getSkillsData()
          dispatch({type: 'skills',payload: data})
        }
      }catch(err) {
        throw new Error(err)
      }finally {
        ignore = false
      }
    }

    get()
  },[])
  return (
    <div className='skill'>
      <h4 className="title-nav-item">Skills & Technologies</h4>
      <p className="descr-nav-item">
        Get to know more about my journey and passion for technology
      </p>
      <ul className="skill__list">
        {
          (state.skills)?(
            state.skills.map(item => (
              <li key={item.id} className='skill__list-item'>
                <i style={{color: item.style}} className={item.icon}></i>
                <p className="skill-name">{item.name}</p>
              </li>
            ))
          ):('')
        }
      </ul>
    </div>
  )
}

export default Skill