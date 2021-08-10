import React from 'react'
import Sidebar from '../../../Components/SideNav/Sidebar';
import GenButton from '../../../Components/Buttons/GenButton';
import IconButton from '../../../Components/Buttons/IconButton';

//Icons Imports
import UserIcon from '../icons/user-circle-solid.svg'

export const FinishSale = () => {

    const onClick = () => {
        window.location.href = "/MakeSale";
    }


    return (
        <div>
            <Sidebar />
            <br/>
            <div className="finish__sale__body">
                <div className="finish__sale__left">
                    <h2>Confirm your products</h2>
                    <div className="inner__finish">
                        <div className="finish__sale__details_1">
                        <div className="finish__sale__details_1__inner">
                            <span>1</span>
                            <span>3.0 Duo Device (White)</span>
                            <span className="final__sale__cost">R876.00</span>
                        </div>
                        <div className="finish__sale__details_1__inner">
                            <span>1</span>
                            <span>3.0 Duo Device (White)</span>
                            <span className="final__sale__cost">R876.00</span>
                        </div>
                        </div>

                        <p>Notes on product:</p>

                        <div className="final__sale__notes">
                            <p>lorem KSQJFDHQWEDJQWBNEWQKJEHJWUIQOHIEHUIWQGEJJQWEHJGBWQUJHEJWHJQEUJJQWHEHJG</p>
                        </div>

                        <div className="finish__sale__subtotal">
                            <div>
                                <h4>Subtotal</h4>
                                <input type="number" disabled />
                            </div>
                            <div>
                                <h4>VAT 15%</h4>
                                <input type="number" disabled />
                            </div>
                        </div>
                    </div>
                    <div className="inner__second__finish">
                        <h2>BASKET TOTAL</h2>
                        <h3>1200</h3>
                    </div>
                    <div className="inner__back">
                    <GenButton value="Back" onClick={onClick}/>
                    </div>
                </div>
                <div className="finish__sale__right">
                    <div className="inner__right">
                        <img className="icons" src={UserIcon}/>
                        <h2>Selwyn Roberts</h2>
                    </div>
                    <div className="inner__right__second">
                        <span>Amount Due</span>
                        <input type="number" disabled />
                    </div>
                    
                    <div className="inner__right__third">
                    <div className="inner__right__third__1">
                    <IconButton width="80%" value="CARD"/>
                    <br/>
                    <IconButton width="80%" value="CASH"/>
                    </div>
                    <div className="inner__right__third__2">
                    <IconButton width="80%" value="ACCOUNT"/>
                    <br/>
                    <IconButton width="80%" value="PAY LINK"/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinishSale;
