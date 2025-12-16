import React from 'react'
import './Home.scss'
const Home = () => {
  return (
    <div className='home'>
      <div className="home__info">
        <h1 className="title">Hello bro, I'm <span className='special'>Oromov Alisher</span></h1>
        <p className="paragraph">Fullstack JavaScript Developer & Problem Solver</p>
        <p className="descr">
          I am a developer with 1+ years of experience in frontend and 1 year in backend. I am constantly working on optimizing projects and writing quality code. I enjoy working in a team environment and am always ready for new challenges.
        </p>
        <div className="home__info-item">
          <a href="#" className="cv btn btn-secondary">
            <img src="/download.png" alt="download" />
            <span>CV</span>
            </a>
          <button className='btn btn-primary'>Contact Me</button>
        </div>

      </div>
      <div className="home__img">
        <img src="/me.jpg" alt="image" />
      </div>
    </div>
  )
}

export default Home