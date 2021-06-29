import '../SellPages.css'
import { useHistory } from 'react-router-dom'
import Sidebar from '../../../Components/SideNav/Sidebar'
import GenButton from '../../../Components/Buttons/GenButton'
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


    

    export default function Sales() {

        let history = useHistory(); 
    
        const handleRoute1 = () =>{
            history.push("/Home")
        }
        const handleRoute2 = () =>{
            history.push("/MakeSale")
        }

        const [startDate, setStartDate] = useState(new Date());
        const [endDate, setEndDate] = useState(new Date());

        const exchangeBtnStyle = {
            marginLeft: 150,
        }
        
        const newSaleBtnStyle = {
            float: 'right',
        }

        const updateStyleBtn = {
            paddingTop:250,
        }


        return (
            <div style={{paddingBottom:50}}>
                <Sidebar />
                <div className='titleLine'>
                <h2 className='headerTitle'>Make a sale and view your current history</h2>
                
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
            <div className="FlexContainer">
                
                    <div className="FlexChild">
                        <p>Date From</p>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                    <div className="FlexChild">
                        <p>Date To</p>
                        <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
                    </div>
                    <div className="FlexChild">
                        <p>Product</p>
                        <input />
                    </div>
                    <div className="FlexChild">
                        <p>User</p>
                        <input />
                    </div>
                    <div className="FlexChild">
                        <p>Customer</p>
                        <input />
                    </div>
                    <div className="UpdateBtn">
                        <br/><br/>
                        <GenButton 
                            value="Update"
                            className="salesUpdate"
                            style={updateStyleBtn}
                            />
                    </div>
            </div>
            <br /> <br />
            <div>
                <table>
                    <tr>
                        <th>Barcode</th>
                        <th>Product</th>
                        <th>Variable</th>
                        <th>Supplier</th>
                        <th>Brand</th>
                        <th>Stock</th>
                        <th>Retail Price</th>
                        <th>Date Created</th>
                        <th>Product Actions</th>
            
                    </tr>
                    <tr class='rowHighlight'>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                    </tr>
                    <tr class='rowHighlight'>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                    </tr>
                    <tr class='rowHighlight'>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                    </tr>
                    <tr class='rowHighlight'>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                        <td aria-placeholder="Row 1 information"></td>
                    </tr>
                </table>
            </div>
    
    
            </div>
        )

    }
    

    

