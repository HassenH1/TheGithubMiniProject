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
  const [users, setUsers] = useState([])

  // useEffect(() => {
  //   async function fetchData() {
  //     await (await (await fetch('https://api.github.com/users'))).json()
  //     .then(data => setUsers(data))
  //   }
  //   fetchData()
  // }, [])

  // const all = users.map((elem) => {
  //   return(
  //     <div>
  //   <div key={elem.id}>{elem.login}</div>
  //   <img src={elem.avatar_url} alt="github images"/>
  //   </div>
  //   )
  // })
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
        <TextField id="full-width-text-field" label="Github Username" width={300} />
      </Paper>
    </div>
  );
}

export default App;
