import React from 'react'
import './GenButton.css';

const GenButton = ({value, onClick = () => {}}) => {
return <button className='btn' onClick={onClick}>
{value}
</button>

}
export default GenButton
