
import axios from 'axios';
import React, { useState } from 'react';
import './AddEmployees.css';
import { useNavigate } from 'react-router-dom';



const AddEmployee = () => {    
    let history = useNavigate();    
    const [Employee, setEmployee] = useState({
        name: "",
        age: "",
        city: "",
        gender: "",
        salary: ""
    });    
    const { name, age, city, gender, salary } = Employee;


    const OnInputChange = (e) => {
        setEmployee({...Employee,[e.target.name] : e.target.value})
    }
    
    const onSubmit = async e => { 
        e.preventDefault();

        await axios.post("http://localhost:3001/employees", Employee);
        history("/employees");
    }
    return (
        <div className='addcontainer'> 
            <h1>Add Employee</h1>
            <form onSubmit={e => onSubmit(e)}>
                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label">Name</label>
                    <input type="text" minLength="3" maxLength="15" className="form-control"
                        placeholder="Enter Name" name="name" value={name} required
                    onChange={e => OnInputChange(e)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Age" className="form-label">Age</label>
                    <input type="number" inputMode="numeric" className="form-control"
                        placeholder="Enter Age" name="age" value={age} required
                        onChange={e => OnInputChange(e)}/>
                </div>
                <div className="mb-3">
                        <label htmlFor="City" className="form-label">City</label>
                    <input type="text" className="form-control"
                        placeholder="Enter City" name="city" value={city} required
                        onChange={e => OnInputChange(e)}/>
                    </div>
                    
                   <div className="mb-3">
                        <label htmlFor="Gender" className="form-label">Gender</label>
                    <input type="text" className="form-control"
                        placeholder="Enter Gender" name="gender" value={gender} required
                        onChange={e => OnInputChange(e)}/>
                  </div>
                  <div className="mb-3">
                        <label htmlFor="Salary" className="form-label">Salary</label>
                    <input type="number" className="form-control"
                        placeholder="Enter Salary" name="salary" value={salary} required
                        onChange={e => OnInputChange(e)}/>
                    </div>
                    <button  className="btn btn-primary btn-block">Submit</button>
                </form>
        </div>
  );
}

export default AddEmployee;
