import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import employeeService from "../services/employeeService";

const AddEmployee = () => {

    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [department, setDepartment] = useState("");
    const navigate = useNavigate();
    const { employeeId } = useParams();


    useEffect(() => {
        if (employeeId) {

            employeeService.getEmployee(employeeId)
                .then(employee => {
                    setName(employee.data.name);
                    setLocation(employee.data.location);
                    setDepartment(employee.data.department);
                }
                )
                .catch(error => {
                    console.error("Something went wrong!", error)
                }

                )
        }
        else {
            console.error("Employee Id does not exist")
        }



        if (employeeId) {
            //update
            const employee = { employeeId, name, location, department }
            employeeService.putEmployee(employee)
                .then(
                    response => {
                        console.log("Updated Employee!", response.data)
                        navigate("/myfirstreact/employees")
                    }
                )
                .catch(
                    error => {
                        console.error("Something went Wrong! SADGE!")
                    }
                )
        }


        else {
            const employee = { name, location, department }
            employeeService.postEmployee(employee)
                .then(
                    response => {
                        console.log("Added new Employee!", response.data)
                        navigate("/myfirstreact/employees")
                    }
                )
                .catch(
                    error => {
                        console.error("Something went Wrong! SADGE!")
                    }
                )
        }
    }
    )
    const saveEmployee = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <h3>Add/Edit Employee</h3>
            <form className="needs-validation" noValidate>
                <div className="mb-3">
                    <label for="nameField" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nameField"
                        value={name}
                        placeholder="Add employee name"
                        onChange={
                            (e) => (
                                setName(e.target.value)
                            )
                        }
                    />
                </div>
                <div className="mb-3">
                    <label for="locationField" className="form-label">Location</label>
                    <input
                        type="text"
                        className="form-control"
                        id="locationField"
                        value={location}
                        placeholder="Add employee location"
                        onChange={
                            (e) => {
                                setLocation(e.target.value)
                            }
                        }
                    />
                </div>
                <div className="mb-3">
                    <label for="departmentField" className="form-label">Department</label>
                    <input
                        type="text"
                        className="form-control"
                        id="departmentField"
                        value={department}
                        placeholder="Add employee department"
                        onChange={
                            (e) => {
                                setDepartment(e.target.value)
                            }
                        }
                    />
                </div>
                <button type="submit" className="btn btn-primary" onClick={(e) => saveEmployee(e)}>Submit!</button>
            </form>
        </div>
    )



}
export default AddEmployee