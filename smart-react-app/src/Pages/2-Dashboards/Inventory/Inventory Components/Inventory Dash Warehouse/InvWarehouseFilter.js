import GenButton from "../../../../../Components/Buttons/GenButton"
import React, { useState } from "react";
import DatePicker from "react-datepicker";


export default function DashFilterContainer({value, input}) {

{/* DatePicker handling */}

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());


{/* Styling for components */}
    const exchangeBtnStyle = {marginLeft: 150}

    const FlexContainerStyle = {
        marginLeft: 50,
        marginRight: 50,
        background: '#F2F2F2',
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-around',
        height: 105,
    }

    const updateStyleBtn = {paddingTop:230}

    return(
        <div className="FlexContainer">
                
                    <div className="FlexChild">
                        <p>Warehouse</p>
                        <input />
                    </div>
                    <div className="FlexChild">
                        <p>Product</p>
                        <input />
                    </div>
                    <div className="FlexChild">
                        <p>Variable</p>
                        <input />
                    </div>
                    <div className="FlexChild">
                        <p>Date From</p>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                    <div className="FlexChild">
                        <p>Date To</p>
                        <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
                    </div>
                    <div className="UpdateBtn">
                        <br/><br/>
                        <GenButton 
                            value="Update"
                            className="salesUpdate"
                            style={updateStyleBtn}
                            />
                    </div>
            </div>
    )
}