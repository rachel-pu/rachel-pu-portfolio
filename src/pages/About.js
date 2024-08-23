import React from 'react';
import {Grid} from "@mui/material";

function About(){
    return (
        <div className="about-page" id="about">
            <Grid container spacing={1}>

                {/* about me description*/}
                <Grid item>
                    <h1>About Me</h1>
                    <p> I'm an undergrad pursuing a B.S. in
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
                    </p>
                </Grid>
                {/* about me image*/}
                <Grid item>

                </Grid>
            </Grid>
        </div>
    );

}

export default About;