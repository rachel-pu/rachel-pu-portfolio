import React from 'react';
import {Card, CardContent, Grid, Box, Typography} from "@mui/material";
import { Button, CardActionArea, CardActions } from '@mui/material';
import projectsList from '../json/ProjectsJSON.json';
import "../css/Projects.css";

function Projects(){
    return (
        <Box className="projects-page" id="projects">
            <Typography variant="h2" sx={{fontFamily:'Liga-Sans-Bold', textAlign: 'center'}}>Projects</Typography>
            <Grid container spacing={2} className = "project-grid">
                {projectsList.map((project, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card className = "project-card">
                            <CardActionArea>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        {project.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {project.description}
                                    </Typography>
                                </CardContent>

                                <CardActions>
                                    {project.skills.map((skill, index) => (
                                        <Button key={index} size="small" color="primary">
                                            {skill}
                                        </Button>
                                    ))}
                                </CardActions>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Projects;