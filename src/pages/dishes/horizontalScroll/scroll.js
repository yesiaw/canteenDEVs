import React from 'react'
import cx from './scroll.module.css'
export const HorizontalScroll = (props) => {
    // debugger
    return(
        <div className = {cx.ScrollContainer}>
            {props.categories.map((el) => {
                return <button className = {cx.ScrollItem}>
                    {el.name}
                </button>

            })}
            
            
        </div>
    )
}