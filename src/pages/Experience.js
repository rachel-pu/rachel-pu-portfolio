import React from 'react';
import '../css/Experience.css';
import { Typography, Box, Grid} from '@mui/material';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import experienceList from '../json/ExperienceJSON.json';

function Experience() {
    return (
        <Box className="experience-page" id="experience">
            <Typography variant='h2' sx={{fontFamily:'Liga-Sans-Bold', textAlign: 'center'}}>Experience</Typography>
            <VerticalTimeline
                className = "timeline"
                layout="1-column">
                {experienceList.map((experience, index) => (
                    <VerticalTimelineElement
                        key={index}
                        className='vertical-timeline-element'
                        contentStyle={{ background: experience.type === 'work' ? 'rgb(68,157,217)' : 'rgb(222,69,118)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '15px solid #1E1D1D' }}
                        iconStyle={{ background: experience.type === 'work' ? 'rgb(68,157,217)' : 'rgb(222,69,118)', color: '#fff' }}
                        position="right"
                    >
                        <Box className = "timeline-elements">
                            {/* title */}
                            <Typography className="title-text" color={'#212121'} sx={{fontFamily: "Liga-Sans-Bold", fontWeight: "bold", fontVariantLigatures:"no-common-ligatures"}}>{experience.title}</Typography>

                            {/* company/location */}
                            <Typography className="company-location-text" color={'#212121'}>{experience.companyLocation}</Typography>

                            {/* date */}
                            <Typography className="duration-text" color={'#212121'}>{experience.date}</Typography>

                            {/* description */}
                            <ul>
                                {experience.description.map((bullet, i) => (
                                    <li key={i} className="bullet-point">
                                        <Typography className = "description-text" color={'#212121'}>{bullet}</Typography>
                                    </li>
                                ))}
                            </ul>

                        </Box>
                    </VerticalTimelineElement>
                ))}

            </VerticalTimeline>
        </Box>
    );
}

export default Experience;