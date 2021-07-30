import Sidebar from '../../../Components/SideNav/Sidebar'
import '../Teams.css'
import GenButton from '../../../Components/Buttons/GenButton'
import { useHistory } from 'react-router-dom'


export default function Teams() {

    let history = useHistory(); 

    const CreateNewTeamBtn = () =>{
            history.push("/NewTeam")
        }

    return (
        <div>
            <Sidebar />
            <br />
            <h2 className="headerTitle">Manage your teams.</h2>
            <div className="btnAlignment">
                <GenButton 
                    value="New"
                    onClick={CreateNewTeamBtn}
                />
            </div>
            <br /><br /><br /><br />
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
                <div className="FlexChild">
                    {/* Spacing Div */}
                </div>
                
                <div>
                    <br /><br />
                    <GenButton 
                        value="Filter"
                    />
                </div>
            </div>
            <br />
            <div>
                <table>
                    <tr>
                        <th>Team Name</th>
                        <th>Team Supervisor</th>
                        <th>Email</th>
                        <th>Channel</th>
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
