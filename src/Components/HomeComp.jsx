import { Box, Typography, TextField, Container, Button } from '@mui/material'
import React from 'react'
import Top_Destination_Card from './Top_Destination_Card';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Flight_Book from './Flight_Book';
import Left from './Buttons/Left';
import Right from './Buttons/Right';
import FeaturedHomes from './FeaturedHomes';




function HomeComp() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        swipeToSlide: true,
        nextArrow: <Right />,
        prevArrow: <Left />

    };

    const indianCitiesWithAccommodations = [
        {
            city: "Mumbai",
            accommodation: "2233 Accommodations",

        },
        {
            city: "Delhi",
            accommodation: "3000 Accommodations",

        },
        {
            city: "Bangalore",
            accommodation: "1800 Accommodations",

        },
        {
            city: "Chennai",
            accommodation: "2500 Accommodations",
        },
        {
            city: "Kolkata",
            accommodation: "2000 Accommodations",

        },
        // Include data for other cities similarly
    ];

    return (
        <Typography component="div" sx={{ width: "100%" }}>

            <Typography component="div" sx={{ width: "100%", height: "100%" }} >
                {/* <Box sx={{ width: "100%", height: "500px", display: "block", position: "relative" }}

                    component="img" src='https://media.istockphoto.com/id/1131335393/photo/beautiful-sunrise-cloudy-sky-from-aerial-view.webp?b=1&s=170667a&w=0&k=20&c=PPqnpwY2HlzjYmhjOh5IAr9gtIk36ndq_qf_08DlXBA='>

                </Box>
                <Typography sx={{ display: "block", width: "100%" }} >

                    <Flight_Book />

                </Typography> */}
                <Typography component="div" sx={{ position: "relative", width: "100%", height: "100%" }}>
                    <Box sx={{ width: "100%", height: "500px", position: "relative" }}>
                        <img
                            src='https://media.istockphoto.com/id/924694848/photo/global-travel-network.webp?b=1&s=170667a&w=0&k=20&c=tkPUytTWT_TvpLAgfI48_ckl7cJDM0y3lwLryCaHfhk='
                            alt="background"
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                        <div style={{ position: "absolute", top: "90%", left: "50%", transform: "translate(-50%, -50%)" }}>
                            <Flight_Book />
                        </div>
                    </Box>
                </Typography>

                <Container maxWidth="lg" sx={{ marginTop: "200px", backgroundColor: "grey.100", borderRadius: "15px" }}>
                    <Typography component="div" sx={{ padding: "70px 0px", marginTop: "20px" }}>
                        <Typography variant="h4" sx={{ textAlign: "center", marginBottom: "8px" }}>
                            To Destinations In India
                        </Typography>

                        <Slider {...settings}>
                            {
                                indianCitiesWithAccommodations.map((place, idx) => {
                                    return (
                                        <Top_Destination_Card city={place.city} accommadation={place.accommodation} key={idx} />
                                    )
                                })
                            }
                        </Slider>


                    </Typography>

                </Container>


                <Container maxWidth="lg" sx={{ marginTop: "100px" }}>
                    <Typography component="div">

                        <FeaturedHomes />
                    </Typography>
                </Container>

            </Typography>


        </Typography>

    )
}

export default HomeComp
