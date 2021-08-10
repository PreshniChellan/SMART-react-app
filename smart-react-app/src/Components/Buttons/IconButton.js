import React from 'react';
import './IconButton.css';

const IconButton = ({height="50px", width="30%", src="https://vxb902in0vu2y0g6w28xtn31-wpengine.netdna-ssl.com/wp-content/uploads/2019/01/image-placeholder-500x500.jpg", value="Value", onClick = () => {}}) => {
    return (
        <div onClick={onClick} className="IconButton__body" style={{height: height, width: width}}>
            <img src={src}/>
            <div>{value}</div>
        </div>
    )
}

export default IconButton
