import React, { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { CircularProgress } from '@material-ui/core';
import DishItem from './dishItem/DishItem';
import { getDish } from './ducks/reducer';
import Header from '../main/header/Header';
import { HorizontalScroll } from './horizontalScroll/scroll';
import { getCategory } from '../../api';
import { getCat } from '../main/categories/ducks/reducer';

const Dishes = () => {
    const dispatch = useDispatch();
    const param = useParams();
    const dishesOfcategory = useSelector(state => state.dish.dishes);
    const isFetching = useSelector(state => state.dish.isFetching);
    const categories = useSelector(state => state.category.categories);

    // debugger

    useEffect(() => {
        // dispatch(getDish(param.id));
        // dispatch(getDish(param.id + 1));
        getCat();
    }, []);

    return (
        <div >
            <Header/>
            <HorizontalScroll categories = {categories}/> 
            
            <div>{dishesOfcategory.name}</div>
            {/* {isFetching === false ? dishesOfcategory.dishes.map(dish => <DishItem dish={dish} key={dish.id}/> ) : <CircularProgress size={60} style={{display:'block', margin:'4rem auto'}} /> } */}
        </div>
    )
}

export default Dishes;
