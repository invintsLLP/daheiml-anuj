import React, { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { Line, Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';
ChartJS.register(
    Title, Tooltip, LineElement, Legend,
    CategoryScale, LinearScale, PointElement, Filler
)

const Analytics_page = () => {

    // Select_drop_down 10
    const [age10, setAge10] = React.useState('');

    const handleChange10 = (event) => {
        setAge10(event.target.value);
    };

    const [toggledrop10, settoggledrop10] = useState();
    const droptoggle10 = () => {
        settoggledrop10(!toggledrop10);
        const headermenu = document.querySelector(".Select_drop_down");
        headermenu.classList.toggle("Select_active");
    };

    // chart_line
    const [linedata, setData] = useState({
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "First dataset",
                data: [50, 100, 140, 190, 240, 15],
                fill: "start",
                backgroundColor: (context: ScriptableContext<"line">) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(25, 0, 0, 300);
                    gradient.addColorStop(0, "rgb(41 141 116 / 20%)");
                    gradient.addColorStop(1, "rgba(41, 141 ,116,0)");
                    return gradient;
                },
                borderColor: "#298D74",
                borderWidth: 1,
                pointRadius: 4,
                tension: 0.4,
            }
        ]
    })

    // chart_bar
    const bardata = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
            data: [15, 25, 30, 43, 53, 8],
            backgroundColor: [
                '#298D74',
                '#298D74',
                '#298D74',
                '#298D74',
                '#298D74',
                '#298D74',
                '#298D74'
            ],
            borderWidth: 1,
            borderRadius: 50,
            barPercentage: 0.3,
        }]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                    barPercentage: 0.5,
                    borderColor:'#fff',
                },
                angleLines: {
                    display: false
                },
                ticks: {
                    font: {
                        size: 16,
                        weight: 500,
                        color: "red",
                    }
                },
            },
            y: {
                grid:{
                    borderColor:'#fff',
                    borderDash: [4, 7],
                    color: "#bebebe"
                },
                ticks: {
                    callback: (label) => `${label}€`,
                    font: {
                        size: 16,
                        weight: 500,
                    }
                },
              
            },
        },
    };

    const options_Line = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                    barPercentage: 0.5,
                    borderColor:'#fff',
                },
                ticks: {
                    font: {
                        size: 16,
                        weight: 500,
                        color: "red",
                    }
                },
                gridLines: {
                    borderDash: [8, 4],
                    color: "#348632"
                }
            },
            y: {
                grid:{
                    borderColor:'#fff',
                    borderDash: [4, 7],
                    color: "#bebebe"
                },
                ticks: {
                    callback: (label) => `${label}Kwh`,
                    font: {
                        size: 16,
                        weight: 500,
                        color: "red",
                    }
                },
            },
        },
    };

    return (
        <>
            <div className='main_wrap_pages'>
                <div className='analytics_page'>
                    <div className='select_flex'>
                        <h4>Charging Station</h4>
                        <div className="Select_drop_down">
                            <FormControl sx={{ m: 1, minWidth: 120 }} onClick={droptoggle10}>
                                <Select
                                    value={age10}
                                    onChange={handleChange10}
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
                    <div className='chart_row'>
                        <div className='charts'>
                            <div className='chart_item'>
                                <div className='chart_Line'>
                                    <p>Power Consumption</p>
                                    <div className='chart_block'>
                                        <Line data={linedata} options={options_Line} id="chart"></Line>
                                    </div>
                                </div>
                            </div>
                            <div className='chart_item'>
                                <div className='chart_bar'>
                                    <p>Electricity Costs</p>
                                    <div className='chart_block'>
                                        <Bar data={bardata} options={options} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Analytics_page;