import '../css/About.css';
import React from 'react';
import {Grid, Typography, useMediaQuery, Box} from "@mui/material";

function About(){

    const isHalfScreen = useMediaQuery('(max-width:992px)');

    return (
        <Box className="about-page" id="about" display="flex" justifyContent="center" alignItems="center">
            <Grid container
                  spacing={5}
                  direction={isHalfScreen ? 'column' : 'row'}
                  rowSpacing={1}
                  sx={{paddingLeft: '5%', paddingRight: '5%'}}>
                {/* about me description*/}
                <Grid item xs >
                    {/* header */}
                    <Typography variant="h2" sx={{fontFamily:'Liga-Sans-Bold'}}>About Me</Typography>

                    {/* description */}
                    <Typography className = "about-me-description" sx={{fontFamily: 'InterTight-Medium', lineHeight:'1.5'}}>
                        I'm an undergrad pursuing a B.S. in
                        <span style={{color: "#799842", fontFamily:"Liga-Sans-Bold"}}> Computer Science</span>, minor in
                        <span style={{color: "#799842", fontFamily:"Liga-Sans-Bold"}}> Digital Arts & Sciences</span>, and UF's Certificate in
                        <span style={{color: "#799842", fontFamily:"Liga-Sans-Bold"}}> AI Fundamentals and Applications. </span>
                        I love learning new things and am passionate about developing all kinds of applications.
                        I'm currently exploring ways to integrate LLMs into my work.
                        <br/>
                        <br/>
                        Besides school, I'm one of the Co-Director of Events for
                        <span style={{color: "#799842", fontFamily:"Liga-Sans-Bold"}}> CS KickStart</span>, a club dedicated to empowering women in tech
                        through introductory CS/engineering programs.
                        I'm also a
                        <span style={{color: "#799842", fontFamily:"Liga-Sans-Bold"}}> varsity lion dancer</span>!
                        <br/>
                        <br/>
                    </Typography>
                </Grid>

                {/* about me image*/}
                <Grid item xs>
                    <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                        <img className="rachel-image" src='/files/unnamed.jpg' />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );

}

export default About;