import { useHistory, useLocation } from "react-router-dom";
import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './logs.css';
import { BASE_URL, SALT_BASE_URL } from "../../config/config";
import DropDownInput from "../../components/inputs/DropDownInput";


function Logs() {
  const history = useHistory();
  const location = useLocation();
  const [customerName, setCustomerName] = useState('')
  const [customer, setCustomer] = useState('')
  const [customerDetails, setCustomerDetails] = useState([])
  const [files, setFiles] = useState([]);
  const [values, setValues] = useState({
    food_category: []
  });
  const [errors, setErrors] = useState({
    food_category: ''
  });

  const handleTextChange = (key, value) => {
    const updatedValues = { ...values, [key]: value };
    console.log(updatedValues);
    setValues(updatedValues);
  }
  const handleListItemClick = async(fname, lname, minionid) => {
    setCustomerName(`${fname} ${lname}`)
    setCustomer(minionid)
    setCustomerDetails([])
  };

  useEffect(() => {
    const fetchDate = async () => {
      const resp = await axios.get(SALT_BASE_URL+'/listlog');
      console.log(resp);
      setFiles(resp.data)
    }
    fetchDate()
  },[])
  
  const handleClickDownload = async() => {
    values.food_category.map(list => {
      window.open(SALT_BASE_URL+`/download?minion_id=${customer}&all_files=${list}`)
    })
  }
  const handleCustomerSearch = async(value) => {
    setCustomerName(value)
    const data = { firstName: value}
    const resp = await axios.post(BASE_URL+'/filtercustomer', data);
    console.log(resp);
    setCustomerDetails(resp.data.data)
    console.log(customerDetails);
  }
  return (
    <>
      <div className="container" style={{marginTop: '50px'}}> {/*style={{background: '#f8f9fa',paddingBottom: '60px'}}*/}
        <form autoComplete="off">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="customer">Customer Type</label>
                <select defaultValue={0} className="form-control" aria-label="Default select example">
                  <option selected>select customer type</option>
                  <option value="Pax-8">Pax8 customer</option>
                  <option value="Other">Netalytics customer</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label for="customer">Search customer name/email</label>
                <input type="text"  className="form-control" value={customerName} onChange={(e) => handleCustomerSearch(e.target.value)} placeholder="customer name/email..." id="customer" />
              </div>
              { customerDetails.length > 0 &&
                <div className="search-box">
                  <ul className="list-group" id="style-2">
                    {customerDetails.map((list, i) => (
                      <li key={i} onClick={() => handleListItemClick(list.firstName, list.lastName, list.minionid)} style={{cursor: 'pointer'}} className="list-group-item">{list.firstName} {list.lastName}</li>
                    ))}
                  </ul>
                </div>
              }
              
            </div>
            
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="files"> Select Log Files</label>
                <DropDownInput
                  placeholder={`Select log files`}
                  type="text"
                  items={files}
                  action="dropdown"
                  name="food_category"
                  id="food_category"
                  value={values.food_category}
                  error={errors.food_category}
                  onChange={(text) => handleTextChange("food_category", text)}
                />
              </div>
            </div>
            {
              <div className="col-md-6">
                <div className="menu-icon" onClick={() => handleClickDownload()} style={{color: '#0078d4', fontSize:'2rem', cursor:'pointer'}}>
                  <button type="button" style={{marginTop:'32px'}} class="btn btn-primary">Submit</button>
                </div>
              </div>
            }
          </div>
        </form>
      </div>
    </>
  );
}

export default Logs
  