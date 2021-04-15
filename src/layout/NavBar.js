import { AppBar, Box, Button, IconButton, makeStyles, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    setDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex"
        }
    },
    setMobile: {
        display: "flex",
        [theme.breakpoints.up("md")]: {
            display: "none"
        }
    }
}))

function NavBar() {
    const classes = useStyles()

    const [manuItem, setmanuItem] = useState(null)
    const isMobileMenuOpen = Boolean(manuItem)

    const openMenu = (event) => {
        console.log(event.currentTarget)
        setmanuItem(event.currentTarget)
    }

    const closeMenu = () => {
        setmanuItem(null)
    }

    const mobileMenu = (
        <Menu anchorEl={manuItem} keepMounted open={isMobileMenuOpen}>
            <MenuItem onClick={closeMenu} component={Link} to="/">Home</MenuItem>
            <MenuItem onClick={closeMenu} component={Link} to="/about">About</MenuItem>
            <MenuItem onClick={closeMenu} component={Link} to="/contact">Contact</MenuItem>
        </Menu>
    )
    return (
        <>
            <AppBar>
                <Toolbar>
                    <Typography variant="h5" style={{ flexGrow: 1 }}>USERS</Typography>
                    <Box className={classes.setDesktop}>
                        <Button component={NavLink} to="/" color="inherit">Home</Button>
                        <Button component={NavLink} to="/about" color="inherit">About</Button>
                        <Button component={NavLink} to="/contact" color="inherit">Contact</Button>
                    </Box>
                    <IconButton onClick={openMenu} color="inherit" className={classes.setMobile}><MoreVertIcon /></IconButton>
                </Toolbar>
            </AppBar>
            {mobileMenu}
        </>
    )
}

export default NavBar
