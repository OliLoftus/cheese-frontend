import React from 'react';
import {useState} from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

const currentURL = window.location.href;
const targetPath = '/';
const cheeseTypes = [
    "Hard",
    "Soft",
    "Artisan",
    "Fresh-Soft",
    "Fresh-Firm",
    "Semi-Soft",
    "Semi-Hard",
    "Firm",
    "Semi-Firm",
]; // update this with the actual types we can search for


const handleClick = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("userId");

    if (currentURL !== targetPath) {
        window.location.reload();
    }
};

const NavigationBar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [token, setToken] = useState(window.localStorage.getItem("token"));

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const open = Boolean(anchorEl);
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static">
            <Container>
                <Toolbar
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Link data-cy="home" to="/">
                        <h1>Brielievers</h1>
                    </Link>
                    <nav>
                        <Button
                            color="inherit"
                            style = {{backgroundColor: 'white', marginRight: "10px", boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)'}}
                            id="basic-button"
                            aria-controls={open ? "basic-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleMenuOpen}
                        >
                            Select Cheese Type
                        </Button>
                        <Menu
                            data-cy="cheese-menu"
                            id="cheese-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                            
                        >
                            {cheeseTypes.map((cheeseType) => (
                                <MenuItem
                                    key={cheeseType}
                                    onClick={handleMenuClose}
                                    style={{width: '179px'}}
                                >
                                    <Link
                                        to={`/cheeses/type/${cheeseType.toLowerCase()}`}
                                        style={{ textDecoration: "none" }}
                                    >
                                        {cheeseType}
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                        <Button style={{display: token ?  "none" : "inline", marginRight: "10px"}} data-cy="signin" to="/" color="inherit" component={Link}>
                            <LoginIcon style={{position: 'relative', top:'5px'}}/> 
                            <span style={{position: 'relative', top: '-2px',left: '5px'}}>Sign In</span>
                        </Button>
                        <Button style ={{display: token ? "inline": "none"}} data-cy="logout" to="/" color="inherit" component={Link}>
                            <LogoutIcon style={{position: 'relative', top:'5px'}}/> 
                            <span style={{position: 'relative', top: '-2px',left: '5px'}}>Logout</span>
                        </Button>
                    </nav>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavigationBar;
