import Navbar from 'react-bootstrap/Navbar'

export default function HeaderLogin() {

    const loginStyle = {
        float: "right",
        marginRight: 15,
        paddingTop: 25,
    }

    return (
        <Navbar.Text style={loginStyle}>
            Signed in as: <a href="#login">Mark Otto</a>
        </Navbar.Text>
    )
}