import { Typography, Container, Grid, } from '@mui/material';
import React from 'react';
import DashBoard_Card from './DashBoard_Card';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import GroupIcon from '@mui/icons-material/Group';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MenuIcon from '@mui/icons-material/Menu';
import Graph_Chart from './Graph_Chart'; // Update import statement
import Pie_Chart from './Pie_Chart';


const DashboardPage = () => {
    

   
    const cardInputs = [
        {
            title: "Budget",
            avatarColor: "orange",
            avatarIcon: <MonetizationOnIcon sx={{ width: "20px" }} />,
            amount: "25 K",
            changePercentage: "12%",
            changeDescription: "Since last month",
            actionIcon: <ArrowUpwardIcon color='success' sx={{ width: "20px" }} />,
            color: "green",
        },
        {
            title: "Budget",
            avatarColor: "green",
            avatarIcon: <GroupIcon sx={{ width: "20px" }} />,
            amount: "25 K",
            changePercentage: "12%",
            changeDescription: "Since last month",
            actionIcon: <ArrowDownwardIcon sx={{ color: "red", width: "20px" }} />,
            color: "red",
        },
        {
            title: "Budget",
            avatarColor: "red",
            avatarIcon: <MenuIcon sx={{ width: "20px" }} />,
            amount: "25 K",
            changePercentage: "",
            changeDescription: "",

            slider: "s",

            actionIcon: ""
        },
        {
            title: "Budget",
            avatarColor: "blue",
            avatarIcon: <MonetizationOnIcon sx={{ width: "20px" }} />,
            amount: "25 K",
            changePercentage: "",
            changeDescription: "",
            actionIcon: ""
        }
    ];

    return (
        <Container maxWidth="lg">
            <Typography component="div" sx={{ margin: "50px", paddingTop: "40px", paddingBottom: "40px", width: "100%" }}>
                <Typography sx={{ display: "flex" }}>
                    {cardInputs.map((item, idx) => {
                        return (
                            <DashBoard_Card
                                key={idx}
                                {...item}
                            />
                        );
                    })}
                </Typography>
                <Typography sx={{ display: "flex", flexWrap: "", marginTop: "50px", justifyContent: "left" }}>
                    <Typography sx={{ width: "full", ml:1}}>

                        <Typography sx={{ padding: "20px", boxShadow: "2px 2px 10px  grey", borderRadius: "10px" }}>
                            Sales
                            <Graph_Chart />
                        </Typography>

                    </Typography>
                    <Typography sx={{ width: "full", marginLeft: "25px", alignItems: "center", boxShadow: "2px 2px 10px  grey", borderRadius: "10px" }}>

                        <Typography>
                            <Pie_Chart/>
                          </Typography>

                    </Typography>

                </Typography>

            </Typography>

        </Container>
    );
};

export default DashboardPage;
