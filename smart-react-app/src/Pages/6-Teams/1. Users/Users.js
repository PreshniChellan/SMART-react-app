import React from 'react'
import '../Teams.css'
import Sidebar from '../../../Components/SideNav/Sidebar'
import Genbutton from '../../../Components/Buttons/GenButton'
import { useHistory } from 'react-router-dom'


const Users = () => {

    let history = useHistory(); 

    const NewUserBtn = () =>{
        history.push("/NewUser")
    }

    return (
        <div>
            <Sidebar />
            <br />
            <h2 className='headerTitle'>Manage your teams.</h2>
            <div className="btnAlignment">
                <Genbutton 
                    value="New"
                    onClick={NewUserBtn}                    
                />
            </div>
            <br /><br /><br /><br />
            <div className="Container_One">
                <div className="FlexContainer">
                    <div className="FlexChild">
                        <p>Team Supervisor</p>
                        <select>
                            <option>Select an option</option>
                        </select>
                    </div>
                    <div className="FlexChild">
                        <p>Channel</p>
                        <select>
                            <option>Select an option</option>
                        </select>
                    </div>
                    <div className="FlexChild">
                        <p>Region</p>
                        <select>
                            <option>Select an option</option>
                        </select>
                    </div>
                    <div className="FilterBtn">
                        <br/><br/>
                        <Genbutton 
                            value="Fliter"
                            className="FilterUpdate"
                            />
                    </div>
                </div>
            </div>
            <br /><br />
            <div>
                <table>
                    <tr>
                        <th>Team Name</th>
                        <th>Team Supervisor</th>
                        <th>Email</th>
                        <th>Chennel</th>
                        <th>Region</th>
                        <th>Team Members</th>
                        <th>Team Actions</th>
                        
            
                    </tr>
                    <tr class='rowHighlight'>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information">Edit</td>
                        
                    </tr>
                </table>
            </div>
                
        </div>
    )
}

export default Users
