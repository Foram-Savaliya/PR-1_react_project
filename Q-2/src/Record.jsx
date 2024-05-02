import React from 'react'

const Record = ({ empData }) => {

  // console.log(empData);

  return (
    <div className="container py-5">
      <h3 className="text-center mb-5 bg-success py-3 text-white">Employee Record</h3>
      <table class="table table-success table-striped" border="4" >
        <thead>
          <tr>
            <th scope="col">Id </th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th scope="col">Degree</th>
            <th scope="col">Salary</th>
            <th scope="col">Department</th>
          </tr>
        </thead>
        <tbody>
          {
              empData.map((val) => {
                return(
                  <tr>
                    <th scope="row">{val.empid}</th>
                    <td>{val.empname}</td>
                    <td>{val.empemail}</td>
                    <td>{val.empphone}</td>
                    <td>{val.empaddress.area} , {val.empaddress.city} , {val.empaddress.state} , {val.empaddress.country}</td>
                    <td>{val.empdeg}</td>
                    <td>{val.empsalary}</td>
                    <td>{val.empdepartment}</td>
                  </tr>
                )
              })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Record