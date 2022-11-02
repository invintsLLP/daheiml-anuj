import React, { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import error_icon_home from '../assets/images/Dashboard_home/error_icon_home.png';
import true_icon from '../assets/images/Dashboard_home/true_icon.png';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Dashboard_home = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const [toggledrop, settoggledrop] = useState();
    const droptoggle = () => {
        settoggledrop(!toggledrop);
        const headermenu = document.querySelector(".Select_drop_down");
        headermenu.classList.toggle("Select_active");
    };

    // Select_drop_down 1
    const [age1, setAge1] = React.useState('');

    const handleChange1 = (event) => {
        setAge1(event.target.value);
    };

    const [toggledrop1, settoggledrop1] = useState(false);

    const droptoggle1 = () => {
        settoggledrop1(!toggledrop1);
    };


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

    return (
        <>
            <div className='main_wrap_pages'>
                <div className='Dashboard_home_page'>
                    <div className='main_select_flex'>
                        <div className='select_flex'>
                            <h4>Charging Station</h4>
                            <div className="Select_drop_down">
                                <FormControl sx={{ m: 1, minWidth: 120 }} onClick={droptoggle}>
                                    <Select
                                        value={age}
                                        onChange={handleChange}
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
                    <div className='Dashboard_cards_main'>
                        <div className='Dashboard_cards_row'>
                            <div className='dashboard_items'>
                                <div className='Dashboard_item'>
                                    <div className='Dashboard_card Dashboard_card_1'>
                                        <div className='Status_flex'>
                                            <span className='Status_span'>Status</span>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_2_665)">
                                                    <path d="M3.515 2.10001L22.607 21.192L21.192 22.607L19.178 20.592C18.4837 20.8624 17.7451 21.0008 17 21H7C5.58323 21.0009 4.21184 20.5004 3.12868 19.5872C2.04552 18.6739 1.32047 17.4069 1.0819 16.0103C0.843337 14.6138 1.10665 13.1779 1.82523 11.9569C2.5438 10.7358 3.67127 9.80849 5.008 9.33901C4.9652 8.47016 5.08492 7.60095 5.361 6.77601L2.1 3.51401L3.515 2.10001ZM7 9.00001C7 9.08101 7.002 9.16301 7.006 9.24301L7.076 10.731L5.672 11.225C4.7825 11.5396 4.03275 12.1583 3.55509 12.9719C3.07744 13.7856 2.90261 14.7418 3.06146 15.6718C3.22031 16.6018 3.70262 17.4458 4.42326 18.0548C5.1439 18.6637 6.05652 18.9985 7 19H17C17.186 19 17.369 18.987 17.548 18.963L7.03 8.44501C7.01 8.62701 7 8.81201 7 9.00001ZM12 2.00001C12.9478 1.99998 13.8858 2.19244 14.757 2.56571C15.6282 2.93898 16.4145 3.48529 17.0683 4.17153C17.7221 4.85776 18.2297 5.66962 18.5604 6.55788C18.8911 7.44614 19.0379 8.39231 18.992 9.33901C19.8225 9.63156 20.5785 10.1032 21.2063 10.7206C21.8342 11.3379 22.3185 12.0859 22.625 12.9113C22.9316 13.7368 23.0527 14.6195 22.98 15.497C22.9072 16.3746 22.6423 17.2253 22.204 17.989L20.711 16.496C21.0053 15.7681 21.0787 14.9696 20.9222 14.2002C20.7657 13.4307 20.3862 12.7244 19.8309 12.1692C19.2757 11.6141 18.5693 11.2347 17.7998 11.0783C17.0304 10.922 16.2319 10.9956 15.504 11.29L14.01 9.79501C14.891 9.29001 15.911 9.00001 17 9.00001C17 8.08447 16.7486 7.18651 16.2732 6.40405C15.7979 5.62158 15.1168 4.98466 14.3043 4.56272C13.4918 4.14078 12.579 3.95003 11.6655 4.01127C10.7521 4.07251 9.87292 4.38339 9.124 4.91001L7.694 3.48001C8.92318 2.51854 10.4395 1.99739 12 2.00001V2.00001Z" fill="#FF0000" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_2_665">
                                                        <rect width="24" height="24" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <h3 className='Dashboard_card_h3'>Available</h3>
                                        <p className='Dashboard_card_kw'>20 kW</p>
                                    </div>
                                </div>
                                <div className='Dashboard_item'>
                                    <div className='Dashboard_card Dashboard_card_2'>
                                        <div className='Status_flex'>
                                            <span className='Status_span'>consumption</span>
                                            <span className='Status_span'>June</span>
                                        </div>
                                        <div className='Status_flex margintd'>
                                            <h3 className='Dashboard_card_h3'>0,00 kW</h3>
                                            <span>€0,00</span>
                                        </div>
                                        <div className='last_charge_error'>
                                            <p><span>+20%</span> Since Last Charge</p>
                                            <p><img src={error_icon_home} alt="error_icon_home" /> Updated 2 min ago</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='Dashboard_item'>
                                    <div className='Dashboard_card Dashboard_card_3'>
                                        <div className='Status_flex'>
                                            <span className='Status_span'>Last Charging Session</span>
                                        </div>
                                        <div className='Status_flex'>
                                            <div>
                                                <div className='margintd'>
                                                    <h3 className='Dashboard_card_h3'>0,00 kW</h3>
                                                    <p>Power Cunsumed</p>
                                                </div>
                                                <div className='hrs_set hrs_set_main'>
                                                    <p>00:00 Hrs</p>
                                                    <span>Start  at</span>
                                                </div>
                                            </div>
                                            <div>
                                                <div className='margintd'>
                                                    <h3 className='Dashboard_card_h3'>00:00 Hrs</h3>
                                                    <p>Duration</p>
                                                </div>
                                                <div className='hrs_set hrs_set_main'>
                                                    <p>00:00 Hrs</p>
                                                    <span>End at</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='charging_station_p'>PV Charging Station</p>
                <div className='Dashboard_home_page'>
                    <div className='main_select_flex'>
                        <div className='select_flex'>
                            <h4>Charging Station</h4>
                            <div className={`Select_drop_down ${toggledrop1 === true ? "Select_active" : ""}`} >
                                <FormControl sx={{ m: 1, minWidth: 120 }} onClick={droptoggle1}>
                                    <Select
                                        value={age1}
                                        onChange={handleChange1}
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
                    </div>
                    <div className='Dashboard_cards_main'>
                        <div className='Dashboard_cards_row'>
                            <div className='dashboard_items'>
                                <div className='Dashboard_item'>
                                    <div className='Dashboard_card Dashboard_card_4'>
                                        <div className='Status_flex'>
                                            <span className='Status_span'>Status</span>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_2_681)">
                                                    <path d="M17 21H7C5.58323 21.0009 4.21184 20.5004 3.12868 19.5872C2.04552 18.6739 1.32047 17.4069 1.0819 16.0103C0.843337 14.6138 1.10665 13.1779 1.82523 11.9568C2.5438 10.7358 3.67127 9.80847 5.008 9.33899C4.96271 8.39265 5.11001 7.44697 5.44096 6.55923C5.7719 5.67149 6.27962 4.86017 6.93334 4.17441C7.58707 3.48866 8.37319 2.94275 9.2441 2.56975C10.115 2.19675 11.0526 2.00443 12 2.00443C12.9474 2.00443 13.885 2.19675 14.7559 2.56975C15.6268 2.94275 16.4129 3.48866 17.0667 4.17441C17.7204 4.86017 18.2281 5.67149 18.559 6.55923C18.89 7.44697 19.0373 8.39265 18.992 9.33899C20.3287 9.80847 21.4562 10.7358 22.1748 11.9568C22.8933 13.1779 23.1567 14.6138 22.9181 16.0103C22.6795 17.4069 21.9545 18.6739 20.8713 19.5872C19.7881 20.5004 18.4168 21.0009 17 21ZM17 8.99999C17.0002 8.333 16.867 7.67269 16.6082 7.05796C16.3494 6.44323 15.9702 5.88649 15.493 5.42053C15.0157 4.95457 14.4501 4.58881 13.8293 4.34478C13.2086 4.10075 12.5453 3.98339 11.8785 3.9996C11.2117 4.01582 10.5548 4.16528 9.94669 4.43919C9.33853 4.7131 8.79132 5.10592 8.33728 5.59452C7.88325 6.08312 7.53156 6.65763 7.30292 7.28421C7.07429 7.9108 6.97333 8.5768 7.006 9.24299L7.076 10.731L5.672 11.225C4.7825 11.5396 4.03275 12.1583 3.55509 12.9719C3.07744 13.7856 2.90261 14.7418 3.06146 15.6718C3.22031 16.6018 3.70262 17.4458 4.42326 18.0548C5.1439 18.6637 6.05652 18.9985 7 19H17C17.7363 18.9998 18.4583 18.7963 19.0864 18.4119C19.7145 18.0276 20.2243 17.4774 20.5597 16.8219C20.8951 16.1663 21.043 15.431 20.9872 14.6967C20.9314 13.9625 20.674 13.258 20.2433 12.6607C19.8127 12.0634 19.2255 11.5966 18.5466 11.3116C17.8676 11.0267 17.1231 10.9347 16.3952 11.0458C15.6673 11.1569 14.9842 11.4667 14.4211 11.9412C13.858 12.4157 13.4369 13.0364 13.204 13.735L11.306 13.102C11.7048 11.9074 12.4693 10.8685 13.4912 10.1323C14.513 9.39613 15.7406 9 17 8.99999Z" fill="#298D74" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_2_681">
                                                        <rect width="24" height="24" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <h3 className='Dashboard_card_h3'>Charging Started</h3>
                                        <div className='Status_flex'>
                                            <div>
                                                <p className='Dashboard_card_kw'>0.00 kW</p>
                                                <span>Current Charging Power</span>
                                            </div>
                                            <div className='Start_btn'>
                                                <a href="#0">Start charging</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='Dashboard_item'>
                                    <div className='Dashboard_card Dashboard_card_5'>
                                        <div className='Status_flex'>
                                            <span className='Status_span'>PV Surplus Charging</span>
                                        </div>
                                        <div className='Status_flex margintd'>
                                            <div>
                                                <h3 className='Dashboard_card_h3'>0,00 kW</h3>
                                                <p>Power Supply</p>
                                            </div>
                                            <div className='switch_btn'>
                                                <FormControlLabel
                                                    control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                                                />
                                            </div>
                                        </div>
                                        <div className='last_updated'>
                                            <p>Last Updated a Few Second Ago</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='Dashboard_item'>
                                    <div className='Dashboard_card Dashboard_card_6'>
                                        <div className='Status_flex'>
                                            <span className='Status_span'>Last Charging Session</span>
                                        </div>
                                        <div className='Status_flex'>
                                            <div>
                                                <div className='margintd hrs_set'>
                                                    <h3 className='card_6_text'>19.75 kWh/ € 5.73</h3>
                                                    <span>Charged Current</span>
                                                </div>
                                                <div className='hrs_set hrs_set_main'>
                                                    <p className='card_6_text'>3hr 22 sec</p>
                                                    <span>Loading Time</span>
                                                </div>
                                            </div>
                                            <div>
                                                <div className='margintd hrs_set'>
                                                    <h3 className='card_6_text'>13:51:47, 21.07.22</h3>
                                                    <span>Launched</span>
                                                </div>
                                                <div className='hrs_set hrs_set_main'>
                                                    <p className='card_6_text'>16:52:09, 21:.07.22</p>
                                                    <span>Completed</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='stop_charging_btn'>
                    <a href="#0">
                        <div className='stop_charging_flex'>
                            <p><img src={true_icon} alt="true_icon" /></p>
                            <span>Stop Charging</span>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Dashboard_home;