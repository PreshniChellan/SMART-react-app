import { Redirect } from 'react-router-dom'
import Sidebar from '../Components/SideNav/Sidebar'

export default function Sales({ authorized }) {

    if (!authorized) {
        return <Redirect to='/' />
    }

    return (
        <div>
            <Sidebar />
        </div>
    )
}