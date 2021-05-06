import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Badge} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  newColor: {
    "& .MuiBadge-colorError": {
      backgroundColor:'#000',
      color:'#fff'
    }
  },
});

export default function Header() {
  const classes = useStyles();
  const cartItems = useSelector(state => state.cart.cartItems);

  return (
    <div>
      <AppBar position="static" style={{backgroundColor:'#db2812'}}>
        <Toolbar style={{width:'95%', display:'flex', justifyContent:'space-between'}}>
         <IconButton edge='start'>
          <NavLink to='/' style={{textDecoration: 'none', color:'#fff'}}>
          <div style={{fontFamily:'Darco', color:'#fff', fontWeight:'bold'}}>
              Habit
            </div>
          </NavLink>
          </IconButton>
          <IconButton edge="start" color="inherit">
            <NavLink to='/basket' style={{textDecoration: 'none', color:'#fff'}}>
            <Badge badgeContent={cartItems.length} color='error' className={classes.newColor} >
            <AddShoppingCartIcon />
            </Badge>
            </NavLink>
          </IconButton>
  
        </Toolbar>
      </AppBar>
    </div>
  );
}
