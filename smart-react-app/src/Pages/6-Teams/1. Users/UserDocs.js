import React from 'react'
import SideBar from '../../../Components/SideNav/Sidebar'
import Genbutton from '../../../Components/Buttons/GenButton'
import { useHistory } from 'react-router-dom'
import '../Teams.css'

const UserDocs = () => {

    let history = useHistory(); 

    const BackToUsersBtn = () =>{
                history.push("/Users")
            }

    return (
        <div>
            <SideBar />
            <br />
            <h2 className="headerTitle">Upload required documents.</h2>
                <div className="btnAlignment">
                    <Genbutton 
                        value="Back"
                        onClick={BackToUsersBtn}
                    />{' '}
                    <Genbutton 
                        value="Save"
                    />          
                </div>
                <br /> <br /><br /> <br />
                <div className="FlexContainer">                    
                    <div className="FlexChild">
                        <p>Proof of Address</p>
                        <input placeholder="Upload File"/>
                    </div>
                    <div className="FlexChild">
                        <p>Copy of ID</p>
                        <input placeholder="Upload File"/>
                    </div> 
                    <div className="FlexChild">
                        <p>Proof of Bank Acc.</p>
                        <input placeholder="Upload File"/>
                    </div> 
                    <div className="FlexChild">
                        <p>Copy of Contract</p>
                        <input placeholder="Upload File"/>
                    </div>  
                    <div>
                        <br /><br />
                        <Genbutton 
                            value="Upload"
                        />
                    </div>
                </div>
        </div>
    )
}

export default UserDocs
