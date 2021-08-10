import React from 'react';
import './input.css';

const Input = ({label="Title", type="text", value=null, placeholder="Enter here", width="300px", height="30px", disabled=false}) => {
    return (
        <div id="labledInput">
            <span>{label}</span>
            {disabled ? <input disabled type={type} value={value} placeholder={placeholder} style={{width: width, height: height}}/> : 
            <input type={type} placeholder={placeholder} value={value} style={{width: width, height: height}}/>}
        </div>
    )
}

export default Input
