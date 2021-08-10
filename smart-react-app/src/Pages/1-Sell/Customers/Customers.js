import Sidebar from '../../../Components/SideNav/Sidebar'
import Gen2Button from '../../../Components/Buttons/Gen2Button/Gen2Button';
import VerticalLabled from '../../../Components/LabledInput/VerticalLabled'


export default function Customer() {

    return (
        <div id="customers">
            <Sidebar />
            <div className="container1">
               <h2>Manage your customers here.</h2>
                <Gen2Button value="Add New"/>
            </div>

            <div className="container2">
            <VerticalLabled/>
            <VerticalLabled/>
            <VerticalLabled/>
            <VerticalLabled/>
            </div>       

            <div className="container2">

            </div>      
        </div>
    )
}