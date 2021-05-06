import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../cart/ducks/reducer';
import { Snackbar } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    margin:'2rem'
  },
});

export default function DishItem(props) {
  const dish = props.dish;
  const classes = useStyles();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

 
  const handleAdd = () => {
    setOpen(true);
    dispatch(addToCart(dish))
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={dish.categoryImg }
          title="Contemplative Reptile"
        />
        <CardContent style={{padding:'0.6rem'}}>
          <Typography gutterBottom variant="body1" component="h2" >
          {dish.name }
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Состав: 250 грамм бекона, килограмм вырезки, 4 куриных грудки, килограмм рыбы, 3 стакана гречневой крупы, 3 стакана риса, 2 килограмма картофеля.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{padding:'0'}}>
      <Button disableElevation disabled style={{color:'#000'}}
      >
        {dish.price} P
      </Button>
        <Button style={{marginLeft:'auto', backgroundColor:'#db2812', color:'#fff'}} size="large" variant="contained" onClick={handleAdd}>
          Добавить
        </Button>
        <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'left' }} open={open} message={`${dish.name} успешно добавлен в корзину`} />
      </CardActions>
    </Card>
  );
}
