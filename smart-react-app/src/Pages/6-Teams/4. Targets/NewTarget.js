import React from 'react'
import '../Teams.css'
import SideBar from '../../../Components/SideNav/Sidebar'
import Genbutton from '../../../Components/Buttons/GenButton'
import { useHistory } from 'react-router-dom'

const NewTarget = () => {

    let history = useHistory(); 

    const NewTargetBackBtn = () =>{
                history.push("/TeamTarget")
            }

    return (
        <div>
            <SideBar />
            <br />
                <h2 className="headerTitle">Create a New Target.</h2>
            <div className="btnAlignment">
                <Genbutton 
                    value="Back"
                    onClick={NewTargetBackBtn}
                />{' '}
                <Genbutton 
                    value="Create"
                />
            </div>
            <br /><br /><br /><br />
            <div className="FlexContainer">
                <div className="FlexChild">
                    <p>Name</p>
                    <input />
                </div>
                <div className="FlexChild">
                    <p>Applicable Users</p>
                    <select>
                        <option>Select an option</option>
                    </select>
                </div>
                <div className="FlexChild">
                    <p>Frequency</p>
                    <select>
                        <option>Select an option</option>
                        <option></option>
                    </select>
                </div>
                <div className="FlexChild">
                    <p></p>
                    <select>
                        <option>Select an option</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default NewTarget
