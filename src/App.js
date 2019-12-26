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
  const [repo, setRepo] = useState({})

  const handleChange = (e) => {
    // setUsers({
    //   ...users,
    //   [e.target.name]: e.target.value
    // },)
    getUsers(e.target.value)
  }
  const getUsers = async (users) => {
    const clientId = "2f0015355a97f0481126"
    const secret = "ba23bdad1caba7400d575f16a9de0b453b878d67"
    const reposCount = 5
    const reposSort = 'asc'
    const profileResponse = await fetch(`https://api.github.com/users/${users}?client_id=${clientId}&client_secret=${secret}`)
    const Json = await profileResponse.json()
    // showUser(Json)
    const repo = await fetch(`https://api.github.com/users/${users}/repos?per_page=${reposCount}&sort=${reposSort}&client_id=${clientId}&client_secret=${secret}`)
    const repoJson = await repo.json()
    console.log(repoJson, "<----repos")


    setUsers({
      Json,
    })
    setRepo({
      repoJson
    })
  }
  // const showUser = (user) => {
  //   // console.log(user.avatar_url, "show users")
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
        <TextField id="full-width-text-field" label="Github Username" width={300} onChange={handleChange} name="users" />
      </Paper>
      <br />
      <br />
      <br />
      {console.log(repo.repoJson)}
      {users && users.Json
        ? <div>
          <img src={users.Json.avatar_url} alt={users.Json.name} />
          <h3>{users.Json.name}</h3>
        </div>
        : ""
      }
      {
        repo.repoJson
          ? <div>
            <h4>Latest Repository</h4>
            { repo.repoJson.map((elem, i) => {
            return (<ul>
              <li key={i}>{elem.name}</li>
            </ul>)
          })}</div>
          : "dont do it"
      }
    </div>
  );
}

export default App;