import React from 'react';
import {Box, Typography, Grid, Input} from "@mui/material";
import '../css/Contact.css';

function Contact(){
    return (
        <Box className="contact-page" id="contact">
            <Typography variant="h2" sx={{fontFamily:'Liga-Sans-Bold'}}>Contact Me</Typography>
            {/* main contact grid*/}
            <Grid container spacing={50}>
                {/* contact description */}
                <Grid item>
                    <Typography className="contact-description">Interested in chatting?<br/>
                        Feel free to send me an email using this form.
                    </Typography>
                </Grid>
                {/* contact form grid */}
                <Grid item>
                    {/* grid for individual contact stuff */}
                    <Grid>
                        <Grid item>
                            <Typography className="label">Name</Typography>
                            <Input variant="outlined"/>
                        </Grid>
                        <Grid item>
                            <Typography className="label">Email</Typography>
                            <Input/>
                        </Grid>
                        <Grid item>
                            <Typography className="label">Message</Typography>
                            <textarea/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );

}

export default Contact;