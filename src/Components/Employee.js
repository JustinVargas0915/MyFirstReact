import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import employeeService from "../services/employeeService"

const Employee = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        refreshEmployeeTable();
    }
    )

    const refreshEmployeeTable = () => {
        employeeService.getEmployees()
            .then(
                response => {
                    setEmployees(response.data)
                }
            )
            .catch(
                () =>
                    console.log("Something went rwong!")
            )
    }


    const deleteEmployee = (employeeId) => {
        employeeService.deleteEmployee(employeeId)
            .then(
                response => {
                    console.log("Successfully Deleted!")
                    refreshEmployeeTable();
                }
            )
            .catch(
                error => {
                    console.error("Something went wrong!")
                }
            )
    }
    return (
        <div className="container">
            <h3>List of Employees</h3>
            <div>
                <table className="table table-hover table-light table-striped" >
                    <thead>
                        <tr className="table-info">
                            <td>Name</td>
                            <td>Location</td>
                            <td>Department</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map(
                                employee => (
                                    <tr>
                                        <td>{employee.name}</td>
                                        <td>{employee.location}</td>
                                        <td>{employee.department}</td>
                                        <td>
                                            <div className="d-grid gap-2 d-md-block">
                                                <Link className="btn btn-primary" to={`/edit/${employee.employeeId}`}>Update</Link>
                                                <button className="btn btn-danger" onClick={(e) => deleteEmployee(employee.employeeId)}>Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            )

                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Employee