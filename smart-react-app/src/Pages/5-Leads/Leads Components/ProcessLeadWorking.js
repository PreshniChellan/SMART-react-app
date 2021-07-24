import '../Leads.css';
import DatePicker from "react-datepicker";
import React, { useState } from "react";

export default function ProcessLeadWorking() {

    const [startDate, setStartDate] = useState(new Date());


    return (
        <>
            <h2 className="headerTitle">Working</h2>
            <br /><br />
            <div className="FlexContainer">
                <div className="FlexChild">
                    <p>Appointment Outcome</p>
                    <select>
                        <option>Select an option</option>
                    </select>
                </div>
                <div className="FlexChild">
                        <p>Purchase Date</p>
                        <DatePicker selected={startDate}
						onChange={(date) => setStartDate(date)}
						/>
                </div>
                <div className="FlexChild">
                    <p>Reasoning</p>
                    <select>
                        <option>Select an option</option>
                    </select>
                </div>
                <div className="FlexChild">
                    <p>Consumer Need</p>
                    <select>
                        <option>Select an option</option>
                    </select>
                </div>
                <div className="FlexChild">
                    <p>If Other</p>
                    <input />
                </div>  
            </div>
            <div className="FlexContainer">
                <div className="FlexChild">
                        <p>Products Purchased</p>
                        <textarea rows="2" cols="28"
                        style={{marginBottom:20}} />
                </div> 
                <div className="FlexChild">
                    {/* Spacing Div */}
                </div>  
                <div className="FlexChild">
                    {/* Spacing Div */}
                </div>   
                <div className="FlexChild">
                    {/* Spacing Div */}
                </div>   
                <div className="FlexChild">
                    {/* Spacing Div */}
                </div>                  
            </div>
        </>
    )
}