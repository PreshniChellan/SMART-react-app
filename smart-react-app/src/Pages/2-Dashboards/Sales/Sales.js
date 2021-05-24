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


export default function Sales(props) {

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


    const classes = useStyles()
    

    return (
        <div>
            <Sidebar />
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
            
            <TableContainer component={Paper}>
                <Table className={classes.table} >
                    <TableHead>
                        <TableRow>
                            <TableCell>Receipt Number</TableCell>
                            <TableCell align="left">Date</TableCell>
                            <TableCell align="left">Time</TableCell>
                            <TableCell align="left">Customer</TableCell>
                            <TableCell align="left">Product</TableCell>
                            <TableCell align="left">Variable</TableCell>
                            <TableCell align="left">Qty</TableCell>
                            <TableCell align="left">Line LineValue</TableCell>
                            <TableCell align="left">User</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.ReceiptNumber}>
                                <TableCell component="th" scope="row">
                                    {row.ReceiptNumber}
                                </TableCell>
                                <TableCell align="left">{row.Date}</TableCell>
                                <TableCell align="left">{row.Time}</TableCell>
                                <TableCell align="left">{row.Customer}</TableCell>
                                <TableCell align="left">{row.Product}</TableCell>
                                <TableCell align="left">{row.Variable}</TableCell>
                                <TableCell align="left">{row.Qty}</TableCell>
                                <TableCell align="left">{row.LineValue}</TableCell>
                                <TableCell align="left">{row.User}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            
        </div>
    )
}
