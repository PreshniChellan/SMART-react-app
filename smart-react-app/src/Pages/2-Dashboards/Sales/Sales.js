import './Sales.css'
import { useHistory } from 'react-router-dom'
import Sidebar from '../../../Components/SideNav/Sidebar'
import GenButton from '../../../Components/Buttons/GenButton'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    makeStyles,
} from '@material-ui/core'

function createData(ReceiptNumber, Date, Time, Customer, Product, Variable, Qty, LineValue, User) {
    return {
        ReceiptNumber, Date, Time, Customer, Product, Variable, Qty, LineValue, User
    }
}

const rows = [

    createData(
        '001', '12/02', '10am','Jane Doe', 'IQOS 3.0 Duo', 'White', 5, 'R1450', 'Agent 11'
        ),
    createData(
        '002', '14/02', '11am','Jule Smith', 'IQOS 3.0 Duo', 'Blue', 5, 'R1450', 'Agent 12'
        ),
    createData(
        '003', '17/02', '1pm','Joe Bob', 'IQOS 3.0 Duo', 'Brown', 5, 'R1450', 'Agent 14'
    ),
    createData(
        '003', '17/02', '1pm','Joe Bob', 'IQOS 3.0 Duo', 'Brown', 5, 'R1450', 'Agent 14'
    ),
    createData(
        '003', '17/02', '1pm','Joe Bob', 'IQOS 3.0 Duo', 'Brown', 5, 'R1450', 'Agent 14'
    ),
    createData(
        '003', '17/02', '1pm','Joe Bob', 'IQOS 3.0 Duo', 'Brown', 5, 'R1450', 'Agent 14'
    ),
    createData(
        '003', '17/02', '1pm','Joe Bob', 'IQOS 3.0 Duo', 'Brown', 5, 'R1450', 'Agent 14'
    ),
    createData(
        '003', '17/02', '1pm','Joe Bob', 'IQOS 3.0 Duo', 'Brown', 5, 'R1450', 'Agent 14'
    ),
    createData(
        '003', '17/02', '1pm','Joe Bob', 'IQOS 3.0 Duo', 'Brown', 5, 'R1450', 'Agent 14'
    ),
    createData(
        '003', '17/02', '1pm','Joe Bob', 'IQOS 3.0 Duo', 'Brown', 5, 'R1450', 'Agent 14'
    ),
]

const useStyles = makeStyles({
    table: {
        minWidth:650,
        maxWidth: 1400,
        marginLeft: 55,
        marginBottom: 50,
    },
})




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

        </div>
    )
}
