
import './Sales.css'
import { useHistory } from 'react-router-dom'
import Sidebar from '../../../Components/SideNav/Sidebar'
import GenButton from '../../../Components/Buttons/GenButton'


export default function Sales() {

    let history = useHistory(); 
    
    const handleRoute = () =>{
        history.push("/")
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