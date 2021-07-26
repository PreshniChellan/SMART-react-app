
import '../Leads.css'
import GenButton from '../../../Components/Buttons/GenButton'
import { useHistory } from 'react-router-dom'


export default function ProcessLead() {

    let history = useHistory(); 
    
        const BackToLeadsPage = () =>{
            history.push("/LeadsPage")
        }

        const BackBtnStyle = {
            float: "right",
        }

    return (
        <>
        
        <br />
            <h2 className="headerTitle">Your Lead Information</h2>
            <div className="BackBtnAlignment">
            <GenButton
                value="Back"
                onClick={BackToLeadsPage}
                style={BackBtnStyle}
            />
            </div>
            <br /><br />
            <div>
                <div className="FlexContainer">
                    <div className="FlexChild">
                    <p>Current Status</p>
                        <select>
                            <option>Select an option</option>
                        </select>
                    </div>
                    <div className="FlexChild">
                        <p>Name</p>
                        <input placeholder="Prepopulated"/>
                    </div>
                    <div className="FlexChild">
                        <p>Surname</p>
                        <input placeholder="Prepopulated" />
                    </div>
                    <div className="FlexChild">
                        <p>Email</p>
                        <input placeholder="Prepopulated"/>
                    </div>
                    <div className="FlexChild">
                        <p>Contact Number</p>
                        <input placeholder="Prepopulated"/>
                    </div>
                    <div className="FlexChild">
                        <p>Campaign</p>
                        <input placeholder="Prepopulated"/>
                    </div>
                </div>
                <div className="FlexContainer">
                    <div className="FlexChild">
                    <p>Lead Source</p>
                        <select>
                            <option>Select an option</option>
                        </select>
                    </div>
                    <div className="FlexChild">
                        <p>Contact Method</p>
                        <input placeholder="Prepopulated"/>
                    </div>
                    <div className="FlexChild">
                        <p>Suburb</p>
                        <input placeholder="Prepopulated" />
                    </div>
                    <div className="FlexChild">
                        <p>City</p>
                        <input placeholder="Prepopulated"/>
                    </div>
                    <div className="FlexChild">
                        <p>Elapsed Time</p>
                        <input placeholder="Prepopulated"/>
                    </div>
                    <div className="FlexChild">
                        <p>Reassign Lead</p>
                        <select>
                            <option>Select an option</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}