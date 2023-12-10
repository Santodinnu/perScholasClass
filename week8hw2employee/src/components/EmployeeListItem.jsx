import React from 'react'
import { Link } from 'react-router-dom'

const EmployeeListItem = ({data}) => {
    const {first_name , id} = data
  return (
    <div>
    <ul>
      <li>
        <p>
          {data.first_name} {data.last_name}{" "}
        </p>
        <p>{data.email}</p>
        <img src={data.avatar} alt="picture" />
      </li>
    </ul>
    <Link key={id} to={"/employee/" + first_name}>
      <h2>
        {data.first_name} {data.last_name}
      </h2>
    </Link>
  </div>
  )
}

export default EmployeeListItem
