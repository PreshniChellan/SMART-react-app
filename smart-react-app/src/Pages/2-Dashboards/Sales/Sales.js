import { Redirect, useHistory } from 'react-router-dom'
import './Sales.css'
import Sidebar from '../../../Components/SideNav/Sidebar'
import GenButton from '../../../Components/Buttons/GenButton'


export default function Sales({ authorized }) {

    let history = useHistory(); 
    
    const handleRoute = () =>{
        history.push("/")
    }

    if (!authorized) {
        return <Redirect to='/' />
    }

    return (
        <div>
            <Sidebar />
            <div className='content'>
                <h2>Sales Page</h2>
                <GenButton 
                    value="Sales"
                    onClick={handleRoute}
                />
            
            </div>
        </div>
    )
}