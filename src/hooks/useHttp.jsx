import { useCallback } from "react"


export const useHttp = () => {

  const request = useCallback(async (url) => {
    try {
      const response = await fetch(url)
      if(!response.ok) {
        throw new Error()
      }
      const data = await response.json()
      return data
    } catch(err) {
      console.log(`Error: ${err.message}`)
      throw Error
    }

  },[])

  return request
}