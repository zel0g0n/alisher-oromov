import { useContext, useEffect } from 'react'
import './Projects.scss'
import { appContext } from '../../../context/appContext'
import { useService } from '../../../hooks/service'
import ProjectItem from '../../project-item/ProjectItem'

const Projects = () => {
  const {state,dispatch} = useContext(appContext)
  const {getProjectsData} = useService()

  useEffect(() => {
    let ignore = true
    const get  = async () => {
      try {
        if(ignore) {
          const data = await getProjectsData()
          dispatch({type: 'projects', payload: data})
        }
      }catch(error) {
        throw new Error(error)
      }finally {
        ignore = false
      }
      
    }
    get()
  },[])

  return (
    <div id='projects' className={`projects ${state.theme?'project-light':''}`}>
      <h4 className={`title-nav-item ${state.theme?"light-nav":''}`}>Projects and StartUPs</h4>
      <p className={`descr-nav-item ${state.theme?"light-nav":''}`}>StartUp projects and projects completed through freelancing</p>
      <div className='projects__list'>
        {state.projects ? (
          state.projects.map(item => (
            <ProjectItem key={item.id} data={item}/>
          ))
        ):('Loading...')}
      </div>
    </div>
  )
}

export default Projects