import './App.css';
import Header from './Components/Header/Header'
import GenButton from './Components/Buttons/GenButton'


function App() {
  return (
    <div className="App">
        <Header />
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
