import EmployeeListItem from "./EmployeeListItem"

const EmployeeList = ({filtedData}) => {
  return (
        // mapped out version of Employee List item
        <div>{ filtedData && filtedData.map((data) => {
            
            console.log(data)

          return (
         <EmployeeListItem key={data.id} data={data}/>
          )
          }
          )
          }
          </div>
  )
}

export default EmployeeList