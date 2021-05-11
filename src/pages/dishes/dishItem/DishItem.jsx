import React, { useEffect, useState } from 'react';
import cx from './dishitem.module.css'
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
// import { Snackbar } from '@material-ui/core';
{/* <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} open={open} message={`${dish.name} успешно добавлен в корзину`} /> */}


export default function DishItem(props) {
  // debugger
  return(
    <div className = {cx.DishItemContainer}>
      <div>
        {props.dish.name}
      </div>
    </div>
  )
}
