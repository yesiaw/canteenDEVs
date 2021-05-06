import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const CategoryItem = (props) => {
  const category = props.category;
    const classes = useStyles();
   
    return (
      <Grid item xs={6} align='center'>
        <NavLink to={`${category.id}`} style={{textDecoration: 'none'}}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={category.photo}
              title="Contemplative Reptile"
            />
            <CardContent style={{padding:'0.5rem'}}>
              <Typography variant="body1">
              {category.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </NavLink>
      </Grid>
      
    )
}

export default CategoryItem;

