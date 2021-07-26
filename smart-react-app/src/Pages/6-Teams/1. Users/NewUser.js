import React from 'react'
import Sidebar from '../../../Components/SideNav/Sidebar'
import '../Teams.css'
import Genbutton from'../../../Components/Buttons/GenButton'
import { useHistory } from 'react-router-dom'

const NewUser = () => {

    let history = useHistory(); 

    const NewUserBackBtn = () =>{
                history.push("/Users")
            }

    return (
        <div>
            <Sidebar />
            <br />
            <h2 className='headerTitle'>Create a new user.</h2>
                <div className="btnAlignment">
                    <Genbutton 
                        value="Back"
                        onClick={NewUserBackBtn}                    
                    />{' '}
                    <Genbutton 
                        value="Save"                                        
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
                                <p>User Type</p>
                                <select>
                                    <option>Select an option</option>
                                </select>
                            </div>
                        </div>
                        <br />
                        <div className="Container_two"> 
                            <div className="FlexContainer">
                                <div className="FlexChild">
                                    <p>Next of Kin Name</p>
                                    <input />
                                </div>
                                <div className="FlexChild">
                                    <p>Next of Kin Surname</p>
                                    <input />
                                </div>
                                <div className="FlexChild">
                                    <p>Contact Number</p>
                                    <input />
                                </div>
                                <div className="FlexChild">
                                    <p>Email Address</p>
                                    <input />
                                </div>
                            </div>
                            <div className="FlexContainer">
                            <div className="FlexChild">
                                    <p>Next of Kin Name</p>
                                    <input />
                                </div>
                                <div className="FlexChild">
                                    <p>Next of Kin Surname</p>
                                    <input />
                                </div>
                                <div className="FlexChild">
                                    <p>Contact Number</p>
                                    <input />
                                </div>
                                <div className="FlexChild">
                                    <p>Email Address</p>
                                    <input />
                                </div>
                            </div>
                        </div>
        </div>
                    
                
    )
}

export default NewUser
