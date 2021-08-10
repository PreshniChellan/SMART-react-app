import React from 'react'
import './button.css';

const Gen2Button = ({value, onClick = () => {}}) => {
return <button className='gen2_btn' onClick={onClick}>
{value} 
</button>

}
export default Gen2Button
