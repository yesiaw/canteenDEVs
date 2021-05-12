import React from 'react';
import cx from './dishesHeader.module.css'
import basket from '../other/basket.png'
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
const DishesHeader = (props) => {
    const history = useHistory();
    const cartItems = useSelector(state => state.cart.cartItems);

    const goBackFunc = () => {
        history.goBack();
    }

    return (
        <div className={cx.Container}>
            <div className={cx.buttonBack}>
                <button onClick={goBackFunc} className={cx.ButtonClick}>{`<<`}</button>
                <div className={cx.MenuName}>Меню</div>
            </div>
            <div className={cx.basketButton}>
                <NavLink to={'/basket'}>
                    <button className={cx.ButtonClickBasket}>
                        <img className={cx.basketImg} src={basket} />
                        <div className={cx.valueBasket}>{cartItems.length}</div>
                    </button>
                </NavLink>
            </div>

        </div>
    )
}
export default DishesHeader