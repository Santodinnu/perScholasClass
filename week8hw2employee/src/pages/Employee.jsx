import React from 'react'
import  {useEffect, useState} from "react"
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


export default function Employee () {

    const [data, setData] = useState (null)
    let { first_name } = useParams()
    console.log(first_name)

    
  


    useEffect(() => {
    

        async function getData () {
          
        try{
        const response = await fetch (`https://reqres.in/api/users?page=2`)
        const parstResponse = await response.json()
        setData(parstResponse.data)
        console.log(parstResponse.data)
      
            const person = parstResponse.data.filter((data) => {
                if (data.first_name == first_name ) {
                    return true
                } 
            })
            console.log(person)
            setData(person)
        } catch(error) {
          console.log(error)
        }
    
    
      }
      getData ()
      console.log(data)
    }, [])
    
  return (
    <div>
        {data && 
        <div>
        
        <h1>Employee</h1>
        <br />
        <br />
        <img src={data[0].avatar}/>
        <h2>{first_name} {data[0].last_name}</h2>
        <h2>Email:  {data[0].email}</h2>
        <Link to={"/"}>
        <h2>Employee List</h2>
        </Link>   
        </div> }
   
    </div>
  )
}
