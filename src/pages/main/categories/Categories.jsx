import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import CategoryItem from './categoryItem';
import { getCat } from './ducks/reducer';
import { Typography } from '@material-ui/core';

const Categories = () => {
    const categories = useSelector(state => state.category.categories);
    const isFetching = useSelector(state => state.category.isFetching);
    const dispatch = useDispatch()

    const initFetch = useCallback(() => {
        dispatch(getCat());
      }, [dispatch]);
    useEffect(() => {
        initFetch();
    }, [initFetch]);
   
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Меню
      </Typography>
      <Grid container spacing={4} alignItems="center" >
      {isFetching === false ? categories.map(category => <CategoryItem category={category} key={category.id}/> ) : <CircularProgress size={60} style={{display:'block', margin:'4rem auto'}} /> }
      </Grid>
      </>
    )
}

export default Categories;