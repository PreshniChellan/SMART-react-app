import GenButton from '../../../../Components/Buttons/GenButton'
import '../../Leads.css'
import { useHistory } from 'react-router-dom'
import React, { useState } from "react";


export default function LeadsSettingOptions() {

    let history = useHistory(); 
    
        const CampaignClick = () =>{
            history.push("/NewCampaign")
        }
        const AwarnessClick = () =>{
            history.push("/NewAwareness")
        }
        const LeadStatusClick = () =>{
            history.push("/NewLeadStatus")
        }
        const AppOutcomeClick = () =>{
            history.push("/CreateAppOutcome")
        }
        const CallOutcomeClick = () =>{
            history.push("/CreateCallOutcome")
        }

        const ButtonAlignmentStyle = {
            marginTop:35,
        }

    return (
        <>
            <h2 className="headerTitle">Create and edit your settings.</h2>
            <br /><br />
            <div className="FlexContainer">
                <div className="FlexChild" style={ButtonAlignmentStyle}>
                    <GenButton 
                        value="Campaign"
                        onClick={CampaignClick}
                    />
                </div>
                <div className="FlexChild" style={ButtonAlignmentStyle}>
                    <GenButton 
                        value="Awareness"
                        onClick={AwarnessClick}
                    />
                </div>
                <div className="FlexChild" style={ButtonAlignmentStyle}>
                    <GenButton 
                        value="Lead Status"
                        onClick={LeadStatusClick}
                    />
                </div>
                <div className="FlexChild" style={ButtonAlignmentStyle}>
                    <GenButton 
                        value="App Outcome"
                        onClick={AppOutcomeClick}
                    />
                </div>
                <div className="FlexChild" style={ButtonAlignmentStyle}>
                    <GenButton 
                        value="Call Outcome"
                        onClick={CallOutcomeClick}
                    />
                </div>
            </div>
        </>
    )
}