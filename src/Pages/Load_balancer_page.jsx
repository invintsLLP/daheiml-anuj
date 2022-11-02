import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Status_green_icon from '../assets/images/Dashboard_home/Status_green_icon.png';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color:
                theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[600],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 22,
        height: 22,
    },
    '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
}));


const Load_balancer_page = () => {

    // Select_drop_down 9
    const [age9, setAge9] = React.useState('');

    const handleChange9 = (event) => {
        setAge9(event.target.value);
    };

    const [toggledrop9, settoggledrop9] = useState(false);

    const droptoggle9 = () => {
        settoggledrop9(!toggledrop9);

        const menu = document.querySelector("#root");
        menu.classList.toggle("drop_open_z");
    };

    const add_item = () => {
        document.documentElement.classList.add("add_item_overflow");
        const menu = document.querySelector(".add_item_main");
        menu.classList.add("add_item_open");
    };
    const item_remove = () => {
        const menu = document.querySelector(".add_item_main");
        menu.classList.remove("add_item_open");
        document.documentElement.classList.remove("add_item_overflow");
    } 

    return (
        <>
            <div className='main_wrap_pages'>
                <div className='load_balancer_page'>
                    <div className='last_management_box'>
                        <div className='delete_row'>
                            <p>DaheimLader Lastmanagement</p>
                            <a href="#0">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_76_1087)">
                                        <path d="M17 6H22V8H20V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H5C4.73478 22 4.48043 21.8946 4.29289 21.7071C4.10536 21.5196 4 21.2652 4 21V8H2V6H7V3C7 2.73478 7.10536 2.48043 7.29289 2.29289C7.48043 2.10536 7.73478 2 8 2H16C16.2652 2 16.5196 2.10536 16.7071 2.29289C16.8946 2.48043 17 2.73478 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z" fill="#9D9D9D" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_76_1087">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                        </div>
                        <ul className='last_management_ul'>
                            <li>
                                <p>Current charging power:</p>
                                <span>9,90 kW</span>
                            </li>
                            <li>
                                <input type="number" min="1" max="1234567891" name="quantity"  placeholder="14" className="input_field" inputMode="numeric" pattern="[0-9]*" onKeyPress="return isNumberKey(event)" />
                                <p>Maximum Charging Power in kW</p>
                            </li>
                            <li>
                                <div className='switch_btn'>
                                    <FormControlLabel
                                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                                    />
                                </div>
                                <p>Load Balancer Active</p>
                            </li>
                            <li>
                                <button class="savebtn">save</button>
                            </li>
                        </ul>
                    </div>
                    <div className='wallbox_row'>
                        <div className='wallbox_cols'>
                            <div className='wallbox_width'>
                                <div className='wallbox_item'>
                                    <div className='delete_row'>
                                        <p>Wallbox 2</p>
                                        <a href="#0">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_76_1087)">
                                                    <path d="M17 6H22V8H20V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H5C4.73478 22 4.48043 21.8946 4.29289 21.7071C4.10536 21.5196 4 21.2652 4 21V8H2V6H7V3C7 2.73478 7.10536 2.48043 7.29289 2.29289C7.48043 2.10536 7.73478 2 8 2H16C16.2652 2 16.5196 2.10536 16.7071 2.29289C16.8946 2.48043 17 2.73478 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z" fill="#9D9D9D" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_76_1087">
                                                        <rect width="24" height="24" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </a>
                                    </div>
                                    <p>#150773872293828</p>
                                    <a href="#0"><img src={Status_green_icon} alt="Status_green_icon" /></a>
                                    <div className='status_text_row'>
                                        <div>
                                            <h3>Available</h3>
                                            <span>Status</span>
                                        </div>
                                        <div>
                                            <h3>0 kW</h3>
                                            <span>Current charging power</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='wallbox_width'>
                                <div className='wallbox_item'>
                                    <div className='delete_row'>
                                        <p>Wallbox 3</p>
                                        <a href="#0">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_76_1087)">
                                                    <path d="M17 6H22V8H20V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H5C4.73478 22 4.48043 21.8946 4.29289 21.7071C4.10536 21.5196 4 21.2652 4 21V8H2V6H7V3C7 2.73478 7.10536 2.48043 7.29289 2.29289C7.48043 2.10536 7.73478 2 8 2H16C16.2652 2 16.5196 2.10536 16.7071 2.29289C16.8946 2.48043 17 2.73478 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z" fill="#9D9D9D" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_76_1087">
                                                        <rect width="24" height="24" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </a>
                                    </div>
                                    <p>#161689703604517</p>
                                    <a href="#0"><img src={Status_green_icon} alt="Status_green_icon" /></a>
                                    <div className='status_text_row'>
                                        <div>
                                            <h3>Available</h3>
                                            <span>Status</span>
                                        </div>
                                        <div>
                                            <h3>0 kW</h3>
                                            <span>Current charging power</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='wallbox_width'>
                                <div className='wallbox_item'>
                                    <div className='delete_row'>
                                        <p>newplaning (rechts)</p>
                                        <a href="#0">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_76_1087)">
                                                    <path d="M17 6H22V8H20V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H5C4.73478 22 4.48043 21.8946 4.29289 21.7071C4.10536 21.5196 4 21.2652 4 21V8H2V6H7V3C7 2.73478 7.10536 2.48043 7.29289 2.29289C7.48043 2.10536 7.73478 2 8 2H16C16.2652 2 16.5196 2.10536 16.7071 2.29289C16.8946 2.48043 17 2.73478 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z" fill="#9D9D9D" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_76_1087">
                                                        <rect width="24" height="24" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </a>
                                    </div>
                                    <p>#84702762949176</p>
                                    <a href="#0"><img src={Status_green_icon} alt="Status_green_icon" /></a>
                                    <div className='status_text_row'>
                                        <div>
                                            <h3>Available</h3>
                                            <span>Status</span>
                                        </div>
                                        <div>
                                            <h3>0 kW</h3>
                                            <span>Current charging power</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='wallbox_width'>
                                <div className='wallbox_item'>
                                    <div className='delete_row'>
                                        <p>Wallbox 4</p>
                                        <a href="#0">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_76_1087)">
                                                    <path d="M17 6H22V8H20V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H5C4.73478 22 4.48043 21.8946 4.29289 21.7071C4.10536 21.5196 4 21.2652 4 21V8H2V6H7V3C7 2.73478 7.10536 2.48043 7.29289 2.29289C7.48043 2.10536 7.73478 2 8 2H16C16.2652 2 16.5196 2.10536 16.7071 2.29289C16.8946 2.48043 17 2.73478 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z" fill="#9D9D9D" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_76_1087">
                                                        <rect width="24" height="24" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </a>
                                    </div>
                                    <p>#84702763670071</p>
                                    <a href="#0"><img src={Status_green_icon} alt="Status_green_icon" /></a>
                                    <div className='status_text_row'>
                                        <div>
                                            <h3>Available</h3>
                                            <span>Status</span>
                                        </div>
                                        <div>
                                            <h3>0 kW</h3>
                                            <span>Current charging power</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='wallbox_width'>
                                <div className='wallbox_item'>
                                    <div className='delete_row'>
                                        <p>newplaning (links)</p>
                                        <a href="#0">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_76_1087)">
                                                    <path d="M17 6H22V8H20V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H5C4.73478 22 4.48043 21.8946 4.29289 21.7071C4.10536 21.5196 4 21.2652 4 21V8H2V6H7V3C7 2.73478 7.10536 2.48043 7.29289 2.29289C7.48043 2.10536 7.73478 2 8 2H16C16.2652 2 16.5196 2.10536 16.7071 2.29289C16.8946 2.48043 17 2.73478 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z" fill="#9D9D9D" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_76_1087">
                                                        <rect width="24" height="24" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </a>
                                    </div>
                                    <p>#84702832228251</p>
                                    <a href="#0"><img src={Status_green_icon} alt="Status_green_icon" /></a>
                                    <div className='status_text_row'>
                                        <div>
                                            <h3>Available</h3>
                                            <span>Status</span>
                                        </div>
                                        <div>
                                            <h3>0 kW</h3>
                                            <span>Current charging power</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='wallbox_width'>
                                <div className='wallbox_item'>
                                    <div className='delete_row'>
                                        <p>DaheimLader 1</p>
                                        <a href="#0">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_76_1087)">
                                                    <path d="M17 6H22V8H20V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H5C4.73478 22 4.48043 21.8946 4.29289 21.7071C4.10536 21.5196 4 21.2652 4 21V8H2V6H7V3C7 2.73478 7.10536 2.48043 7.29289 2.29289C7.48043 2.10536 7.73478 2 8 2H16C16.2652 2 16.5196 2.10536 16.7071 2.29289C16.8946 2.48043 17 2.73478 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z" fill="#9D9D9D" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_76_1087">
                                                        <rect width="24" height="24" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </a>
                                    </div>
                                    <p>#8627766455730</p>
                                    <a href="#0"><img src={Status_green_icon} alt="Status_green_icon" /></a>
                                    <div className='status_text_row'>
                                        <div>
                                            <h3>Available</h3>
                                            <span>Status</span>
                                        </div>
                                        <div>
                                            <h3>0 kW</h3>
                                            <span>Current charging power</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='add_icon'>
                        <a href="#0" onClick={add_item}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_76_1208)">
                                    <path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20V20Z" fill="#298D74" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_76_1208">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className='add_item_main'>
                    <div className='add_item_block'>
                        <div className='add_item_box'>
                            <h5>add charging station to DaheimLader Lastmanagement</h5>
                            <div className='select_flex'>
                                <div className={`Select_drop_down ${toggledrop9 === true ? "Select_active" : ""}`} >
                                    <FormControl sx={{ m: 1, minWidth: 120 }} onClick={droptoggle9}>
                                        <Select
                                            value={age9}
                                            onChange={handleChange9}
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
                            <ul>
                                <li><a href="#0" onClick={item_remove}>Cancel</a></li>
                                <li><a href="#0" onClick={item_remove}>Add</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='add_item_shadow' onClick={item_remove}></div>
        </>
    )
}

export default Load_balancer_page;