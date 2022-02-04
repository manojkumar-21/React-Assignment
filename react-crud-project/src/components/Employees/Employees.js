import React, {useState , useEffect} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import './Employees.css';

const Employees = () => {
  const [employees, setEmployees] = useState([]);
    useEffect( () => { 
      loademployees()
    }, [])
  
  const loademployees = async () => { 
    const result = await axios.get("http://localhost:3001/employees");
    console.log(result)
    setEmployees(result.data)
  }
  
  const deleteEmployee = async id => { 
    await axios.delete(`http://localhost:3001/employees/${id}`)
    loademployees();

  }

    return (
      <div className="container">
        <div className="btn-add">
          <Link className='btn btn-outline-primary ml-auto' to="/add">Add Employees</Link>
        </div>
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">City</th>
                <th scope="col">Gender</th>
              <th scope="col">Salary</th>
              <th scope="col">Action</th>
              </tr>
          </thead>
          <tbody>
                    {
                      employees.map((employee, index) => (                
                          <tr key={employee.id}>
                            <th scope="row">{ employee.id}</th>
                              <td>{employee.name}</td>
                              <td>{employee.age }</td>
                              <td>{employee.city }</td>
                              <td>{employee.gender}</td>
                              <td>{employee.salary}</td>
                            <td>
                            <Link to={`/edit/${employee.id}`} className="btn btn-primary" >Edit</Link>
                            <Link to="" className=" btn btn-danger" onClick={() => deleteEmployee(employee.id)}>Delete</Link>                          
                            </td>
                          </tr>                
                      ))
                    }
                  </tbody>
                  </table>
                </div>
            )
        }

export default Employees;
