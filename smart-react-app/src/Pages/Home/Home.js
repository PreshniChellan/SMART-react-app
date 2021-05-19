import Sidebar from '../../Components/SideNav/Sidebar'
import { Redirect } from 'react-router-dom'


export default function Inventory({ authorized }) {


    if (!authorized) {
        return <Redirect to='/' />
    }

    return (
        <div>
            <Sidebar />
            <h2>Home Page</h2>
        </div>
    )
}
