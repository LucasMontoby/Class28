
import './App.css';
import Saludo  from "./Saludo";
import Lista from  "./Lista"
import Contador from "./Contador"
import Alerta from "./Alerta"

function App() {
  return (
    <div className="App">
     
    <Saludo nombre='Lucas'/>

    <Lista items={['item1', 'item2', 'item3', 'item4'] }/>

    <Contador/>

    <Alerta/>

    </div>
  );
}

export default App;
