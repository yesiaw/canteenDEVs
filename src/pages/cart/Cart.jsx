import { Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../main/header/Header';
import EmptyCart from './emptyCart/EmptyCart';
import Table from './table/Table';


const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
    return (
  <>
    <Header/>
    <Typography variant="h4" align='center' style={{marginTop:'1rem'}}>
      Корзина
    </Typography>
    {cartItems.length ? <Table/> : <EmptyCart/> }
  </>
      
    )
}

export default Cart;

