import {useEffect, useState} from 'react'
import { useHistory, useLocation } from "react-router-dom";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from '../../config/config';


const EditUser = () => {
    const history = useHistory();
    const location = useLocation();
    const [disableSubmit, setDisableSubmit] = useState(true);

    const notify = () => toast.success('Customer details updated successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        companyName: '',
        domain: '',
        status: ''
    })
    useEffect(() => {
      const getCustomer = async() =>{
          const cusId = location.state.customerId
          const data = { _id: cusId}
          const res = await axios.post(`${BASE_URL}/getcustomer`, data);
          console.log(res);
          setValues(res.data.data[0])
          validateValues(res.data.data[0])
      }
      getCustomer()
    }, [])

    const handleTextChange = (key, value) => {
        let updatedValues = { ...values, [key]: value };
        setValues(updatedValues);
        validateValues(updatedValues);
    };
    const validateValues = (values) => {

        var updatedErrors = {};
        var keys = ["firstName", "lastName", "email", "domain", "companyName"];
        var shouldDisableSubmit = true;
        keys.forEach((key) => {
        if (!values[key] || values[key] === "") {
            updatedErrors[key] = " ";
        }
        });
        shouldDisableSubmit = Object.keys(updatedErrors).length > 0;
        setDisableSubmit(shouldDisableSubmit);
        return updatedErrors;
    }

    const handleCancel = () => history.push('/users');

    const handleSubmit = async () =>{
        const resp = await axios.put(BASE_URL+'/update_data', values);
        console.log(resp);
        setDisableSubmit(true)
        notify()
        setTimeout(() => history.push('/users'), 3000);
    }

    return (
        <div>
            <div className="container" style={{marginTop: '50px'}}> {/* style={{background: '#f8f9fa',paddingBottom: '60px'}}  */}
                <form>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="first">First Name</label>
                                <input type="text" className="form-control" value = {values.firstName} onChange={(e) => handleTextChange('firstName', e.target.value)} placeholder="First name" id="first" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="last">Last Name</label>
                                <input type="text" className="form-control" value = {values.lastName} onChange={(e) => handleTextChange('lastName', e.target.value)} placeholder="Last name" id="last" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="email">Email ID</label>
                                <input type="text" className="form-control" value = {values.email} onChange={(e) => handleTextChange('email', e.target.value)} placeholder="email" id="email" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="company">Company Name</label>
                                <input type="text" className="form-control" value = {values.companyName} onChange={(e) => handleTextChange('companyName', e.target.value)} id="companyName" placeholder="Comapany name" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="domain">Domain</label>
                                <input type="text" className="form-control" value = {values.domain} onChange={(e) => handleTextChange('domain', e.target.value)} id="domain" placeholder="Domain" disabled/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="status">Status</label>
                                <select defaultValue={0} className="form-control" value = {values.status} onChange={(e) => handleTextChange('status', e.target.value)} aria-label="Default select example">
                                    <option selected>select status</option>
                                    <option value="Configured">Configured</option>
                                    <option value="notconfigured">notconfigured</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <button type="button" disabled={disableSubmit} onClick={()=> handleSubmit()}className="btn btn-primary float-right" style={{marginLeft:20}}>Submit</button>
                        <button type="button" onClick={() => handleCancel()} className="btn btn-danger float-right">Cancel</button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}

export default EditUser
