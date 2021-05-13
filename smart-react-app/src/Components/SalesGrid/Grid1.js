import './Grid1.css';
import GenButton from '../Buttons/GenButton'


export default function Grid1() {

    return (

        <div className="container">
            <div className="wrapper">
                <div className="Box1">
                    <p>Date From</p>
                    <input type="date" />        
                </div>
                <div className="Box2">
                    <p>Date To</p>
                    <input type="date" />        
                </div>
                <div className="Box3">
                    <p>Product</p>
                    <input type="Text" />        
                </div>
                <div className="User">
                    <p>Date To</p>
                    <input type="Text" />        
                </div>
                <div className="Box5">
                    <p>Customer</p>
                    <input type="Test" />        
                </div>
                <div className="Box6">
                            
                </div>
                <div className="Box7">
                    <GenButton text="Update" style={{}}/>        
                </div>
            </div>
        </div>
            
    )
}