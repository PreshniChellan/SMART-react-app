import './Sales.css'
import { useHistory } from 'react-router-dom'
import Sidebar from '../../../Components/SideNav/Sidebar'
import GenButton from '../../../Components/Buttons/GenButton'


    

    export default function Sales() {

        let history = useHistory(); 
    
        const handleRoute1 = () =>{
            history.push("/Home")
        }
        const handleRoute2 = () =>{
            history.push("/MakeSale")
        }

        const exchangeBtnStyle = {
            marginLeft: 150,
        }
        
        const newSaleBtnStyle = {
            float: 'right',
        }


        return (
            <div>
                <Sidebar />
                <h2>Sales Page</h2>
                <div className='titleLine'>
                <h2 className='headerTitle' >Make a sale and view your current history</h2>
                
            <div className='btnAlignment'>
                <GenButton 
                    value="Exchange"
                    onClick={handleRoute1}
                    className="exchangeBtn"
                    style={exchangeBtnStyle}
                    
                />{' '}
                <GenButton 
                    value="New Sale"
                    onClick={handleRoute2}
                    className="newSaleBtn"
                    style={newSaleBtnStyle}
                />
            </div>
            </div><br /><br /><br />
            <br /><br /><br />
    
    
            </div>
        )

    }
    

    

