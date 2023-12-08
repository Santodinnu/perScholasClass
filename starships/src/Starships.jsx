import React from 'react'

const Starships = ({data}) => {
 
    return (
    <div className="container">
       {data.map((item, index)  => {
      return (

        <div  key={index} className='ship'>
                    {item.name}
          </div>
      )

    })} 

   </div>
  )
}

export default Starships