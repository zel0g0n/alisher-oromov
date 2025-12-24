import { tgToken,chatID } from "../.private"
import { data } from "../constants/constants"
export const useService = () => {
  const _baseURL = 'http://localhost:3000'


  const getAboutData = async() => {
    return data.about
  } 
  const getSkillsData = async () => {
    return data.skills
  }
  const getProjectsData = async () => {
    return data.projectDatas
  }
  const getContactData = async () => {
    return  data.contactData
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



