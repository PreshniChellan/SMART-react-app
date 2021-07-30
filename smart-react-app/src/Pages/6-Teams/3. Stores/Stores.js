import Sidebar from '../../../Components/SideNav/Sidebar'
import Genbutton from '../../../Components/Buttons/GenButton'
import '../Teams.css'
import { useHistory } from 'react-router-dom'



export default function Stores() {

    let history = useHistory(); 

    const NewStoresBtn = () =>{
            history.push("/NewStore")
        }

    return (
        <div>
            <Sidebar />
            <br />
            <h2 className="headerTitle">View your Outlets.</h2>
                <div className="btnAlignment">
                    <Genbutton 
                        value="New"
                        onClick={NewStoresBtn}
                    />
                </div>
                <br /><br /><br /><br />
                <div className="FlexContainer">
                    <div className="FlexChild">
                        <p>Outlet</p>
                        <input placeholder="Pre-populated" />
                    </div>
                    <div className="FlexChild">
                        <p>Region</p>
                        <input />
                    </div>
                    <div className="FlexChild">
                        <p>Suburb</p>
                        <input />
                    </div>
                    <div className="FlexChild">
                        <p>Client</p>
                        <input />
                    </div>
                    <div>
                        <br /><br />
                        <Genbutton 
                            value="Update"
                        />
                    </div>
                </div>
                <br />
                <div>
                    <table>
                        <tr>
                            <th>Store Name</th>
                            <th>Region</th>
                            <th>Suburb</th>
                            <th>No. of Staff</th>
                            <th>Client</th>
                            <th>Supervisor</th>
                            <th>Actions</th>
                
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
