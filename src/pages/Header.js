import React, {useState, MouseEvent} from 'react';
import '../css/Header.css';
import {HashLink} from "react-router-hash-link";
import {AppBar, Toolbar, Box, Typography, Button, IconButton, Menu, MenuItem, Grid} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import MenuIcon from '@mui/icons-material/Menu';
import DownloadIcon from '@mui/icons-material/Download';
import Typewriter from 'typewriter-effect';
import {BsGithub, BsLinkedin} from "react-icons/bs";

function Header(){
    const [anchorNav, setAnchorNav] = useState(null);
    const openMenu = (event) => {
        setAnchorNav(event.currentTarget);
    }
    const closeMenu = () => {
        setAnchorNav(null);
    }

    return (
        <div id="home">
        {/*// navbar*/}
        <AppBar position='static' elevation={0} sx={{ backgroundColor: '#F9F6E9', boxShadow: 'none', color: 'black' }}>
            <Toolbar>
                <IconButton size = 'large' edge='start' color='inherit' aria-label='logo' sx={{display:{xs:'none', md:'flex'}}}>
                    <StarIcon/>
                </IconButton>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1, display:{xs:'none', md:'flex', fontFamily: 'Liga-Sans-Bold'}}}>Rachel Pu</Typography>

            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Button color='inherit' component={HashLink} to='#home' sx={{ fontFamily: 'InterTight-Medium', textTransform: 'none' }}>Home</Button>
                <Button color='inherit' component={HashLink} to='#about' sx={{ fontFamily: 'InterTight-Medium', textTransform: 'none' }}>About</Button>
                <Button color='inherit' component={HashLink} to='#experience' sx={{ fontFamily: 'InterTight-Medium', textTransform: 'none' }}>Experience</Button>
                <Button color='inherit' component={HashLink} to='#projects' sx={{ fontFamily: 'InterTight-Medium', textTransform: 'none' }}>Projects</Button>
                <Button color='inherit' component={HashLink} to='#extracurriculars' sx={{ fontFamily: 'InterTight-Medium', textTransform: 'none' }}>Extracurriculars</Button>
                <Button color='inherit' component={HashLink} to='#contact' sx={{ fontFamily: 'InterTight-Medium', textTransform: 'none' }}>Contact</Button>
            </Box>

            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton size='large' color='inherit' onClick={openMenu} className="menu-icon-button">
                    <MenuIcon />
                </IconButton>
                <Menu anchorEl={anchorNav} open={Boolean(anchorNav)} onClose={closeMenu}>
                    <MenuItem onClick={closeMenu} component={HashLink} to='#home' sx={{ fontFamily: 'InterTight-Medium', textTransform: 'none' }}>Home</MenuItem>
                    <MenuItem onClick={closeMenu} component={HashLink} to='#about' sx={{ fontFamily: 'InterTight-Medium', textTransform: 'none' }}>About</MenuItem>
                    <MenuItem onClick={closeMenu} component={HashLink} to='#experience' sx={{ fontFamily: 'InterTight-Medium', textTransform: 'none' }}>Experience</MenuItem>
                    <MenuItem onClick={closeMenu} component={HashLink} to='#projects' sx={{ fontFamily: 'InterTight-Medium', textTransform: 'none' }}>Projects</MenuItem>
                    <MenuItem onClick={closeMenu} component={HashLink} to='#extracurriculars' sx={{ fontFamily: 'InterTight-Medium', textTransform: 'none' }}>Extracurriculars</MenuItem>
                    <MenuItem onClick={closeMenu} component={HashLink} to='#contact' sx={{ fontFamily: 'InterTight-Medium', textTransform: 'none' }}>Contact</MenuItem>
                </Menu>

                    <IconButton size = 'large' edge='start' color='inherit' aria-label='logo' sx={{display:{xs:'flex', md:'none'}}}>
                        <StarIcon/>
                    </IconButton>
                    <Typography variant='h6' component='div' sx={{ flexGrow: 1, display:{xs:'flex', md:'none'}, alignItems: 'center', justifyContent: 'center', fontFamily: 'Liga-Sans-Bold'}}>Rachel Pu</Typography>
                </Box>
            </Toolbar>
        </AppBar>

    {/* header text box */}
    <Box className="home-main-header" id="home" >
        <h1>hello! i'm</h1>
        {/* typewriter animation */}
        <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString('Rachel Pu')
                        .callFunction((state) => {
                            // turn off animation
                            state.elements.cursor.style.animation = 'none'
                            // hide cursor
                            state.elements.cursor.style.opacity = 0;
                        })
                        .start();
                }}/>

        {/* short description */}
        <h2 className="short-description-home">I'm an undergraduate student at the <span
            style={{color: "#F86B1CFF"}}>University</span> of <span style={{color: "#3674E0"}}>Florida. </span>
            I enjoy building all sorts of applications while exploring AI's potential.</h2>

        {/* buttons div box */}
        <Box className = "buttons">
        <Grid container spacing={1.5}>
            <Grid item>
                {/* download button */}
                <Button
                    endIcon={<DownloadIcon />}
                    sx={{
                        backgroundColor: "#282c34",
                        color: "#F9F6E9",
                        padding: "10px",
                        borderRadius: "20px",
                        width: "200px",
                        boxShadow: '0px 1px 4px rgba(51, 68, 31, 0.37)',
                        transition: "transform 0.25s ease-in-out",
                        '&:hover': {
                            backgroundColor: "#282c34",
                            transform: "scale(1.05)"
                        }
                    }}
                >
                    <a
                        href="/files/Rachel_Pu_Resume.pdf"
                        download="Rachel_Pu_Resume.pdf"
                        style={{
                            textDecoration: 'none',
                            color: 'inherit'}}
                    >
                        <Typography sx={{ fontFamily: 'InterTight-Medium', textTransform: 'none', fontSize: "1rem" }}>
                            Resume / CV
                        </Typography>
                    </a>
                </Button>
            </Grid>

            {/* github button*/}
            <Grid item>
                <IconButton
                    href="https://github.com/rachel-pu"
                    sx={{
                    backgroundColor: 'white',
                    color: 'inherit',
                    fontSize: '175%',
                    boxShadow: '0px 1px 4px rgba(51, 68, 31, 0.37)',
                    transition: "transform 0.25s ease-in-out, background-color 0.25s ease-in-out",
                    '&:hover': {
                        backgroundColor: "#e78c5b",
                        transform: "scale(1.05)"
                }}}>
                    <BsGithub className="icon" />
                </IconButton>
            </Grid>

            {/* linkedin button */}
            <Grid item>
                <IconButton
                    href="https://www.linkedin.com/in/rachel-pu-ufl/"
                    sx={{
                    backgroundColor: 'white',
                    color: 'inherit',
                    fontSize: '175%',
                    boxShadow: '0px 1px 4px rgba(51, 68, 31, 0.37)',
                    transition: "transform 0.25s ease-in-out, background-color 0.25s ease-in-out",
                    '&:hover': {
                        backgroundColor: "#658ae7",
                        transform: "scale(1.05)"
                }}}>
                    <BsLinkedin className="icon" />
                </IconButton>
            </Grid>
        </Grid>
        </Box>

        </Box>
    </div>

    );

}

export default Header;