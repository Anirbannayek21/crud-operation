import { Box, Button, Container, makeStyles, Paper, TextField, Typography } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'

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
const Edituser = () => {
    const classes = useStyles()
    const [userData, setuserData] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    })

    useEffect(() => {
        loaduser();
    }, [])

    const { id } = useParams();
    const history = useHistory();


    const loaduser = async () => {
        const result = await axios.get(`http://localhost:5000/users/${id}`)
        console.log(result)
        setuserData(result.data)
    }
    return (
        <Container component={Box} p={10} align="center" >
            <Paper component={Box} p={5} className={classes.setMobile}>
                <Typography className={classes.header} variant="h6">{userData.name}</Typography><br />
                <Box component="form">
                    <TextField name="name" fullWidth value={userData.name} margin="normal" variant="outlined" placeholder="enter your name" label="your name" disabled />
                    <TextField name="username" fullWidth value={userData.username} margin="normal" variant="outlined" placeholder="enter your username" label="your Username" disabled />
                    <TextField name="email" fullWidth value={userData.email} margin="normal" variant="outlined" placeholder="enter your email" label="your Email" disabled />
                    <TextField name="phone" fullWidth value={userData.phone} margin="normal" variant="outlined" placeholder="enter your phone number" label="your phone No." disabled />
                    <TextField name="website" fullWidth value={userData.website} margin="normal" variant="outlined" placeholder="enter your website" label="your website" disabled />
                </Box>
                <Button onClick={() => history.goBack()} variant="contained" color="primary">RETURN BACK</Button>
            </Paper>
        </Container>
    )
}

export default Edituser
