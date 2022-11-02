import React, { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Slider from '@mui/material/Slider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Solar_charging_page = () => {

  // Select_drop_down 7
  const [age7, setAge7] = React.useState('');

  const handleChange7 = (event) => {
    setAge7(event.target.value);
  };

  const [toggledrop7, settoggledrop7] = useState();
  const droptoggle7 = () => {
    settoggledrop7(!toggledrop7);
    const headermenu = document.querySelector(".Select_drop_down");
    headermenu.classList.toggle("Select_active");
  };

  // Select_drop_down 8
  const [age8, setAge8] = React.useState('');

  const handleChange8 = (event) => {
    setAge8(event.target.value);
  };

  const [toggledrop8, settoggledrop8] = useState(false);

  const droptoggle8 = () => {
    settoggledrop8(!toggledrop8);
  };

  // Slider 
  const marks = [
    {
      value: 0,
      label: '4.13 kW',
    },
    {
      value: 100,
      label: '10.0 kW',
    },
  ];

  function valuetext(value) {
    return `${value}°C`;
  }

  return (
    <>
      <div className='main_wrap_pages'>
        <div className='solar_charging_page'>
          <div className='main_select_flex'>
            <div className='select_flex'>
              <h4>Charging Station</h4>
              <div className="Select_drop_down">
                <FormControl sx={{ m: 1, minWidth: 120 }} onClick={droptoggle7}>
                  <Select
                    value={age7}
                    onChange={handleChange7}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    IconComponent = {KeyboardArrowDownIcon}
                  >
                    <MenuItem value="">
                      <span>Test</span>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                  <FormHelperText>Without label</FormHelperText>
                </FormControl>
              </div>
            </div>
            <div className='refresh_icon'>
              <a href="#0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_38_432)">
                    <path d="M18.537 19.567C16.7224 21.1393 14.401 22.0033 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 14.136 21.33 16.116 20.19 17.74L17 12H20C19.9998 10.1562 19.3628 8.36906 18.1967 6.94089C17.0305 5.51272 15.4069 4.53119 13.6003 4.16236C11.7938 3.79352 9.91533 4.06002 8.28268 4.91677C6.65002 5.77351 5.36342 7.16791 4.64052 8.86408C3.91762 10.5603 3.80281 12.4541 4.31549 14.2251C4.82818 15.9962 5.93689 17.5358 7.45408 18.5836C8.97127 19.6313 10.8038 20.1228 12.6416 19.9749C14.4795 19.827 16.2099 19.0488 17.54 17.772L18.537 19.567Z" fill="#298D74" />
                  </g>
                  <defs>
                    <clipPath id="clip0_38_432">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
          <div className='solar_charging_box'>
            <p className='pv_surplus_charging_P'>PV surplus charging</p>
            <div className='solar_charging_row'>
              <div className='login_data_block'>
                <p className='sem_text_p'>Powerfox Login Data</p>
                <form action="" >
                  <div className='inputs'>
                    <input type="email" id="email" name="email" placeholder='stephan.schwebe@daheimladen.de' />
                    <label htmlFor="">Email</label>
                  </div>
                  <div className='inputs'>
                    <input type="password" id="password" name="password" placeholder='wallbox1234' />
                    <label htmlFor="">Password</label>
                  </div>
                </form>
              </div>
              <div className='charging_station_block'>
                <p className='sem_text_p'>Pairing the charging station with PV</p>
                <div className='select_flex'>
                  <div className={`Select_drop_down ${toggledrop8 === true ? "Select_active" : ""}`} >
                    <FormControl sx={{ m: 1, minWidth: 120 }} onClick={droptoggle8}>
                      <Select
                        value={age8}
                        onChange={handleChange8}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        IconComponent = {KeyboardArrowDownIcon}
                      >
                        <MenuItem value="">
                          <span>Test</span>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                      <FormHelperText>Without label</FormHelperText>
                    </FormControl>
                  </div>
                </div>
                <div>
                  <p className='sem_text_p'>PV charging starts from PV surplus</p>
                  <div className='Slider_block'>
                    <Slider
                      aria-labelledby="track-false-range-slider"
                      getAriaValueText={valuetext}
                      defaultValue={3}
                      marks={marks}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='save_button'>
              <button class="savebtn">save</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Solar_charging_page;