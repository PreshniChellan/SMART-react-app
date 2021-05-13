import './App.css';
import Header from './Components/Header/Header'
import GenButton from './Components/Buttons/GenButton'
import Grid1 from './Components/SalesGrid/Grid1'


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
      <br /><br />
        <Grid1 />
    </div>
  );
}

export default App;
