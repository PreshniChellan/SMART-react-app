import Sidebar from '../../../Components/SideNav/Sidebar'
import '../Dashboards.css'
import { useHistory } from 'react-router'

import InvDashFilter from './Inventory Components/Inventory Dash Main/InvDashFilter'
import InvDashTable from './Inventory Components/Inventory Dash Main/InvDashTable'
import GenButton from '../../../Components/Buttons/GenButton'


export default function Inventory() {

{/* Route handling for buttons */}
    let history = useHistory(); 
    
    const handleRoute1 = () =>{history.push("/InventoryRetail")}
    const handleRoute2 = () =>{history.push("/InventorySalesReps")}
    const handleRoute3 = () =>{history.push("InventoryWarehouse")}


{/* Styling for components */}
    const RetailBtnStyle = {
        marginLeft: 150,
    }
    
    const BtnStyle = {
        float: 'right',
    }

    return (
        <div>
            <Sidebar />
            <br />
            <div className='btnAlignment'>
                <GenButton 
                    value="Retail"
                    onClick={handleRoute1}
                    className="RetailBtn"
                    style={RetailBtnStyle}
                    
                />{' '}
                <GenButton 
                    value="Sales Reps"
                    onClick={handleRoute2}
                    className="SalesRepBtn"
                    style={BtnStyle}
                />{' '}
                <GenButton 
                    value="Warehouses"
                    onClick={handleRoute3}
                    className="WarehouseBtn"
                    style={BtnStyle}
                    
                />{' '}
                <GenButton 
                    value="Export"
                    onClick={'#'}
                    className="ExportBtn"
                    style={BtnStyle}
                />
            </div>
            <br /><br />
            <h2 className='headerTitle'>View your inventory levels.</h2>
            <br /><br /><br />

            <InvDashFilter/>
            <br /><br />
            <InvDashTable />

        </div>
    )
}
