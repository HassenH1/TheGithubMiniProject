import React from 'react';
import { useState, useEffect } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { TextField } from '@material-ui/core';
import './App.css';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      padding: theme.spacing(3, 2),
      margin: theme.spacing(0, 20, 0, 20)
    },
  },
}));

function App() {
  const classes = useStyles();
  const [users, setUsers] = useState({})

  const handleChange = (e) => {
    // setUsers(e.target.value)
    setUsers({
      ...users,
      [e.target.name]: e.target.value
    })
    console.log(users, "<---users state")
    // getUsers(users)
  }
  // const getUsers = async (users) => {
  //   const clientId = "2f0015355a97f0481126"
  //   const secret = "99af4419b4d8485eebc3e5f62289bf2a426fb2ac"
  //   const profileResponse = await fetch(`https://api.github.com/users/${users}?client_id=${clientId}&client_secret=${secret}`)
  //   const Json = await profileResponse.json()
  //   showUser(Json)
  // }
  // const showUser = (user) => {
  //   console.log(user)
  // }
  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            Github Finder
          </Typography>
        </Toolbar>
      </AppBar>
      <Paper className={classes.root}>
        <Typography variant="h3">
          Search Github Users
      </Typography>
        <Typography variant="h5">
          Enter a user username to fetch a user profile and repos
      </Typography>
        <TextField id="full-width-text-field" label="Github Username" width={300} onChange={handleChange} name="users"/>
      </Paper>
    </div>
  );
}

export default App;
