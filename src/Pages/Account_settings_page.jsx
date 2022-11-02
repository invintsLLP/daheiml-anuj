import React, { useState } from "react";
import { TestTab } from "./Settings_page";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
 

const Account_settings_page = () => {
  const [Station, setStation] = React.useState("");

  const handleChange_ForsettingPage = (event) => {
    setStation(event.target.value);
  };

  const [toggledrop, settoggledrop] = useState();
  const droptoggle_ForsettingPage = () => {
    settoggledrop(!toggledrop);
    const headermenu = document.querySelector(".Select_drop_down");
    headermenu.classList.toggle("Select_active");
  };

  return (
    <>
      <div className="main_wrap_pages AccountSettingsPage ">
        <section className=" AccountSettingsPage_section_1">
          <div className="heading_AccountSettingsPage_section_1">
            <h3>Account Settings</h3>
          </div>
          <div className="Authorized_row">
            <div className="Authorized_col">
              <div className="Authorized_card">
                <div className="cardtop_Authorized_card">
                  <h3 class="setting_head">Your Charging Stations</h3>
                  <ul className="test_card_bolck">
                    <TestTab
                     placeholderuser="test-cp0001"  placeholderrifd="pi" 
                      id_user="ChargingStation_1"
                      id_rifd="Alias1"
                      label_left="Charging Station ID"
                      label_right="Alias"
                    />
                    <TestTab
                     placeholderuser="test-cp0002"  placeholderrifd="test" 
                      id_user="ChargingStation_2"
                      id_rifd="Alias2"
                      label_left="Charging Station ID"
                      label_right="Alias"
                    />
                  </ul>
                  <div className="addtabs">
                    <p>Add Station</p>
                    <button class="remove_btn">
                      <div class="yesicon">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_1_381)">
                            <path
                              d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20Z"
                              fill="black"
                            />
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
                  <div className="language_block">
                    <div className="select_flex">
                      <h4>Language</h4>
                      <div className="Select_drop_down">
                        <FormControl
                          sx={{ m: 1, minWidth: 120 }}
                          onClick={droptoggle_ForsettingPage}
                        >
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

export default Account_settings_page;
