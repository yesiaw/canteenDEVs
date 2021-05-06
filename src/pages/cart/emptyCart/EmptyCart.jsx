import { Box, Typography } from '@material-ui/core';
import React from 'react';


const EmptyCart = () => {
    return (
  <>
    <Box align='center'>
      <Typography variant="h5">
        Ваша корзина пуста
      </Typography>
    </Box>
  </>
    )
}

export default EmptyCart;

