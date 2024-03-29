import React from 'react'
import Button from '@material-ui/core/Button';

export default function Btn(props){
    return(
        <Button {...props}>{props.children}</Button>
    )
}
