import React, { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { CircularProgress } from '@material-ui/core';
import DishItem from './dishItem/DishItem';
import { getDish } from './ducks/reducer';
import Header from '../main/header/Header';

const Dishes = () => {
    const dispatch = useDispatch();
    const param = useParams();
    const dishes = useSelector(state => state.dish.dishes);
    const isFetching = useSelector(state => state.dish.isFetching);

    useEffect(() => {
        dispatch(getDish(param.id));
    }, []);

    return (
        <div >
            <Header/>
            {isFetching === false ? dishes.map(dish => <DishItem dish={dish} key={dish.id}/> ) : <CircularProgress size={60} style={{display:'block', margin:'4rem auto'}} /> }
        </div>
    )
}

export default Dishes;
