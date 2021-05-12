import React from 'react'
import cx from './scroll.module.css'
import { Link } from 'react-scroll'


export const HorizontalScroll = (props) => {
    const activatedItem = (id) => {
        for (let i = 1; i <= props.categories.length; i++) {
            if (i == id) {
                document.getElementById(`scrollCont${id}`).classList.add(cx.ScrollItemActive)

            } else {
                document.getElementById(`scrollCont${i}`).classList.remove(cx.ScrollItemActive)
            }
        }
    }

    return (

        <div className={cx.ScrollContainer}>
            {props.categories.map((el) => {
                return <Link to={el.id} smooth={false} duration={500}> <button id={`scrollCont${el.id}`} onClick={() => { activatedItem(el.id) }} className={cx.ScrollItem}>
                    {el.name}
                </button></Link>
            })}
        </div>
    )
}