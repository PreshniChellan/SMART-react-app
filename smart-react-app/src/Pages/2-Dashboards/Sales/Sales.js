
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
                <div className='buttons'>
                <GenButton 
                    value="Button 1"
                    onClick={handleRoute}
                />{' '}
                <GenButton 
                    value="Button 2"
                    onClick={handleRoute}
                />           
                </div>
            
            </div>
            <br />
            <br />
            <br />

            

            


        </div>
    )
}