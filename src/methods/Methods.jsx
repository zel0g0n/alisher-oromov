import React, { Children } from 'react'

const ErrorCatcher = (stateValue) => {
  console.log
  console.log(stateValue)
  if(stateValue) {
    return (
      <>
        {Children}
      </>
  )
  }else {
    return <>Error</>
  }
  
}

export default ErrorCatcher