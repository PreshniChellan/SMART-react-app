import React from 'react'
import './popup.css';
import Product from '../Products/Products';

export const Popup = (props) => {
    return (
        <div className="popup__overlay" style={{visibility: props.visibility}}>
            <div className="popup__outer">
            <div className="popup__inner">
              <h1>Product Name</h1>
              <p>Select a Variable Option</p>
            </div>
            </div>
        </div>
    )
}

export default Popup;
