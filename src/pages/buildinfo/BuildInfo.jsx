
import { useHistory, useLocation } from "react-router-dom";
import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './buildinfo.css';
import { BASE_URL, CYBER_BASE_URL } from "../../config/config";


function BuildInfo() {
  const history = useHistory();
  const location = useLocation();
  const [customerName, setCustomerName] = useState('')
  const [customer, setCustomer] = useState('')
  const [customerDetails, setCustomerDetails] = useState([])
  const [showFiles, setShowFiles] = useState(false);


  const handleListItemClick = (fname, lname, minionid) => {
    setCustomerName(`${fname} ${lname}`)
    setCustomer(minionid)
    setCustomerDetails([])
  };

  const handleClickRetrieve = async () =>{
    const buildData = {}
    const resp = await axios.post(`${CYBER_BASE_URL}/cyberutils/${customer}/getBuildInfo`, buildData);
    console.log(resp);
    setShowFiles(true)
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
                  <option value="Pax-8">Pax-8 customer</option>
                  <option value="Other">Netalytics customer</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label for="customer">Search customer name/email</label>
                <input type="text" className="form-control" value={customerName} onChange={(e) => handleCustomerSearch(e.target.value)} placeholder="customer name/email..." id="customer" />
              </div>
              { customerDetails.length > 0 &&
                <div className="search-box">
                  <ul className="list-group" id="style-2">
                    {customerDetails.map((list, i) => (
                      <li key={i} onClick={() => handleListItemClick(list.firstName, list.lastName, list.minionid)} className="list-group-item">{list.firstName} {list.lastName}</li>
                    ))}
                  </ul>
                </div>
              }
            </div>
            {customer &&
              <div className="col-md-6">
                <div className="menu-icon" onClick={() => handleClickRetrieve()} style={{color: '#0078d4', fontSize:'2rem', cursor:'pointer'}}>
                  <button type="button" style={{marginBottom:'20px'}} class="btn btn-primary">Submit</button>
                </div>
              </div>
            }
          </div>
        </form>
        {showFiles &&
          <div class="card shadow col-md-6" style={{marginTop: '1em'}}>
            <div class="card-body">
              <h5 class="card-title">Build Information</h5>
              <h6 class="card-subtitle mb-2 text-muted">Backend <i class="bi bi-check-circle-fill succes"></i> <i class="bi bi-x-circle-fill danger"></i> Up to date</h6>

              <ul class="list-group">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
                <li class="list-group-item">A fourth item</li>
                <li class="list-group-item">And a fifth one</li>
              </ul>
              <br />
              <h6 class="card-subtitle mb-2 text-muted">UI <i class="bi bi-check-circle-fill succes"></i> <i class="bi bi-x-circle-fill danger"></i> Up to date</h6>
              <ul class="list-group">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
                <li class="list-group-item">A fourth item</li>
                <li class="list-group-item">And a fifth one</li>
              </ul>
            </div>
          </div>
        }
      </div>
    </>
  );
}

export default BuildInfo
  