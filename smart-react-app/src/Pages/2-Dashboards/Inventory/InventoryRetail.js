import Sidebar from '../../../Components/SideNav/Sidebar'
import '../Dashboards.css'
import { useHistory } from 'react-router'

import GenButton from '../../../Components/Buttons/GenButton'
import InvRetailFilter from '../../2-Dashboards/Inventory/Inventory Components/Inventory Dash Retail/InvRetailFilter'
import InvRetailTable from '../../2-Dashboards/Inventory/Inventory Components/Inventory Dash Retail/InvRetailTable'


export default function Inventory() {

{/* Route handling for buttons */}
    let history = useHistory(); 
    
    const handleRoute1 = () =>{history.push("/Inventory")}
    


{/* Styling for components */}
    const BackBtnStyle = {
        marginLeft: 150,
    }
    
    const ExportBtnStyle = {
        float: 'right',
    }

    return (
        <div>
            <Sidebar />
            <br />
            <div className='btnAlignment'>
                <GenButton 
                    value="Back"
                    onClick={handleRoute1}
                    className="Back"
                    style={BackBtnStyle}
                    
                />{' '}
                <GenButton 
                    value="Export"
                    onClick={'#'}
                    className="ExportBtn"
                    style={ExportBtnStyle}
                />
            </div>
            <br /><br />
            <h2 className='headerTitle'>View your stores inventory levels.</h2>
            <br /><br /><br />

            <InvRetailFilter />
            <br /><br />
            <InvRetailTable />

        </div>
    )
}
