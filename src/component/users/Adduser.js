import { Box, Button, Container, makeStyles, Paper, TextField, Typography } from '@material-ui/core'
import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router'

const useStyles = makeStyles((theme) => ({
    setMobile: {
        width: "80%",
        boxShadow: theme.shadows[20],
        [theme.breakpoints.up("md")]: {
            width: "55%"
        }
    },
    box: {
        fontSize: "18px"
    },
    header: {
        fontSize: "30px"
    }
}))
const Adduser = () => {
    const classes = useStyles()
    const [userData, setuserData] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    })

    const history = useHistory();
    const change = (event) => {
        console.log(userData)
        setuserData({ ...userData, [event.target.name]: event.target.value })
    }

    const submit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:5000/users", userData)
        console.log(history)
        history.push("/")
    }
    return (
        <Container component={Box} p={10} align="center" >
            <Paper component={Box} p={5} className={classes.setMobile}>
                <Typography className={classes.header} variant="h6">Add A User</Typography><br />
                <Box component="form">
                    <TextField name="name" fullWidth onChange={(event) => change(event)} value={userData.name} margin="normal" variant="outlined" placeholder="enter your name" label="your name" />
                    <TextField name="username" fullWidth onChange={(event) => change(event)} value={userData.username} margin="normal" variant="outlined" placeholder="enter your username" label="your Username" />
                    <TextField name="email" fullWidth onChange={(event) => change(event)} value={userData.email} margin="normal" variant="outlined" placeholder="enter your email" label="your Email" />
                    <TextField name="phone" fullWidth onChange={(event) => change(event)} value={userData.phone} margin="normal" variant="outlined" placeholder="enter your phone number" label="your phone No." />
                    <TextField name="website" fullWidth onChange={(event) => change(event)} value={userData.website} margin="normal" variant="outlined" placeholder="enter your website" label="your website" />
                </Box>
                <Button className={classes.box} onClick={(e) => submit(e)} variant="contained" color="primary">SUBMIT</Button>
            </Paper>
        </Container>
    )
}

export default Adduser
