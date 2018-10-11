import React from 'react';
import { Link } from 'react-router-dom'
//create customized own button
const button = {
    backgroundColor: 'orange',
    padding: 10,
    color: 'black',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 2,
    borderStyle: 'solid',

}

const Button = (props) => {
    return (
        <Link to={props.link}>
            <span style={button}>{props.name}</span>
        </Link>
    )
}

export default Button