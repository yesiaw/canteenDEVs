import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button, ButtonGroup, IconButton } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { addToCart, removeFromCart, removeOneFromCart } from '../ducks/reducer';

const useStyles = makeStyles({
  table: {
    minWidth: 250,
    "& .MuiTableCell-root": {
      padding: "0.4rem"
    }
  },
});

const TableOne = () => {
  const classes = useStyles();
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  let summa = 0;
  function priceRow(qty, unit) {
    summa=summa+qty * unit;
    return qty * unit;
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell>Название</TableCell>
            <TableCell align="center">Кол.</TableCell>
            <TableCell align="right">Сум.</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell align="right">
              <ButtonGroup size="small" aria-label="small outlined button group" disableElevation color="primary">
                <Button onClick={() => dispatch(removeOneFromCart(row))}>-</Button>
                <Button >{row.count}</Button>
                <Button onClick={() => dispatch(addToCart(row))}>+</Button>
              </ButtonGroup>
              </TableCell>
              <TableCell align="right">{(priceRow(row.price, row.count))}P</TableCell>
              <TableCell align="right">

              <IconButton aria-label="delete" onClick={() => dispatch(removeFromCart(row))}>
                <HighlightOffIcon />
              </IconButton>

              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell rowSpan={2} />
            <TableCell colSpan={1}>Всего:</TableCell>
            <TableCell align="right">{summa}P</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableOne;
