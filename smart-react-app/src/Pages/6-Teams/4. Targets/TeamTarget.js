import Sidebar from '../../../Components/SideNav/Sidebar'
import Genbutton from '../../../Components/Buttons/GenButton'
import '../Teams.css'
import { useHistory } from 'react-router-dom'
import DatePicker from "react-datepicker";
import React, { useState } from 'react';

const Target = () => {

    let history = useHistory(); 

    const NewTargetsBtn = () =>{
            history.push("/NewTarget")
        }

    const [startDate, setStartDate] = useState(new Date());


    return (
        <div>
            <Sidebar />
            <br />
            <h2 className="headerTitle">Set up targets for your team and keep them motivated.</h2>
                <div className="btnAlignment">
                    <Genbutton 
                        value="New"
                        onClick={NewTargetsBtn}
                    />
                </div>
                <br /><br /><br /><br />
                <div className="FlexContainer">
                    <div className="FlexChild">
                        <p>Target Name</p>
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
                        <p>Channel</p>
                        <select>
                            <option>Select an option</option>
                        </select>
                    </div>
                    <div className="FlexChild">
                        <p>Date Created</p>
                        <DatePicker selected={startDate}
						onChange={(date) => setStartDate(date)}
						/>
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
                            <th>Target Name</th>
                            <th>Target Type</th>
                            <th>Measure</th>
                            <th>Date Created</th>
                            <th>Actions</th>
                        </tr>
                        <tr class='rowHighlight'>
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

export default Target
