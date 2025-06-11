import React, { Children } from 'react'

export const container = ({children}) => {
  return (
     <div className="container p-4 ">
         <div className="col-md-4 offset-md-4">
            {children}
         </div>
   
         </div>
  )
}
