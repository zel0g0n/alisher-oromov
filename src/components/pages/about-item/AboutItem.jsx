import './AboutItem.scss'
const AboutItem = ({data}) => {
  
  return (
    <div className='a-item a-item-light'>
      <p className="a-title">
        {data.title}
      </p>
      <p className="a-descr">
        {data.descr}
      </p>
    </div>
  )
}

export default AboutItem