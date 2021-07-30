import React from 'react'
import '../Teams.css'
import Genbutton from '../../../Components/Buttons/GenButton'
import SideBar from '../../../Components/SideNav/Sidebar'
import { useHistory } from 'react-router-dom'

const EditTeam = () => {

    let history = useHistory(); 

    const EditTeamBackBtn = () =>{
                history.push("/Teams")
            }

    return (
        <div>
            <SideBar />
            <br />
                <h2 className="headerTitle">Edit your team.</h2>
            <div className="btnAlignment">
            <Genbutton 
                    value="Delete"
                />{' '}
                <Genbutton 
                    value="Back"
                    onClick={EditTeamBackBtn}
                />{' '}
                <Genbutton 
                    value="Update"
                />
            </div>
            <br /><br /><br /><br />
            <div className="Container_One">
                <div className="FlexContainer">
                    <div className="FlexChild">
                        <p>Team Name</p>
                        <input placeholder="Pre-populated"/>
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
                        <input placeholder="Pre-populated"/>
                    </div>
                    <div className="FlexChild">
                        <p>City</p>
                        <input placeholder="Pre-populated"/>
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

export default EditTeam
