import React, { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import 'bootstrap/dist/css/bootstrap.min.css';

const EmpForm = (props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState();
  const [empList, setEmpList] = useState([]);
  const [btnUpdate, btnUpdate1] = useState(true);
  const [btnAdd, btnAdd1] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  }

  const handleCityChange = (event) => {
    setCity(event.target.value);
  }

  function handleGenderChange1(event) {
    if (event.target.checked) {
      setGender("Male");
    }
  }
  function handleGenderChange2(event) {
    if (event.target.checked) {
      setGender("Female");
    }
  }
  function addEmployee() {
    var updateEmpList1 = JSON.parse(JSON.stringify(empList));
    // updateCount(count + 1)
    updateEmpList1.push({
      name: name,
      address: address,
      city: city,
      gender: gender,
      id: count
    });
    setEmpList(updateEmpList1);
    // console.log("--",updateEmpList1);
    props.getEmpDetailList(updateEmpList1);
    resetForm()
  }

  useEffect(() => {
    setName(props.empEdit.name);
  }, [props.empEdit.name]);
  useEffect(() => {
    setAddress(props.empEdit.address);
  }, [props.empEdit.address]);
  useEffect(() => {
    setCity(props.empEdit.city);
  }, [props.empEdit.city]);
  useEffect(() => {
    setGender(props.empEdit.gender);
  }, [props.empEdit.gender]);
  useEffect(() => {
    setCount1(props.empEdit.id);
    if (props.empEdit.id !== undefined) {
      btnUpdate1(false);
      btnAdd1(true);
    }
  }, [props.empEdit.id]);


  function resetForm() {
    setName("");
    setAddress("");
    setCity("");
    setGender("");
  }

  function updateEmployee() {
    var updateEmpList1 = JSON.parse(JSON.stringify(empList));
    updateEmpList1.splice(props.empEditI, 1, {
      name: name,
      address: address,
      city: city,
      gender: gender,
      id: count1
    });
    setEmpList(updateEmpList1);
    props.getEmpDetailList(updateEmpList1);
    btnAdd1(false);
    btnUpdate1(true);
    resetForm()
    console.log("aa");
  }


  return (
    <div className='row'>
      <div className=' formDiv'>
        <p></p>
        <div className='row'>
          <div className='col-md-1'></div>
          <div className='col-md-3'><b>Name</b></div>
          <div className='col-md-5'>
            <input type="text"
              className='form-control'
              name="name"
              value={name}
              onChange={handleNameChange}
            /></div>
        </div>
        <p></p>
        <div className='row'>
          <div className='col-md-1'></div>
          <div className='col-md-3'><b>Address</b></div>
          <div className='col-md-5'>
            <textarea
              className='form-control'
              value={address}
              name='address'
              onChange={handleAddressChange}
            >
            </textarea></div>
        </div>
        <p></p>
        <div className='row'>
          <div className='col-md-1'></div>
          <div className='col-md-3'><b>City</b></div>
          <div className='col-md-5'>
            <select
              className='form-control'
              value={city}
              name='city'
              onChange={handleCityChange}
            >
              <option value="">Select City</option>
              <option value="Chennai">Chennai</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Kolkata">Kolkata</option>
            </select>
          </div>
        </div>
        <p></p>
        <div className='row'>
          <div className='col-md-1'></div>
          <div className='col-md-3'><b>Gender</b></div>
          <div className='col-md-5 radioDiv'>
            <input
              className="form-check-input"
              type="radio"
              value={gender}
              name="gender"
              id='genM'
              checked={gender === 'Male'}
              onChange={handleGenderChange1}
            />
            <label className="form-check-label radioDiv" htmlFor="genM">Male</label>
            <input
              className="form-check-input"
              type="radio"
              value={gender}
              name="gender"
              id='genF'
              checked={gender === 'Female'}
              onChange={handleGenderChange2}
            />
            <label className="form-check-label radioDiv" htmlFor="genF">Female</label>
          </div>
        </div>
        <p></p>
        <div className='row'>
          <div className='col-md-4'></div>
          <div className='col-md-2'><button type="button" className='btn1 btn2'
            onClick={addEmployee}
          > Add</button></div>
          <div className='col-md-2'><button type="button" className='btn1' onClick={updateEmployee} disabled={btnUpdate} >Update</button></div>
        </div>
        <input type="hidden" value={count} />
        <input type="hidden" value={count1} />
        <p></p>
      </div>
    </div>

  )

}
export default EmpForm