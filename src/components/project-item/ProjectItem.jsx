import './ProjectItem.scss'

const ProjectItem = ({data}) => {
  return (
    <div className='project__item'>
      <div className="project__item-block">
        {
          data.image?(
            <>
              <p className="project__item-block--type">{data.type}</p>
              <img src={data.image} alt="project-image" className="project__item-img" />
            </>
          ):(
            <>
              <p className="project__item-type">Jarayonda</p>
              <p className="project__item-alt">{data.title}</p>
            </>
          )
        }
      </div>
      <div className="project__item-info">
        <p className="project__item-info--name">{data.title}</p>
        <p className="project__item-info--descr">{data.descr}</p>
        <ul className="project__item-info--skill">
          {
            data.technologies.map(
              item => (
                <li key={item} className="project__item-info--skill--item">{item}</li>
              )
            )
          }
        </ul>
      </div>
    </div>
  )
}

export default ProjectItem