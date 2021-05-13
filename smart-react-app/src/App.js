import './App.css';
import Header from './Components/Header/Header'
import GenButton from './Components/Buttons/GenButton'
import SideNav from './Components/SideNav/SideNav';


function App() {
  return (
    <div className="App">
        <Header />
        <SideNav/>
        <br />
        <h2>Make a sale and view your current history.</h2>
        <br />
        <div className="topbtns">
            <GenButton text="Export"></GenButton>{" "}
            <GenButton text="New Sale"></GenButton>
        </div>
                
    </div>
  );
}

export default App;
