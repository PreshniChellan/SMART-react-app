import React from 'react'
import '../Teams.css'
import Genbutton from '../../../Components/Buttons/GenButton'
import SideBar from '../../../Components/SideNav/Sidebar'
import { useHistory } from 'react-router-dom'

const EditStore = () => {

    let history = useHistory(); 

    const EditStoreBackBtn = () =>{
                history.push("/Stores")
            }

    return (
        <div>
            <SideBar />
            <br />
                <h2 className="headerTitle">Edit an Outlet.</h2>
            <div className="btnAlignment">
                <Genbutton 
                    value="Back"
                    onClick={EditStoreBackBtn}
                />{' '}
                <Genbutton 
                    value="Create"
                />
            </div>
            <br /><br /><br /><br />
            <div className="Container_One">
                <div className="FlexContainer">
                    <div className="FlexChild">
                        <p>Name</p>
                        <input />
                    </div>
                    <div className="FlexChild">
                        <p>Client</p>
                        <select>
                            <option>Select an Option.</option>
                        </select>
                    </div>
                    <div className="FlexChild">
                        <p>Region</p>
                        <input placeholder="Predictive"/>
                    </div>
                    <div className="FlexChild">
                        <p>Suburb</p>
                        <input placeholder="Predictive"/>
                    </div>
                </div>
                <div className="FlexContainer">
                    <div className="FlexChild">
                        <p>Store Mail Address</p>
                        <input />
                        
                    </div>
                    <div className="FlexChild">
                        <p>Store Address</p>
                        <input />
                    </div>
                    <div className="FlexChild">
                        <p>Supervisor</p>
                        <select>
                            <option>Select an Option.</option>
                        </select>
                    </div>
                    <div className="FlexChild">
                        <p>Contact Number</p>
                        <input type="number"/>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default EditStore
