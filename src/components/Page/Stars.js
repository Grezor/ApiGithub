import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
function Stars() {
  
  useEffect(()=> {
    fetchItems(); 
  }, []);

  const classes = useStyles();
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://api.github.com/users/Grezor/starred?per_page=100');
    const items = await data.json();
    console.log(items)
    setItems(items);
  }

  return (
    <div>
       <Grid container spacing={3}>
        {items.map(item => (
          <Grid item xs={3}>
            <Card className={classes.root}>
              <CardActionArea >
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  {item.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            <CardActions>
              <p>{new Date(item.created_at).toLocaleDateString('sq-AL', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                  })}
                </p>
                <Button size="small" color="primary" href={item.html_url} target="_blank">
                  Repository
                </Button>
            </CardActions>
          </Card>
      </Grid>
      ))}  
    </Grid> 
    </div>
  )
}

export default Stars
