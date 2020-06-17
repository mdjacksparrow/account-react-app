import React from 'react';
import {IconButton, Grid } from '@material-ui/core';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';
// import SpeedDial from '@material-ui/lab/SpeedDial';
// import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
// import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
// import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
// import SaveIcon from '@material-ui/icons/Save';
// import PrintIcon from '@material-ui/icons/Print';

// const actions = [
//   { icon: <FileCopyIcon />, name: 'Copy' },
//   { icon: <SaveIcon />, name: 'Save' },
//   { icon: <PrintIcon />, name: 'Print' },
// ];

function SpendMoneyBox(props) {
//   const [openCenterBtn, setopenCenterBtn] = React.useState(false);

//   const handleCenterBtnClose = () => {
//     setopenCenterBtn(false);
//   };

//   const handleCenterBtnOpen = () => {
//     setopenCenterBtn(true);
//   };
  return (
    <Grid item xs={12} sm={6} className='spendMoneyContainer' key={props.index}>
      <div className='top'>
        <p className='date'>
          <EventAvailableOutlinedIcon className='icon' />
          {props.date}
        </p>
        <p className='time'>
          <WatchLaterOutlinedIcon className='icon' />
          {props.time}
        </p>
      </div>
      <div className='bottom'>
        <p>{props.hint}</p>
        <p>
          Rs.<span>{props.amount}</span>/-
        </p>
      </div>
    </Grid>
  );
}

export default SpendMoneyBox;
