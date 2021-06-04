import Sidebar from '../../../Components/SideNav/Sidebar'
import DeviceFiller from '../../../Components/RegisterDevice Components/DeviceFiller'

export default function RegisterDevice() {


    return (
        <>
            <Sidebar />
            <h2>Register Device</h2>
            <DeviceFiller 
                value="Parent Device"
            />
            
        </>
    )
}