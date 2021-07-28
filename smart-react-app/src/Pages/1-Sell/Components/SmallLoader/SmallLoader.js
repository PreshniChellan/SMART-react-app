import React, {useEffect, useState} from 'react'
import './small-loader.css';

export const SmallLoader = (props) => {

    const [width, setWidth] = useState('150px');
    const [height, setHeight] = useState('150px');
    const [margin_top, set_margin_top] = useState('0px');




useEffect(() => {
    if(props.size !== undefined) {
        setWidth(props.size[0]);
        setHeight(props.size[1]);
        set_margin_top(props.size[2]);
    }
}, [props.size])

    return (
        <div class="loader-bg">
            <div class="loader-p" style={{width: width, height: height, marginTop: margin_top}}>
                
            </div>
        </div>
    )
}

export default SmallLoader
