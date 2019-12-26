import React from 'react';
import { useState } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { TextField } from '@material-ui/core';

import './App.css';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(0, 20, 0, 20),
    '& > *': {
      padding: theme.spacing(3, 2),
      margin: theme.spacing(0, 20, 0, 20),
      // width: theme.spacing(16),
    },
  },
  test: {
    margin: theme.spacing(10, 10, 0, 10),
    textAlign: "center",
    position: "relative",
    bottom: 107,
  },
  li: {
    listStyle: "none",
    display: "block",
    fontSize: 15.17,
    position: "relative",
    right: 22.5,
    borderBottom: "1px solid black",
    borderTop: "1px solid black",
    width: 200,
    padding: theme.spacing(1.5, 0),
    margin: theme.spacing(5.5, 0),
    '&:hover': {
      color: "purple"
    }
  },
  ay: {
    textDecoration: "none",
    curser: "pointer",
    color: "inherit",
  },
  flexing: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    margin: theme.spacing(-4, 0),
  },
  image: {
    height: 350,
    width: 370
  }
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

    setUsers({
      Json,
    })
    setRepo({
      repoJson
    })
  }

  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            Github Finder
          </Typography>
        </Toolbar>
      </AppBar>
      <Paper className={classes.root} mx="auto">
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
      <div className={classes.flexing}>
        {users && users.Json
          ? <div className={classes.test}>
            <h3>{users.Json.name}</h3>
            {
              users.Json.avatar_url
                ? <div>
                  <a href={users.Json.html_url} target="_blank" rel="noopener noreferrer">
                    <img src={users.Json.avatar_url} alt={users.Json.name} className={classes.image} />
                  </a>
                </div>
                : ""
            }
          </div>
          : ""
        }
        {
          repo.repoJson && repo.repoJson.length > 0
            ? <div className={classes.test}>
              <h4>Latest Repository</h4>
              {repo.repoJson.map((elem, i) => {
                return (<ul>
                  <a href={elem.html_url} target="_blank" rel="noopener noreferrer" className={classes.ay}><li key={i} className={classes.li}>{elem.name}</li></a>
                </ul>)
              })}</div>
            : ""
        }
      </div>
    </div>
  );
}

export default App;