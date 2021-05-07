import React, {useState, useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Badge from '@material-ui/core/Badge';

import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    display: 'block',
    padding: theme.spacing(2),
    textAlign: 'center',
    width: 250,
    height: 100,
    borderColor: 'primary',
    color: theme.palette.text.secondary,
    
  },
  date: {
    color: 'red'
  },
  media: {
    width: 'auto',
    paddingTop: '100%', // 16:9
  },
  box: {
    bgcolor: 'background.paper',
    m: 1,
    border: 1,
    style: { width: '5rem', height: '5rem' },
  }
}));

const defaultProps = {
  bgcolor: 'primary',
  m: 1,
  border: 2,
};
function App() {
  
  const classes = useStyles();
  useEffect(()=> {
    fetchItems(); 
  }, []);
  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    const data = await fetch('https://api.github.com/users/Grezor/repos');
    const items = await data.json();
    setItems(items);
  }

  const repo = false
  return (
    <div className="App">
       <h1>Github repository</h1>
       <Grid container>
        
            {items.map((item, index) => (
              
              <Box borderColor="primary.main" {...defaultProps} >
              <Grid>
                <Paper className={classes.paper} >
                <h3 key={index} >{item.name}</h3>
            
               </Paper>
               </Grid>
              </Box>
            ))}
        </Grid>
    </div>
  );
}

export default App;
