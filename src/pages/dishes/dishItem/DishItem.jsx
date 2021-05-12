import React, { useEffect, useState } from 'react';
import cx from './dishitem.module.css'
import { useDispatch } from 'react-redux';
import { addToCart, removeOneFromCart } from '../../cart/ducks/reducer';
import { Snackbar } from '@material-ui/core';



const DishItem = (props) => {

  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const addDishesToBasket = (dish) => {
    dispatch(addToCart(dish))
    setOpen(true);
    setTimeout(() => {
      setOpen(false)
    }, 2000)
  }

  useEffect(() => {
    return() => {
      setOpen(false)
    }
  }, [])

  return (
    <div className={cx.DishItemContainer}>
      <div className={cx.dishImage}>
        <img src={'https://media-cdn.tripadvisor.com/media/photo-s/0d/dd/2d/0e/caption.jpg'} />
      </div>
      <div className={cx.dishName}>{props.dish.name}</div>
      <div className={cx.dishweight}>120 г</div>
      <div className={cx.dishstructure}>Курица, сыр, помидоры, черри, яйца, соус "Цезарь"</div>
      <div className={cx.doubleBlock}>
        <div className={cx.dishsCost}>150 pуб.</div>
        <button onClick={() => { addDishesToBasket(props.dish) }} className={cx.dishsAddButton}>+</button>
      </div>
      { <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} open={open} message={`${props.dish.name} успешно добавлен в корзину`} />}

    </div>
  )
}
export default DishItem;
