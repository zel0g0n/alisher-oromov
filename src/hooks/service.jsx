import { useHttp } from "./useHttp"
const tgToken = '8592130685:AAE4MUchEhyV6rAMoI8A4XP8sFwhHq33ce4'
const chatID = 8484522203
export const useService = () => {
  const _baseURL = 'http://localhost:3000'

  const request = useHttp()

  const getAboutData = async() => {
    const data = await request(`${_baseURL}/about`)
    return data
  } 
  const getSkillsData = async () => {
    const data = await request(`${_baseURL}/skills`)
    return data
  }
  const getProjectsData = async () => {
    const data = await request(`${_baseURL}/projectDatas`)
    return data
  }
  const getContactData = async () => {
    const data = await request(`${_baseURL}/contactData`)
    return await data
  }

  function dataExchange(data) {
  return JSON.stringify({
    chat_id: chatID,
    text: `Ariz beruvchi:  ${data.name + " " + data.lastname}.\nTelefon raqam:  ${data.phone}.\nXabar: ${data.msg}
    `
  })

}
  const sendContactRequest = async (data) => {
    fetch(`https://api.telegram.org/bot${tgToken}/sendMessage`, {
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: dataExchange(data)
    })
    .then(res => res.json())
    .catch(err => console.log(err))
  }



  return {getAboutData,getSkillsData,getProjectsData, sendContactRequest, getContactData}
}



