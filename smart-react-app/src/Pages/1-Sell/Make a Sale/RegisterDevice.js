import Sidebar from '../../../Components/SideNav/Sidebar'
import DeviceFiller from '../../../Components/RegisterDevice Components/DeviceFiller'
import Input from '../../../Components/LabledInput/Input';
import GenButton from '../../../Components/Buttons/GenButton';

export default function RegisterDevice() {


    return (
        <>
            <Sidebar />
            <h2 className="register__device__h2">Register Device</h2>
            <div id="register__device">
                
                <div className="left_container">
                 <Input label="Parent Device"/>
                 <Input label="Serial Parent Code"/>
                 <Input label="Serial Holder Code"/>
                 <Input label="Serial Charger Code"/>
                </div>

                <div className="right_container">
                <Input label="Customer Details"/>
                 <Input label="Date of Purchase"/>
                 <Input label="Payment Type"/>
                 <Input label="Number of Devices"/>
                </div>

                <div className="box">
                <GenButton value="REGISTER"/>
                </div>
            </div>
            
        </>
    )
}