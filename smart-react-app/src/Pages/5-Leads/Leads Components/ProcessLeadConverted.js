import '../Leads.css';
import React, { useState } from "react";
import GenButton from '../../../Components/Buttons/GenButton'

export default function ProcessLeadConverted() {

    return(
        <>
            <h2 className="headerTitle">Converted</h2>
            <br /><br />
            <div className="FlexContainer">
                <div className="FlexChild">
                    <p>Product Purchased</p>
                    <input placeholder="Prepopulated"/>
                </div>
                <div className="FlexChild">
                        <p>Date Contacted</p>
                        <input placeholder="Prepopulated"/>
                </div>
                <div className="FlexChild">
                    <p>Date Closed</p>
                    <input placeholder="Prepopulated"/>
                </div>
                <div className="FlexChild">
                    <p>Call Count</p>
                    <input placeholder="Prepopulated"/>
                </div>
            </div>
            <br />
            <div className="PLConvertedUpdateBtn">
                <GenButton 
                value="Update"
                />
            </div>
        </>
    )
}