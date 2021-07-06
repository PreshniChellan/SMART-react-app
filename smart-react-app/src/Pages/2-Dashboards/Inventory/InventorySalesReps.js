import Sidebar from '../../../Components/SideNav/Sidebar'
import '../Dashboards.css'
import { useHistory } from 'react-router'

import GenButton from '../../../Components/Buttons/GenButton'
import InvSaleRepFilter from '../Inventory/Inventory Components/Inventory Dash SalesReps/InvSaleRepsFilter'
import InvSalesRepTable from '../Inventory/Inventory Components/Inventory Dash SalesReps/InvSaleRepsTable'


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
            <h2 className='headerTitle'>View your sales reps inventory levels.</h2>
            <br /><br /><br />

            <InvSaleRepFilter />
            <br /><br />
            <InvSalesRepTable />

        </div>
    )
}
