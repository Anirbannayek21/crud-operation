import { Box, Button, Container, makeStyles, Paper, TextField, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "5rem",
        width: "100vw",
        height: "100vh"
    },
    setMobile: {
        width: "350px",
        boxShadow: theme.shadows[20],
        [theme.breakpoints.up("md")]: {
            width: "40%"
        }
    }
}))
function Contact() {
    const classes = useStyles();
    return (
        <Container className={classes.root} align="center">
            <Paper component={Box} className={classes.setMobile} p={4} align="left">
                <Typography variant="h3">Contact Us</Typography>
                <Box component="form" >
                    <TextField fullWidth placeholder="Enter your name" variant="outlined" label="Your Name" margin="normal" />
                    <TextField fullWidth placeholder="Enter your email" variant="outlined" label="Your Email" margin="normal" />
                    <TextField fullWidth placeholder="Enter your massage" variant="outlined" label="Your Massage" margin="normal" multiline rows={4} />
                </Box>
                <Button component={Box} color="primary" variant="contained" mt={4}>Submit</Button>
            </Paper>
        </Container>

    )
}

export default Contact
