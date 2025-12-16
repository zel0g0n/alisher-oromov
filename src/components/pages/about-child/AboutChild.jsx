import './AboutChild.scss'

const AboutChild = ({data}) => {
  return (
    <div className='about__child'>
      <p className="x-title">{data.title}</p>
      <p className="x-text">{data.duration}</p>
    </div>
  )
}

export default AboutChild