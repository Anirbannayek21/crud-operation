import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Box, Button, Container, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@material-ui/core';
import { green, lightBlue, lightGreen, red } from '@material-ui/core/colors';
import { NavLink } from 'react-router-dom';


const col = [
    {
        field: "id",
        headerName: "ID",
        width: 80
    },
    {
        field: "name",
        headerName: "NAME",
        flex: 1
    },
    {
        field: "username",
        headerName: "USER NAME",
        flex: 1
    },
    {
        field: "email",
        headerName: "EMAIL",
        flex: 1
    }
]

const useStyles = makeStyles((theme) => ({
    header: {
        backgroundColor: theme.palette.grey["500"]
    }
}))

const edit = {
    background: lightGreen["A700"],
    marginRight: "8px"
};
const del = {
    background: red["A700"],
    marginRight: "8px"
};
const view = {
    background: lightBlue[500],
    marginRight: "8px"
}


function Home() {
    const classes = useStyles()
    const [users, setusers] = useState([])
    const [page, setpage] = useState(0)
    const [rowCount, setrowCount] = useState(5)

    useEffect(() => {
        loadUsers();
    }, [])

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:5000/users")
        setusers(result.data.reverse());
    }

    const onChange = (event, nextPage) => {
        setpage(nextPage)
    }

    const onChangeRow = (event) => {
        setrowCount(event.target.value)
    }

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:5000/users/${id}`)
        loadUsers();
    }

    return (
        <>
            <Container component={Box} p={10}>
                <Typography variant="h6">Home Page</Typography>
                <br />
                <TableContainer component={Paper} >
                    <Table>
                        <TableHead className={classes.header} >
                            <TableRow >
                                <TableCell>ID</TableCell>
                                <TableCell>NAME</TableCell>
                                <TableCell>USER NAME</TableCell>
                                <TableCell>EMAIL</TableCell>
                                <TableCell >ACTION</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                users.slice(page * rowCount, page * rowCount + rowCount).map((user, index) => (
                                    <TableRow>
                                        <TableCell>{index + page * rowCount + 1}</TableCell>
                                        <TableCell>{user.name}</TableCell>
                                        <TableCell>{user.username}</TableCell>
                                        <TableCell>{user.email}</TableCell>
                                        <TableCell >
                                            <Button component={NavLink} to={`/edit/${user.id}`} style={edit}>EDIT</Button>
                                            <Button style={view} component={NavLink} to={`/view/${user.id}`}>VIEW</Button>
                                            <Button onClick={() => deleteUser(user.id)} style={del}>DELETE</Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 15, 25, 50]}
                            count={users.length}
                            rowsPerPage={rowCount}
                            page={page}
                            onChangePage={onChange}
                            onChangeRowsPerPage={onChangeRow}
                        />
                    </Table>

                </TableContainer>

            </Container>
        </>
    )
}

export default Home
