import React from 'react'
import '../Teams.css'
import Genbutton from '../../../Components/Buttons/GenButton'
import SideBar from '../../../Components/SideNav/Sidebar'
import { useHistory } from 'react-router-dom'

const NewTeam = () => {

    let history = useHistory(); 

    const NewTeamBackBtn = () =>{
                history.push("/Teams")
            }

    return (
        <div>
            <SideBar />
            <br />
                <h2 className="headerTitle">Create a new team.</h2>
            <div className="btnAlignment">
                <Genbutton 
                    value="Back"
                    onClick={NewTeamBackBtn}
                />{' '}
                <Genbutton 
                    value="Save"
                />
            </div>
            <br /><br /><br /><br />
            <div className="Container_One">
                <div className="FlexContainer">
                    <div className="FlexChild">
                        <p>Team Name</p>
                        <input />
                    </div>
                    <div className="FlexChild">
                        <p>Supervisor</p>
                        <input />
                    </div>
                    <div className="FlexChild">
                        <p>Email Address</p>
                        <input />
                    </div>
                    <div className="FlexChild">
                        <p>Channel</p>
                        <input />
                    </div>
                </div>
                <div className="FlexContainer">
                    <div className="FlexChild">
                        <p>Region</p>
                        <select>
                                    <option>Select an option</option>
                                    <option>Western Cape</option>
                                    <option>Gauteng</option>
                                    <option>Kwa-Zulu Natal</option>
                                    <option>Eastern Cape</option>
                                    <option>Free State</option>
                                    <option>Limpopo</option>
                                    <option>Mpumalanga</option>
                                    <option>Northern Cape</option>
                                    <option>North West</option>
                                </select>
                    </div>
                    <div className="FlexChild">
                        <p>City</p>
                        <input />
                    </div>
                    <div className="FlexChild">
                        <p>Members</p>
                        <input placeholder="Multiple user selection"/>
                    </div>
                    <div className="FlexChild">
                        <p>Suburbs</p>
                        <input placeholder="Multiple suburb selector"/>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default NewTeam
