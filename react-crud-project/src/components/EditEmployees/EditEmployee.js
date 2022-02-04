
import axios from 'axios';
import React, { useState ,useEffect} from 'react';
import { useNavigate , useParams } from 'react-router-dom';

const EditEmployee = () => {    
    let history = useNavigate()
    const { empid } = useParams();
    
    const [Employee, setEmployee] = useState({});
    const { name, age, city, gender, salary } = Employee;
    
    const OnInputChange = (e) => {
        setEmployee({ ...Employee, [e.target.name]: e.target.value })        
    };
    
    const onUpdate = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3001/employees/${empid}`, Employee)
        history("/employees")
    };

    useEffect(() => {
        getEmployee()
    }, []);

    const getEmployee = async () => { 
        const result = await axios.get(`http://localhost:3001/employees/${empid}`)
        setEmployee(result.data);
    }
    return (            
        <div className='addcontainer'> 
            <h1>Edit Employee</h1>
                <form onSubmit={e => onUpdate(e)}>
                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label">Name</label>
                    <input type="text" minLength="3" maxLength="15" className="form-control"
                        placeholder="Enter Name" name="name" value={name}
                    onChange={e => OnInputChange(e)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Age" className="form-label">Age</label>
                    <input type="number" className="form-control"
                        placeholder="Enter Age" name="age" value={age}
                        onChange={e => OnInputChange(e)}/>
                </div>
                <div className="mb-3">
                        <label htmlFor="City" className="form-label">City</label>
                    <input type="text" className="form-control"
                        placeholder="Enter City" name="city" value={city}
                        onChange={e => OnInputChange(e)}/>
                    </div>
                    
                   <div className="mb-3">
                        <label htmlFor="Gender" className="form-label">Gender</label>
                    <input type="text" className="form-control"
                        placeholder="Enter Gender" name="gender" value={gender}
                        onChange={e => OnInputChange(e)}/>
                  </div>
                  <div className="mb-3">
                        <label htmlFor="Salary" className="form-label">Salary</label>
                    <input type="number" className="form-control"
                        placeholder="Enter Salary" name="salary" value={salary}
                        onChange={e => OnInputChange(e)}/>
                    </div>
                    <button className="btn btn-primary btn-block">Update</button>
                </form>
        </div>
  );
}
export default EditEmployee;

