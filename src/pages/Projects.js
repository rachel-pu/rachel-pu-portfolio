import React from 'react';
import {Card, CardContent, Grid, Box, Typography, IconButton} from "@mui/material";
import { Button, CardActionArea, CardActions } from '@mui/material';
import projectsList from '../json/ProjectsJSON.json';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../css/Projects.css";

function Projects(){
    return (
        <Box className="projects-page" id="projects">
            <Typography variant="h2" sx={{fontFamily:'Liga-Sans-Bold', textAlign: 'center'}}>Projects</Typography>
            <Grid container spacing={2} className = "project-grid">
                {projectsList.map((project, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card className = "project-card" >
                                <CardContent>
                                    {/* project title */}
                                    <Typography component="div" className = "project-title">{project.name}</Typography>
                                    {/* project description*/}
                                    <Typography className = "project-description">{project.description}</Typography>
                                </CardContent>

                                {/* project skills */}
                                <CardActions>
                                    {project.skills.map((skill, index) => (
                                        <Grid  xs="auto">
                                            <Grid item>
                                                <Button disabled key={index} size="small" variant="contained" disableElevation>
                                                    <Typography variant="body" sx={{fontFamily: "InterTight-Medium"}}>{skill}</Typography>
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    ))}
                                </CardActions>

                                <CardActions>
                                    <IconButton onClick={() => window.open(project.github, '_blank')}>
                                        <GitHubIcon sx={{fontSize: '2rem'}}/>
                                    </IconButton>
                                </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Projects;