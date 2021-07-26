import DatePicker from "react-datepicker";
import React, { useState } from "react";
import '../Leads.css';

export default function ProcessLeadQuali() {

    const [startDate, setStartDate] = useState(new Date());

    return (
        <>
            <h2 className="headerTitle">Qualification</h2>
            <br /><br />
            <div className="FlexContainer">
                <div className="FlexChild">
                    <p>Contacted Outcome</p>
                    <select>
                        <option>Select an option</option>
                    </select>
                </div>
                <div className="FlexChild">
                        <p>Call Back Date</p>
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
                    <p>Additional Notes</p>
                    <textarea rows="2" cols="28"
                    style={{marginBottom:20}} />
                </div>           
            </div>
        </>
    )
}