import { useContext, useEffect } from 'react'
import './Contact.scss'
import { appContext } from '../../../context/appContext'
import { useService } from '../../../hooks/service'

const Contact = () => {

  const {state,dispatch} = useContext(appContext)
  const {getContactData} = useService()

  useEffect(() => {
    let ignore = true

    const get = async () => {
      if(ignore) {
        try {
          const data = await getContactData()
          dispatch({type: 'contact', payload: data})
        }catch(error) {
          throw new Error(error)
        }finally {
          ignore = false
        }
      }
    }
    
    get()

  },[])


  return (
    <div className='contact'>
      <h4 className="title-nav-item">Contact with me</h4>
      <p className="descr-nav-item">Let's discuss your project</p>
      <div className="contact__item">
        <div className="contact__item-sm">
          <p className="contact__item-sm--title">Contact information</p>
          <div className="social">
            {
              state.contactData ? (
                <ul>
                  {state.contactData.map(item => (
                    <li key={item.name}>
                      <a href={item.link}>
                        <div className="icon">
                          <i className={item.icon + " special"}></i>
                        </div>
                        <p>{item.content}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              ):(
                "Loading..."
              )
            }
          </div>
        </div>
        <div className="contact__item-sms">
          <form action="">
            <div className="name">
              <label htmlFor="">Ismingiz</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="lname">
              <label htmlFor="">Familiyangiz</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="number">
              <label htmlFor="">Raqamingiz</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="msg">
              <label htmlFor="">Xabaringiz</label>
              <textarea   id="name" />
            </div>
            <button className="form-submit">
              SEND MESSAGE 
              <i className='fa-solid fa-paper-plane'></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact