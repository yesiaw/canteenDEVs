import React, { useEffect } from 'react'
import cx from './dishes.module.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { CircularProgress } from '@material-ui/core';
import { clearDishes, getCategories, getDish } from './ducks/reducer';
import { HorizontalScroll } from './horizontalScroll/scroll';
import DishItem from './dishItem/DishItem';
import * as queryString from 'querystring'
import DishesHeader from './dishesHeader/dishesHeader';




const Dishes = () => {
    const dispatch = useDispatch();
    const param = useParams();
    const history = useHistory();
    const dishesOfcategory = useSelector(state => state.dish.dishes);
    const isFetching = useSelector(state => state.dish.isFetching);
    const categories = useSelector(state => state.dish.categories);
    const parsed = queryString.parse(history.location.search.substr(1))
   
    useEffect(() => {
        dispatch(getCategories())
    }, [])

    useEffect(() => {
        if (categories) {
            for (let i = 1; i <= categories.length; i++) {
                dispatch(getDish(Number(i)));
            }
            setTimeout(() => {
                document.getElementById(((isNaN((param.id)))) ? Number(parsed.dish) : (param.id)).scrollIntoView()
            }, 100)
        }
    }, [categories])

    useEffect(() => {
        return () => {
            dispatch(clearDishes())
        }
    }, [])


    return (
        <div>
            {isFetching === false ? (<div >
                <div className={cx.ContainerForHeader}>
                    <DishesHeader />
                    <HorizontalScroll categories={categories} />
                </div>

                {isFetching === false ?
                    dishesOfcategory.map(dish => {
                        return <div className={cx.generalContainer} key={dish.id} id={dish.id}> <div className={cx.dishesName}> {dish.name}</div> <div className={cx.DishItemContainer}>  {(dish.dishes.map((el) => {
                            return <DishItem dish={el} key={el.id} />
                        }))}</div></div>
                    }) : <CircularProgress size={60} style={{ display: 'block', margin: '4rem auto' }} />}
            </div>) : <CircularProgress size={60} style={{ display: 'block', margin: '4rem auto' }} />}</div>


    )
}
export default Dishes;
