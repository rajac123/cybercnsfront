import "./user.css";
import { useEffect, useState } from "react";
import Table from '../../components/table/Table'
import axios from 'axios'
import LongMenu from "../../components/Action/Action";
import { BASE_URL } from "../../config/config";


export default function User() {
  const [data, setData] = useState([
  ]);
  

  useEffect(() => {
    const getCustomer = async() => {
      const res = await axios.get(BASE_URL+'/elasticsearch');
      setData(res.data.data)
    }
    getCustomer()
  }, [])


  const handleChange = ()=>{
    return true
  }
  const handleSelectRow = ()=>{
    return true
  }
  const handleEdit = (props)=>{
    localStorage.domain = props.domain
  }

  const AppList = (props) => { 
    const { data, handleSelectRow } = props; 
    return ( 
    <button onClick={() => handleSelectRow(data)}> </button> ); 
  }; 
  const customStyles = { 
    rows: { 
        style: { 
            minHeight: "50px", 
            fontSize: "14px", 
            paddingLeft: "30px", 
            paddingRight: "30px", 
            color: "#111", 
        }, 
    }, 
    headCells: { 
        style: { 
            minHeight: "60px", 
            color: "#111", 
            paddingLeft: "25px", 
            paddingRight: "30px", 
            fontSize: "16px", 
            background: "#e7f3fb", 
        }, 
    }, 
    cells: { 
        style: { 
            paddingLeft: "25px",
         }, 
    }, 
}; 

const Status = (props) => (
  props.status == 'Configured' ? <span style={{color:'#4dc91a'}}>{props.status}</span>: <span style={{color:'#ef0c22'}}>{props.status}</span>
)

  const columns = [ 
  { 
      name: "First Name", 
      cell: (row) => row.firstName, 
      sortable: true 
  }, 
  { 
      name: "Last Name", 
      cell: (row) => row.lastName,
      sortable: true 
  },  
  { 
      name:"Domain", 
      cell:(row) => row.domain, 
      sortable:true, 
  }, 
  { 
    name: "Status", 
    cell: (row) => <Status status={row.status}/>, 
    sortable: true, 
  },
  { 
      name: "Action", 
      cell: (row) => <LongMenu data={row._id}/>, 
  } ]; 
  return (
    <div>
      {/* <Sidebar /> */}
      <div className="home">
        <Table 
          columns={columns}
          data={data}
          onRowClicked={handleChange}
          pagination
          paginationTotalRows={handleChange}
          customStyles={customStyles}
          noHeader
          
          paginationComponentOption={{
            noRowsPerPage: true
          }}
          highlightOnHower={
            <div style={{ color: "#111", marginTop: 20}}>
              No data available in table
            </div>
          }
        />
      </div>
    </div>
    
  );
}
