import React, { useState } from "react";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';



const Settings_page = () => {

  const [Station, setStation] = React.useState('');

  const handleChange_ForsettingPage = (event) => {
    setStation(event.target.value);
  };

  const [toggledrop, settoggledrop] = useState();
  const droptoggle_ForsettingPage = () => {
    settoggledrop(!toggledrop);
    const headermenu = document.querySelector(".Select_drop_down");
    headermenu.classList.toggle("Select_active");
  };


  const PrettoSlider = styled(Slider)({
    color: '#52af77',
    height: 8,
    '& .MuiSlider-track': {
      border: 'none',
    },
    '& .MuiSlider-thumb': {
      height: 0,
      width: 0,
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
      '&:before': {
        display: 'none',
      },
    },
    '& .MuiSlider-valueLabel': {
      lineHeight: 1.66,
      fontSize: 12,
      fontWeight: 500,
      color: "#298D74",
      textAlign: "center",
      background: 'unset',
      padding: 0,
      width: 33,
      height: 33,
      borderRadius: '50% 50% 50% 0',
      background: "#FFFFFF",
      boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.25)",
      transformOrigin: 'bottom left',
      transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
      '&:before': { display: 'none' },
      '&.MuiSlider-valueLabelOpen': {
        transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
      },
      '& > *': {
        transform: 'rotate(45deg)',
      },
    },
  });

  const marks = [
    {
      value: 5,
      label: '5 A',
    },
    {
      value: 32,
      label: '32 A',
    },
  ];

  function valuetext(value) {
    const units = ['A'];

    let unitIndex = 0;
    return `${value} ${units[unitIndex]}`;
  }

  return (
    <>
      <div className="main_wrap_pages SettingsPage">
        <section className="SettingsPage_section_1">
          <div className="main_select_flex">
            <div className="select_flex">
              <h4>Charging Station</h4>
              <div className="Select_drop_down">
                <FormControl sx={{ m: 1, minWidth: 120 }} onClick={droptoggle_ForsettingPage}>
                  <Select
                    value={Station}
                    onChange={handleChange_ForsettingPage}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
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

          </div>
          <div className="Settingtabs_block">
            <div className="Settingtabs_block_row">
              <div className="SettingCol_item">
                <div className="Setting_card Setting_card1_theme">
                  <div className="cardtop">
                    <h3 className="setting_head">Charging Timer</h3>
                    <p className="setting_head_text">Schedule a daily timer for your charging (The charging timer only works in RFID card secured charging mode)</p>
                    <div className="timer_block">
                      <div className="timeStart">
                        <div className="timer_Start_tab">
                          <span className="digits">00:00</span>
                          <span className="day_parmas" >AM</span>
                          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22.0049C6.477 22.0049 2 17.5279 2 12.0049C2 6.48191 6.477 2.00491 12 2.00491C17.523 2.00491 22 6.48191 22 12.0049C22 17.5279 17.523 22.0049 12 22.0049ZM12 20.0049C14.1217 20.0049 16.1566 19.1621 17.6569 17.6618C19.1571 16.1615 20 14.1266 20 12.0049C20 9.88318 19.1571 7.84835 17.6569 6.34806C16.1566 4.84777 14.1217 4.00491 12 4.00491C9.87827 4.00491 7.84344 4.84777 6.34315 6.34806C4.84285 7.84835 4 9.88318 4 12.0049C4 14.1266 4.84285 16.1615 6.34315 17.6618C7.84344 19.1621 9.87827 20.0049 12 20.0049V20.0049ZM13 12.0049H17V14.0049H11V7.00491H13V12.0049Z" fill="#9D9D9D" />
                          </svg>
                        </div>
                        <p className="label">Start  at</p>
                      </div>
                      <div className="timeStart">
                        <div className="timer_Start_tab">
                          <span className="digits">00:00</span>
                          <span className="day_parmas" > AM</span>
                          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22.0049C6.477 22.0049 2 17.5279 2 12.0049C2 6.48191 6.477 2.00491 12 2.00491C17.523 2.00491 22 6.48191 22 12.0049C22 17.5279 17.523 22.0049 12 22.0049ZM12 20.0049C14.1217 20.0049 16.1566 19.1621 17.6569 17.6618C19.1571 16.1615 20 14.1266 20 12.0049C20 9.88318 19.1571 7.84835 17.6569 6.34806C16.1566 4.84777 14.1217 4.00491 12 4.00491C9.87827 4.00491 7.84344 4.84777 6.34315 6.34806C4.84285 7.84835 4 9.88318 4 12.0049C4 14.1266 4.84285 16.1615 6.34315 17.6618C7.84344 19.1621 9.87827 20.0049 12 20.0049V20.0049ZM13 12.0049H17V14.0049H11V7.00491H13V12.0049Z" fill="#9D9D9D" />
                          </svg>
                        </div>
                        <p className="label">End  at</p>
                      </div>
                      <div className="stop_btn_block">
                        <button className="remove_btn">
                          <div className="stopicon">
                            <svg width="100%" height="100%" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M17 6.0049H22V8.0049H20V21.0049C20 21.2701 19.8946 21.5245 19.7071 21.712C19.5196 21.8995 19.2652 22.0049 19 22.0049H5C4.73478 22.0049 4.48043 21.8995 4.29289 21.712C4.10536 21.5245 4 21.2701 4 21.0049V8.0049H2V6.0049H7V3.0049C7 2.73968 7.10536 2.48533 7.29289 2.29779C7.48043 2.11025 7.73478 2.0049 8 2.0049H16C16.2652 2.0049 16.5196 2.11025 16.7071 2.29779C16.8946 2.48533 17 2.73968 17 3.0049V6.0049ZM18 8.0049H6V20.0049H18V8.0049ZM9 11.0049H11V17.0049H9V11.0049ZM13 11.0049H15V17.0049H13V11.0049ZM9 4.0049V6.0049H15V4.0049H9Z" fill="#9D9D9D" />
                            </svg>
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className="addtimer">
                      <p>Add Timer</p>
                      <div className="addbtn_block">
                        <button className="remove_btn">
                          <div className="addicon">
                            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clipPath="url(#clip0_1_340)">
                                <path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20Z" fill="black" />
                              </g>
                              <defs>
                                <clipPath id="clip0_1_340">
                                  <rect width="24" height="24" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="savebtn_block">
                    <button className="savebtn">save</button>
                  </div>
                </div>
              </div>
              <div className="SettingCol_item">
                <div className="Setting_card Setting_card2_theme">
                  <div className="cardtop" >
                    <h3 class="setting_head">Current Settings</h3>
                    <p class="setting_head_text">Limit charging current</p>
                    <div className="limit_maper_block">
                      <PrettoSlider
                        aria-label="pretto slider"
                        marks={marks}
                        defaultValue={16}
                        getAriaValueText={valuetext}
                        valueLabelFormat={valuetext}
                        step={1}
                        valueLabelDisplay="on"
                        min={5}
                        max={32}
                      />
                    </div>
                    <div className="result">
                      16 A / 11 kW
                    </div>
                  </div>
                  <div class="savebtn_block"><button class="savebtn">save</button></div>
                </div>
              </div>
              <div className="SettingCol_item">
                <div className="Setting_card">
                  <div className="cardtop" >
                    <h3 class="setting_head">Costs</h3>
                    <p class="setting_head_text">Costs per kWh</p>
                    <div className="paneledit_block">
                      <div className="edittab">
                        <input type="text" value={"0.29"} className="price_charging" name="price" id="price_charging" />
                        <label htmlFor="price_charging">€ / kWh</label>
                      </div>
                      <div class="stop_btn_block"><button class="remove_btn"><div class="editicon"><svg width="100%" height="100%" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.414 14.0049L13.556 3.86289L12.142 2.44889L2 12.5909V14.0049H3.414ZM4.243 16.0049H0V11.7619L11.435 0.32689C11.6225 0.139419 11.8768 0.0341034 12.142 0.0341034C12.4072 0.0341034 12.6615 0.139419 12.849 0.32689L15.678 3.15589C15.8655 3.34342 15.9708 3.59773 15.9708 3.86289C15.9708 4.12805 15.8655 4.38236 15.678 4.56989L4.243 16.0049ZM0 18.0049H18V20.0049H0V18.0049Z" fill="#298D74" />
                      </svg></div></button></div>
                    </div>
                  </div>
                  <div class="savebtn_block"><button class="savebtn">save</button></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="SettingsPage_section_2">
          <div className="Authorized_row">
            <div className="Authorized_col">
              <div className="Authorized_card">
                <div className="cardtop_Authorized_card">
                  <h3 class="setting_head">Authorized RFID Cards</h3>
                  <p class="setting_head_text">Add or Remove RFID Cards</p>
                  <ul className="test_card_bolck">
                    <TestTab placeholderuser="test-card"  placeholderrifd="1234"   id_user="user_info1" id_rifd="id_info1" label_left="User / Alias" label_right="RFID Card ID" />
                    <TestTab placeholderuser="test-card"  placeholderrifd="1234"   id_user="user_info2" id_rifd="id_info2" label_left="User / Alias" label_right="RFID Card ID" />
                  </ul>
                  <div className="addtabs">
                    <p>Add RFID Card</p>
                    <button class="remove_btn">
                      <div class="yesicon">
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_1_381)">
                            <path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20Z" fill="black" />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_381">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="save_Authorized">
                  <button class="savebtn">save</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};


const TestTab = (props) => {
  return (
    <>
      <li>
        <div className="test_card_left">
          <div class="testab">
            <input type="text" class="user_info" name="name" placeholder={props.placeholderuser} />
            <label for={props.id_user} >{props.label_left}</label>
          </div>
          <div class=" testab">
            <input type="text" class="user_info" name="name" placeholder={props.placeholderrifd} />
            <label for={props.id_rifd} >{props.label_right}</label>
          </div>
        </div>
        <div className="test_card_right">
          <div className="btn-part-1">
            <div className="btn_wrapper">
              <button className="big_round_btn">
                <div className="yesicon">
                  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1_402)">
                      <path d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z" fill="#298D74" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_402">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </button>
            </div>
            <div className="btn_wrapper" >
              <button className="big_round_btn">
                <div className="yesicon">
                  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1_397)">
                      <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM8.523 7.109L16.891 15.477C16.5015 16.0236 16.0236 16.5015 15.477 16.891L7.109 8.523C7.49858 7.97673 7.97646 7.49819 8.523 7.109Z" fill="#298D74" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_397">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                </div>
              </button>
            </div>
          </div>
          <div className="btn-part-2">
            <div className="btn_wrapper" >
              <button class="remove_btn">
                <div class="editicon">
                  <svg width="100%" height="100%" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.414 14.0049L13.556 3.86289L12.142 2.44889L2 12.5909V14.0049H3.414ZM4.243 16.0049H0V11.7619L11.435 0.32689C11.6225 0.139419 11.8768 0.0341034 12.142 0.0341034C12.4072 0.0341034 12.6615 0.139419 12.849 0.32689L15.678 3.15589C15.8655 3.34342 15.9708 3.59773 15.9708 3.86289C15.9708 4.12805 15.8655 4.38236 15.678 4.56989L4.243 16.0049ZM0 18.0049H18V20.0049H0V18.0049Z" fill="#298D74"></path></svg>
                </div>
              </button>
            </div>
            <div className="btn_wrapper" >
              <button class="remove_btn"><div class="stopicon"><svg width="100%" height="100%" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 6.0049H22V8.0049H20V21.0049C20 21.2701 19.8946 21.5245 19.7071 21.712C19.5196 21.8995 19.2652 22.0049 19 22.0049H5C4.73478 22.0049 4.48043 21.8995 4.29289 21.712C4.10536 21.5245 4 21.2701 4 21.0049V8.0049H2V6.0049H7V3.0049C7 2.73968 7.10536 2.48533 7.29289 2.29779C7.48043 2.11025 7.73478 2.0049 8 2.0049H16C16.2652 2.0049 16.5196 2.11025 16.7071 2.29779C16.8946 2.48533 17 2.73968 17 3.0049V6.0049ZM18 8.0049H6V20.0049H18V8.0049ZM9 11.0049H11V17.0049H9V11.0049ZM13 11.0049H15V17.0049H13V11.0049ZM9 4.0049V6.0049H15V4.0049H9Z" fill="#9D9D9D"></path></svg></div></button>
            </div>
          </div>
        </div>
      </li>
    </>
  )
}

export { TestTab }
export default Settings_page;
