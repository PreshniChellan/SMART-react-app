import './LeadComonents.css';
import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import DatePicker from "react-datepicker";
import GenButton from "../../../Components/Buttons/GenButton"


export default function LoadRef() {

    const [startDate, setStartDate] = useState(new Date());

    let history = useHistory(); 
    
        const SaveRefRoute = () =>{
            history.push("/Leads")
        }

    return(
        <>
        <h2 className='headerTitle'>Load referal below.</h2>
        <br /><br />
        <form>
            <div className="Container_One">
                <div className="FlexContainer">
                    
                    <div className="FlexChild">
                        <p>Name *</p>
                        <input />
                    </div>
                    <div className="FlexChild">
                        <p>Surname *</p>
                        <input />
                    </div>
                    <div className="FlexChild">
                        <p>Number *</p>
                        <input />
                    </div>
                    <div className="FlexChild">
                        <p>Email Address *</p>
                        <input />
                    </div>            
                </div>
                <div className="FlexContainer">
                    
                    <div className="FlexChild">
                        <p>Date of Birth *</p>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                    <div className="FlexChild">
                        <p>Gender *</p>
                        <select>
                            <option>Select an option</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className="FlexChild">
                        <p>City *</p>
                        <input placeholder="Dropdown/predictive?"/>
                    </div>
                    <div className="FlexChild">
                        <p>Suburb *</p>
                        <input placeholder="Dropdown/predictive?" />
                    </div>            
                </div>
            </div>
            <br />
            <h2 className='headerTitle'>Now let's allocate this lead.</h2>
            <br />
            <div className="FlexContainer">
                <div className="FlexChild">
                    <p>Allocate To</p>
                    <input placeholder="Dropdown of users or random?" />
                </div>
                <div className="FlexChild">
                    <p>Source</p>
                    <select>
                        <option>Select an Option</option>
                        <option>Options come from campaign and</option>
                        <option>sources created un 'settings'</option>
                    </select>
                </div>
                <div className="FlexChild">
                    <p>Contact Method</p>
                    <select>
                        <option>Select an Option</option>
                        <option>Phone Call</option>
                        <option>Email</option>
                        <option>SMS</option>
                        <option>WhatsApp</option>
                    </select>
                </div>
                <div className="FlexChild">
                    <p>Contact Consent</p>
                    <p>Slider goes here</p>
                </div>
            </div>
            <div className="FlexContainer">
                <div className="FlexChild">
                    <p>Campaign</p>
                    <select>
                        <option>Select an Option</option>
                        <option>Options come from campaign and</option>
                        <option>sources created un 'settings'</option>
                    </select>
                </div>
                <div className="FlexChild">
                    <p>Rating</p>
                    <select>
                        <option>Select an Option</option>
                        <option>Hot</option>
                        <option>Average</option>
                        <option>Cold</option>
                    </select>
                </div>
                <div className="FlexChild">
                    <p>Referral Notes</p>
                    <textarea />
                </div>                
                    <p></p>
                    <GenButton 
                        value="Save Referral"
                        onClick={SaveRefRoute}
                        className="SaveRefBtn"
                    />
                
            </div>


        </form>

        </>
    )
}