import React from 'react'
import SideBar from '../../../Components/SideNav/Sidebar'
import '../Teams.css'
import Genbutton from '../../../Components/Buttons/GenButton'
import { useHistory } from 'react-router-dom'

const EditUser = () => {

    let history = useHistory(); 

    const EditBackToUserBtn = () =>{
                history.push("/Users")
            }

    return (
        <div>
            <SideBar />
            <br />
                <h2 className="headerTitle">Edit this user account.</h2>
            <div className="btnAlignment">
                <Genbutton 
                    value="Delete"
                />{' '}
                <Genbutton 
                    value="Back"
                    onClick={EditBackToUserBtn}
                />{' '}
                <Genbutton 
                    value="Update"
                />
            </div>
            <br /><br /><br /><br />
            <div className="Container_One">
                <div className="FlexContainer">
                    <div className="FlexChild">
                        <p>Username</p>
                        <input />
                    </div>
                    <div className="FlexChild">
                        <p>Name</p>
                        <input />
                    </div>
                    <div className="FlexChild">
                        <p>Surname</p>
                        <input />
                    </div>
                    <div className="FlexChild">
                        <p>Email Address</p>
                        <input />
                    </div>
                </div>
                <div className="FlexContainer">
                    <div className="FlexChild">
                        <p>Store</p>
                        <select>
                            <option>Select an option</option>
                        </select>
                    </div>
                    <div className="FlexChild">
                        <p>Team</p>
                        <select>
                            <option>Select an option</option>
                        </select>
                    </div>
                    <div className="FlexChild">
                        <p>Region</p>
                        <input />
                    </div>
                    <div className="FlexChild">
                        <p>User Type</p>
                        <input />
                    </div>
                </div>

            </div>






        </div>
    )
}

export default EditUser
