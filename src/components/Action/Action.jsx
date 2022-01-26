import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import GetAppIcon from '@material-ui/icons/GetApp';

import { useHistory } from 'react-router';
const ITEM_HEIGHT = 48;

export default function LongMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const history = useHistory()
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleEditClick = (props) => {
    history.push('/edit-user', {customerId:props.data})
  } 

  const EditButton = (props) => { 
    return ( 
      <div>
        <div onClick={()=> handleEditClick(props.data)}>
          <EditIcon style={{marginLeft:'20px', fontSize:"20px", verticalAlign:"middle", color: 'rgba(0, 0, 0, 0.54)', cursor:'pointer'}}/><p style={{color:'#007bff', fontWeight: '400', marginTop: '-18px', marginLeft: '60px', cursor:'pointer'}}>Edit</p> 
        </div>
        <div>
          <DeleteForeverIcon style={{marginLeft:'20px', fontSize:"20px", verticalAlign:"middle", color: 'rgba(0, 0, 0, 0.54)', cursor:'pointer'}}/><p style={{color:'#007bff', fontWeight: '400', marginTop: '-18px', marginLeft: '60px', cursor:'pointer'}}>Delete</p> 
        </div>
        <div>
          <GetAppIcon style={{marginLeft:'20px', fontSize:"20px", verticalAlign:"middle", color: 'rgba(0, 0, 0, 0.54)', cursor:'pointer'}}/><p style={{color:'#007bff', fontWeight: '400', marginTop: '-18px', marginLeft: '60px', cursor:'pointer'}}>Retrieve</p> 
        </div>
      </div>
    ); 
  }; 

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '18ch',
            top: '260px'
          },
        }}
      >
        <EditButton data = {props} style={{marginLeft: '30px'}}/>
      </Menu>
    </div>
  );
}