import Sidebar from '../../../../../Components/SideNav/Sidebar'
import '../../../Leads.css'
import Genbutton from '../../../../../Components/Buttons/GenButton'
import DatePicker from "react-datepicker";
import React, { useState } from "react";
import { useHistory } from 'react-router-dom'

export default function NewCampaign() {

    const [startDate, setStartDate] = useState(new Date());

    let history = useHistory(); 

    const BackToLeadSettings = () =>{
        history.push("/LeadSettings")
    }

    return(
        <>
            <Sidebar />
            <br />
            <h2 className="headerTitle">Edit your Campaign</h2>
            <br />
            <div className="SaveAndBackBtnAlignment">
                <Genbutton
                    value="Save"
                    className="SaveEditCampaignBtn"
                />{' '}
                <Genbutton 
                    value="Delete"
                    className="DeleteCampaignBtn"
                />{' '}
                <Genbutton 
                    value="Back"
                    onClick={BackToLeadSettings}
                />
            </div>
            <br /><br /><br />
            <div className="FlexContainer">
                <div className="FlexChild">
                    <p>Campaign Name</p>
                    <input placeholder="Prepopulated"/>
                </div>
                <div className="FlexChild">
                        <p>Start Date *</p>
                        <DatePicker selected={startDate}
						onChange={(date) => setStartDate(date)}
						/>
                </div>
                <div className="FlexChild">
                    <p>Targeted Users</p>
                    <select>
                        <option>Select an option</option>
                    </select>
                </div>
                <div className="FlexChild">
                        <p>End Date</p>
                        <DatePicker selected={startDate}
						onChange={(date) => setStartDate(date)}
						/>
                </div>
                <div className="FlexChild">
                    <p>Targeted Team</p>
                    <select>
                        <option>Select an option</option>
                    </select>
                </div>     
            </div>
        </> 
    )
}