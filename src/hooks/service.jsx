import { useHttp } from "./useHttp"

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

  return {getAboutData,getSkillsData,getProjectsData, getContactData}
}



