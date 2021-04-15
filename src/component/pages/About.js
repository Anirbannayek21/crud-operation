import { Box, Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    box: {
        boxShadow: theme.shadows[20]
    }
}))
function About() {
    const classes = useStyles();
    return (
        <Container align="center">
            <Paper component={Box} width="60%" align="left" p={8} m={10} className={classes.box}>
                <Typography variant="h4">About Us</Typography><br />
                <Typography gutterBottom>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, magnam pariatur maiores aliquid consequuntur sequi cumque eveniet at esse molestias officiis autem consectetur rerum qui? Veniam dolores nobis ad temporibus?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, odit sapiente! Ipsum, est molestias cum, repellendus accusantium perferendis laborum, dolores quas adipisci facilis a dignissimos? Totam quaerat ea nam consectetur.
            </Typography>
                <Grid container justify="space-evenly">
                    <Grid item>
                        <Typography component="img" src="https://source.unsplash.com/180x200/?nature,water"></Typography>
                    </Grid>
                    <Grid item>
                        <Typography component="img" src="https://source.unsplash.com/180x200/?nature,air"></Typography>
                    </Grid>
                    <Grid item>
                        <Typography component="img" src="https://source.unsplash.com/180x200/?nature,sky"></Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}

export default About
