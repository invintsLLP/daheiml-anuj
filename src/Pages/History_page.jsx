import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const columns = [
    { id: 'Meter_Start', label: 'Meter Start (kWh)', maxwidth: 70 },
    { id: 'Meter_Stop', label: 'Meter Stop (kWh)', maxwidth: 70 },
    { id: 'Power_Used', label: 'Power Used (kWh)', maxwidth: 70 },
    { id: 'Cost', label: 'Cost', maxwidth: 70 },
    { id: 'Start_at', label: 'Start at', maxwidth: 70 },
    { id: 'End_at', label: 'End at', maxwidth: 70 },
    { id: 'Local_Remote', label: 'Local/Remote', maxwidth: 70 },
    { id: 'State', label: 'State', maxwidth: 70 },
    { id: 'ID_Tag', label: 'ID Tag', maxwidth: 70 },
    { id: 'Transaction_ID', label: 'Transaction ID', maxwidth: 70 },
];

function createData(Meter_Start, Meter_Stop, Power_Used, Cost, Start_at, End_at, Local_Remote, State, ID_Tag, Transaction_ID) {
    return { Meter_Start, Meter_Stop, Power_Used, Cost, Start_at, End_at, Local_Remote, State, ID_Tag, Transaction_ID };
}

const rows = [
    createData(96240, 5464464, 3287263, 22.2, 3287263, 96240, "Remote", "Settled", 3287263, 3287263),
    createData(96240, 5464464, 3287263, 22.2, 3287263, 96240, "Remote", "Settled", 3287263, 3287263),
    createData(96240, 5464464, 3287263, 22.2, 3287263, 96240, "Remote", "Settled", 3287263, 3287263),
    createData(96240, 5464464, 3287263, 22.2, 3287263, 96240, "Remote", "Settled", 3287263, 3287263),
    createData(96240, 5464464, 3287263, 22.2, 3287263, 96240, "Remote", "Settled", 3287263, 3287263),
    createData(96240, 5464464, 3287263, 22.2, 3287263, 96240, "Remote", "Settled", 3287263, 3287263),
    createData(96240, 5464464, 3287263, 22.2, 3287263, 96240, "Remote", "Settled", 3287263, 3287263),
    createData(96240, 5464464, 3287263, 22.2, 3287263, 96240, "Remote", "Settled", 3287263, 3287263),
    createData(96240, 5464464, 3287263, 22.2, 3287263, 96240, "Remote", "Settled", 3287263, 3287263),
    createData(96240, 5464464, 3287263, 22.2, 3287263, 96240, "Remote", "Settled", 3287263, 3287263),
    createData(96240, 5464464, 3287263, 22.2, 3287263, 96240, "Remote", "Settled", 3287263, 3287263),
    createData(96240, 5464464, 3287263, 22.2, 3287263, 96240, "Remote", "Settled", 3287263, 3287263),
    createData(96240, 5464464, 3287263, 22.2, 3287263, 96240, "Remote", "Settled", 3287263, 3287263),
    createData(96240, 5464464, 3287263, 22.2, 3287263, 96240, "Remote", "Settled", 3287263, 3287263),
    createData(96240, 5464464, 3287263, 22.2, 3287263, 96240, "Remote", "Settled", 3287263, 3287263),
    createData(96240, 5464464, 3287263, 22.2, 3287263, 96240, "Remote", "Settled", 3287263, 3287263),
    createData(96240, 5464464, 3287263, 22.2, 3287263, 96240, "Remote", "Settled", 3287263, 3287263),
    createData(96240, 5464464, 3287263, 22.2, 3287263, 96240, "Remote", "Settled", 3287263, 3287263),
    createData(96240, 5464464, 3287263, 22.2, 3287263, 96240, "Remote", "Settled", 3287263, 3287263),
    createData(96240, 5464464, 3287263, 22.2, 3287263, 96240, "Remote", "Settled", 3287263, 3287263),
    createData(96240, 5464464, 3287263, 22.2, 3287263, 96240, "Remote", "Settled", 3287263, 3287263),
    createData(96240, 5464464, 3287263, 22.2, 3287263, 96240, "Remote", "Settled", 3287263, 3287263),
    createData(96240, 5464464, 3287263, 22.2, 3287263, 96240, "Remote", "Settled", 3287263, 3287263),
    createData(96240, 5464464, 3287263, 22.2, 3287263, 96240, "Remote", "Settled", 3287263, 3287263),
    createData(96240, 5464464, 3287263, 22.2, 3287263, 96240, "Remote", "Settled", 3287263, 3287263),
    createData(96240, 5464464, 3287263, 22.2, 3287263, 96240, "Remote", "Settled", 3287263, 3287263),
    createData(96240, 5464464, 3287263, 22.2, 3287263, 96240, "Remote", "Settled", 3287263, 3287263),
    createData(96240, 5464464, 3287263, 22.2, 3287263, 96240, "Remote", "Settled", 3287263, 3287263),
    createData(96240, 5464464, 3287263, 22.2, 3287263, 96240, "Remote", "Settled", 3287263, 3287263),
    createData(96240, 5464464, 3287263, 22.2, 3287263, 96240, "Remote", "Settled", 3287263, 3287263),
    createData(96240, 5464464, 3287263, 22.2, 3287263, 96240, "Remote", "Settled", 3287263, 3287263),
    createData(96240, 5464464, 3287263, 22.2, 3287263, 96240, "Remote", "Settled", 3287263, 3287263),
    createData(96240, 5464464, 3287263, 22.2, 3287263, 96240, "Remote", "Settled", 3287263, 3287263),
    createData(96240, 5464464, 3287263, 22.2, 3287263, 96240, "Remote", "Settled", 3287263, 3287263),
    createData(96240, 5464464, 3287263, 22.2, 3287263, 96240, "Remote", "Settled", 3287263, 3287263),
    createData(96240, 5464464, 3287263, 22.2, 3287263, 96240, "Remote", "Settled", 3287263, 3287263),
    createData(96240, 5464464, 3287263, 22.2, 3287263, 96240, "Remote", "Settled", 3287263, 3287263),
    createData(96240, 5464464, 3287263, 22.2, 3287263, 96240, "Remote", "Settled", 3287263, 3287263),
    createData(96240, 5464464, 3287263, 22.2, 3287263, 96240, "Remote", "Settled", 3287263, 3287263),
    createData(96240, 5464464, 3287263, 22.2, 3287263, 96240, "Remote", "Settled", 3287263, 3287263),
    createData(96240, 5464464, 3287263, 22.2, 3287263, 96240, "Remote", "Settled", 3287263, 3287263),
    createData(96240, 5464464, 3287263, 22.2, 3287263, 96240, "Remote", "Settled", 3287263, 3287263),
    createData(96240, 5464464, 3287263, 22.2, 3287263, 96240, "Remote", "Settled", 3287263, 3287263),
];

const History_page = () => {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    // Select_drop_down 2
    const [age2, setAge2] = React.useState('');

    const handleChange2 = (event) => {
        setAge2(event.target.value);
    };

    const [toggledrop2, settoggledrop2] = useState(false);

    const droptoggle2 = () => {
        settoggledrop2(!toggledrop2);
    };

    // Select_drop_down 3
    const [age3, setAge3] = React.useState('');

    const handleChange3 = (event) => {
        setAge3(event.target.value);
    };

    const [toggledrop3, settoggledrop3] = useState(false);

    const droptoggle3 = () => {
        settoggledrop3(!toggledrop3);
    };

    // Select_drop_down 4
    const [age4, setAge4] = React.useState('');

    const handleChange4 = (event) => {
        setAge4(event.target.value);
    };

    const [toggledrop4, settoggledrop4] = useState(false);

    const droptoggle4 = () => {
        settoggledrop4(!toggledrop4);
    };

    // Select_drop_down 5
    const [age5, setAge5] = React.useState('');

    const handleChange5 = (event) => {
        setAge5(event.target.value);
    };

    const [toggledrop5, settoggledrop5] = useState(false);

    const droptoggle5 = () => {
        settoggledrop5(!toggledrop5);
    };

    // Select_drop_down 6
    const [age6, setAge6] = React.useState('');

    const handleChange6 = (event) => {
        setAge6(event.target.value);
    };

    const [toggledrop6, settoggledrop6] = useState(false);

    const droptoggle6 = () => {
        settoggledrop6(!toggledrop6);
    };

    return (
        <>
            <div className='main_wrap_pages'>
                <div className='history_page'>
                    <div className='teble_data_row'>
                        <div className='select_flex select_drop_margin select_drop_1'>
                            <h4>Charging Station</h4>
                            <div className={`Select_drop_down ${toggledrop2 === true ? "Select_active" : ""}`} >
                                <FormControl sx={{ m: 1, minWidth: 120 }} onClick={droptoggle2}>
                                    <Select
                                        value={age2}
                                        onChange={handleChange2}
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
                            <div className='refresh_icon_mobil'>
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
                        </div>
                        <div className='select_flex'>
                            <div className={`Select_drop_down select_drop_margin select_drop_2 ${toggledrop3 === true ? "Select_active" : ""}`} >
                                <FormControl sx={{ m: 1, minWidth: 120 }} onClick={droptoggle3}>
                                    <Select
                                        value={age3}
                                        onChange={handleChange3}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                        IconComponent = {KeyboardArrowDownIcon}
                                    >
                                        <MenuItem value="">
                                            <span>June</span>
                                        </MenuItem>
                                        <MenuItem value={10}>August</MenuItem>
                                        <MenuItem value={20}>July</MenuItem>
                                        <MenuItem value={30}>september</MenuItem>
                                    </Select>
                                    <FormHelperText>Without label</FormHelperText>
                                </FormControl>
                            </div>
                            <div className={`Select_drop_down select_drop_margin select_drop_2 ${toggledrop4 === true ? "Select_active" : ""}`} >
                                <FormControl sx={{ m: 1, minWidth: 120 }} onClick={droptoggle4}>
                                    <Select
                                        value={age4}
                                        onChange={handleChange4}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                        IconComponent = {KeyboardArrowDownIcon}
                                    >
                                        <MenuItem value="">
                                            <span>2022</span>
                                        </MenuItem>
                                        <MenuItem value={10}>2021</MenuItem>
                                        <MenuItem value={20}>2020</MenuItem>
                                        <MenuItem value={30}>2019</MenuItem>
                                    </Select>
                                    <FormHelperText>Without label</FormHelperText>
                                </FormControl>
                            </div>
                            <div className='refresh_icon_mobil'>
                                <div className='refresh_icon'>
                                    <a href="#0">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_38_437)">
                                                <path d="M1 14.5C0.999385 13.3955 1.28042 12.309 1.81655 11.3433C2.35268 10.3776 3.1262 9.56457 4.064 8.98101C4.31151 7.0511 5.2538 5.27751 6.71452 3.99217C8.17524 2.70682 10.0543 1.9978 12 1.9978C13.9457 1.9978 15.8248 2.70682 17.2855 3.99217C18.7462 5.27751 19.6885 7.0511 19.936 8.98101C21.0992 9.7047 22.0041 10.7774 22.5213 12.046C23.0385 13.3146 23.1417 14.7141 22.8161 16.0449C22.4906 17.3756 21.7528 18.5694 20.7083 19.4559C19.6638 20.3423 18.366 20.8761 17 20.981L7 21C3.644 20.726 1 17.922 1 14.5ZM16.848 18.987C17.7938 18.9143 18.6925 18.5445 19.4156 17.9305C20.1387 17.3166 20.6493 16.4898 20.8745 15.5682C21.0996 14.6467 21.0278 13.6776 20.6692 12.7994C20.3107 11.9211 19.6837 11.1787 18.878 10.678L18.071 10.175L17.951 9.23301C17.7641 7.7867 17.0569 6.45795 15.9616 5.4951C14.8663 4.53225 13.4578 4.0012 11.9995 4.0012C10.5412 4.0012 9.13272 4.53225 8.03742 5.4951C6.94213 6.45795 6.23493 7.7867 6.048 9.23301L5.928 10.175L5.123 10.678C4.3173 11.1786 3.69038 11.921 3.3318 12.7992C2.97321 13.6773 2.90129 14.6463 3.12631 15.5678C3.35133 16.4893 3.86177 17.3161 4.58475 17.9302C5.30773 18.5442 6.20625 18.9141 7.152 18.987L7.325 19H16.675L16.848 18.987ZM13 12H16L12 17L8 12H11V8.00001H13V12Z" fill="#298D74" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_38_437">
                                                    <rect width="24" height="24" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='select_drop_h6 select_drop_margin'>
                            <h6>Sort By:</h6>
                            <div className='select_flex'>
                                <div className={`Select_drop_down select_drop_3 select_drop_margin ${toggledrop5 === true ? "Select_active" : ""}`} >
                                    <FormControl sx={{ m: 1, minWidth: 120 }} onClick={droptoggle5}>
                                        <Select
                                            value={age5}
                                            onChange={handleChange5}
                                            displayEmpty
                                            inputProps={{ 'aria-label': 'Without label' }}
                                            IconComponent = {KeyboardArrowDownIcon}
                                        >
                                            <MenuItem value="">
                                                <span>Consumption</span>
                                            </MenuItem>
                                            <MenuItem value={10}>August</MenuItem>
                                            <MenuItem value={20}>July</MenuItem>
                                            <MenuItem value={30}>september</MenuItem>
                                        </Select>
                                        <FormHelperText>Without label</FormHelperText>
                                    </FormControl>
                                </div>
                                <div className={`Select_drop_down select_drop_4 select_drop_3 ${toggledrop6 === true ? "Select_active" : ""}`} >
                                    <FormControl sx={{ m: 1, minWidth: 120 }} onClick={droptoggle6}>
                                        <Select
                                            value={age6}
                                            onChange={handleChange6}
                                            displayEmpty
                                            inputProps={{ 'aria-label': 'Without label' }}
                                            IconComponent = {KeyboardArrowDownIcon}
                                        >
                                            <MenuItem value="">
                                                <span>ID Tag</span>
                                            </MenuItem>
                                            <MenuItem value={10}>2021</MenuItem>
                                            <MenuItem value={20}>2020</MenuItem>
                                            <MenuItem value={30}>2019</MenuItem>
                                        </Select>
                                        <FormHelperText>Without label</FormHelperText>
                                    </FormControl>
                                </div>
                            </div>
                        </div>
                        <div className='circle_icons'>
                            <div className='refresh_icon'>
                                <a href="#0">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_38_437)">
                                            <path d="M1 14.5C0.999385 13.3955 1.28042 12.309 1.81655 11.3433C2.35268 10.3776 3.1262 9.56457 4.064 8.98101C4.31151 7.0511 5.2538 5.27751 6.71452 3.99217C8.17524 2.70682 10.0543 1.9978 12 1.9978C13.9457 1.9978 15.8248 2.70682 17.2855 3.99217C18.7462 5.27751 19.6885 7.0511 19.936 8.98101C21.0992 9.7047 22.0041 10.7774 22.5213 12.046C23.0385 13.3146 23.1417 14.7141 22.8161 16.0449C22.4906 17.3756 21.7528 18.5694 20.7083 19.4559C19.6638 20.3423 18.366 20.8761 17 20.981L7 21C3.644 20.726 1 17.922 1 14.5ZM16.848 18.987C17.7938 18.9143 18.6925 18.5445 19.4156 17.9305C20.1387 17.3166 20.6493 16.4898 20.8745 15.5682C21.0996 14.6467 21.0278 13.6776 20.6692 12.7994C20.3107 11.9211 19.6837 11.1787 18.878 10.678L18.071 10.175L17.951 9.23301C17.7641 7.7867 17.0569 6.45795 15.9616 5.4951C14.8663 4.53225 13.4578 4.0012 11.9995 4.0012C10.5412 4.0012 9.13272 4.53225 8.03742 5.4951C6.94213 6.45795 6.23493 7.7867 6.048 9.23301L5.928 10.175L5.123 10.678C4.3173 11.1786 3.69038 11.921 3.3318 12.7992C2.97321 13.6773 2.90129 14.6463 3.12631 15.5678C3.35133 16.4893 3.86177 17.3161 4.58475 17.9302C5.30773 18.5442 6.20625 18.9141 7.152 18.987L7.325 19H16.675L16.848 18.987ZM13 12H16L12 17L8 12H11V8.00001H13V12Z" fill="#298D74" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_38_437">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
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
                    </div>
                    <p className='charging_station_p'>Charging History</p>
                    <div className='history_teble_main'>
                        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                            <TableContainer sx={{ maxHeight: 440 }}>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <TableRow>
                                            {columns.map((column) => (
                                                <TableCell
                                                    key={column.id}
                                                    align={column.align}
                                                    style={{ minWidth: column.minWidth }}
                                                >
                                                    {column.label}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows
                                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                            .map((row,index) => {
                                                return (
                                                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                                        {columns.map((column,index) => {
                                                            const value = row[column.id];
                                                            return (
                                                                <TableCell key={index} align={column.align}>
                                                                    {column.format && typeof value === 'number'
                                                                        ? column.format(value)
                                                                        : value}
                                                                </TableCell>
                                                            );
                                                        })}
                                                    </TableRow>
                                                );
                                            })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <TablePagination
                                rowsPerPageOptions={[10, 25, 100]}
                                component="div"
                                count={rows.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </Paper>
                    </div>
                    <div className='teble_card_main'>
                        <div className='teble_card_row'>
                            <div className='teble_card'>
                                <div className='teble_card_padding'>
                                    <div className='id_flex'>
                                        <p className='teble_card_p'><span>id tag:</span><span>60009010</span></p>
                                        <h6>Settled</h6>
                                    </div>
                                    <p className='teble_card_p'><span>Transaction ID: </span><span>800148084</span></p>
                                </div>
                                <div className='kwh_main'>
                                    <div className='kwh_text'>
                                        <h4>962,40</h4>
                                        <p>Meter Start (kWh)</p>
                                        <div>
                                            <span>7,50</span>
                                            <p>Power Used (kWh)</p>
                                        </div>
                                    </div>
                                    <div className='kwh_text'>
                                        <h4>969,90</h4>
                                        <p>Meter Stop (kWh)</p>
                                        <div>
                                            <span>2,17</span>
                                            <p>Cost</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='teble_card_padding'>
                                    <p className='teble_card_p'><span>Start at:</span><span>07:29:51, 20.06.22</span></p>
                                    <div className='id_flex'>
                                        <p className='teble_card_p'><span>end at:</span><span> 10:01:56, 20:06:22</span></p>
                                        <h6>Remote</h6>
                                    </div>
                                </div>
                            </div>
                            <div className='teble_card'>
                                <div className='teble_card_padding'>
                                    <div className='id_flex'>
                                        <p className='teble_card_p'><span>id tag:</span><span>60009010</span></p>
                                        <h6>Settled</h6>
                                    </div>
                                    <p className='teble_card_p'><span>Transaction ID: </span><span>800148084</span></p>
                                </div>
                                <div className='kwh_main'>
                                    <div className='kwh_text'>
                                        <h4>962,40</h4>
                                        <p>Meter Start (kWh)</p>
                                        <div>
                                            <span>7,50</span>
                                            <p>Power Used (kWh)</p>
                                        </div>
                                    </div>
                                    <div className='kwh_text'>
                                        <h4>969,90</h4>
                                        <p>Meter Stop (kWh)</p>
                                        <div>
                                            <span>2,17</span>
                                            <p>Cost</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='teble_card_padding'>
                                    <p className='teble_card_p'><span>Start at:</span><span>07:29:51, 20.06.22</span></p>
                                    <div className='id_flex'>
                                        <p className='teble_card_p'><span>end at:</span><span> 10:01:56, 20:06:22</span></p>
                                        <h6>Remote</h6>
                                    </div>
                                </div>
                            </div>
                            <div className='teble_card'>
                                <div className='teble_card_padding'>
                                    <div className='id_flex'>
                                        <p className='teble_card_p'><span>id tag:</span><span>60009010</span></p>
                                        <h6>Settled</h6>
                                    </div>
                                    <p className='teble_card_p'><span>Transaction ID: </span><span>800148084</span></p>
                                </div>
                                <div className='kwh_main'>
                                    <div className='kwh_text'>
                                        <h4>962,40</h4>
                                        <p>Meter Start (kWh)</p>
                                        <div>
                                            <span>7,50</span>
                                            <p>Power Used (kWh)</p>
                                        </div>
                                    </div>
                                    <div className='kwh_text'>
                                        <h4>969,90</h4>
                                        <p>Meter Stop (kWh)</p>
                                        <div>
                                            <span>2,17</span>
                                            <p>Cost</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='teble_card_padding'>
                                    <p className='teble_card_p'><span>Start at:</span><span>07:29:51, 20.06.22</span></p>
                                    <div className='id_flex'>
                                        <p className='teble_card_p'><span>end at:</span><span> 10:01:56, 20:06:22</span></p>
                                        <h6>Remote</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card_number'>
                            <p>1-15 of 43</p>
                            <div className='card_number_arrow'>
                                <a href="#0">
                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_38_852)">
                                            <path d="M11.1022 12L16.0522 16.95L14.6382 18.364L8.27417 12L14.6382 5.63599L16.0522 7.04999L11.1022 12Z" fill="#9D9D9D" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_38_852">
                                                <rect width="24" height="24" fill="white" transform="translate(0.27417)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                                <a href="#0">
                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_38_855)">
                                            <path d="M13.308 12L8.35799 16.95L9.77199 18.364L16.136 12L9.77199 5.63599L8.35799 7.04999L13.308 12Z" fill="rgb(41 141 116)" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_38_855">
                                                <rect width="24" height="24" fill="white" transform="matrix(-1 0 0 1 24.136 0)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default History_page;