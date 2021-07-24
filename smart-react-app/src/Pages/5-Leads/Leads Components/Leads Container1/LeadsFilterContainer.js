import DatePicker from "react-datepicker";
import React, { useState } from "react";
import GenButton from '../../../../Components/Buttons/GenButton'

export default function LeadsFilterContainer() {

const [startDate, setStartDate] = useState(new Date());

    return(
        <>
        <h2 className="headerTitle">Manage your leads, all in one place</h2>
        <br /><br />
        <div className="Container_One">
            <div className="FlexContainer">                            
                <div className="FlexChild">
                    <p>Date From</p>
                    <DatePicker selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    />
                </div>
                <div className="FlexChild">
                    <p>Date To</p>
                    <DatePicker selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    />
                </div>
                <div className="FlexChild">
                    <p>Lead Owner</p>
                    <select>
                        <option>Select an option</option>
                    </select>
                </div>
                <div className="FlexChild">
                    <p>Lead Status</p>
                    <select>
                        <option>Select an option</option>
                    </select>
                </div>    
                <div className="FlexChild">
                    <p>Campaign</p>
                    <select>
                        <option>Select an option</option>
                    </select>
                </div> 
                <div className="FlexChild">
                    <br /><br />
                    <GenButton 
                        value="Update"
                        onClick={'#'}
                        className="LeadsUpdateBtn"
                        style={{MarginTop:55}}
                    />
                </div>           
            </div>
        </div>
        </>
    )
}