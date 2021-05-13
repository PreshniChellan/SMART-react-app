import Navbar from 'react-bootstrap/Navbar'
import SmartBG from '../Images/Word-NoBG.png'
import { TiMessage } from 'react-icons/ti'
import { BsBell } from 'react-icons/bs'
import HeaderLogin from './HeaderLogin'
import { IconContext } from 'react-icons/lib'


export default function Header() {

    const navstyle = {
        top: 0,
        left: 0,
        right: 0,
        height: "auto",
        width: "auto",
        backgroundImage: "linear-gradient(to right, #7E8FDE, #5BA4D2, #35BBC2)",
    }
       
    const imgStyle = {
        width: 127,
        height: 28,
        paddingTop:25,
        paddingBottom:25,
        paddingLeft: 15,
    }

    const bellStyle = {
        color: "white",
        float: "right",
        marginRight: 5,
        paddingTop: 25,
        
    }

    const messStyle = {
        color: "white",
        float: "right",
        paddingTop: 25,
        marginRight: 50,
    }
    
    
    return (
        <>
            <Navbar bg="dark" style={navstyle}>
                <Navbar.Brand href="#home">
                <img
                    style={imgStyle}
                    src={SmartBG}
                    className="d-inline-block align-top"
                    alt="Smart-Logo"
                />
                </Navbar.Brand>
                    <HeaderLogin />
                <IconContext.Provider value={{size:"1.8em"}}>
                    <TiMessage style={messStyle} />
                    <BsBell style={bellStyle} />
                </IconContext.Provider>                    
            </Navbar>
        </>
    )
}