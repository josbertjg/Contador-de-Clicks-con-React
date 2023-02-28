import './styles/App.scss';
import Contador from './components/Contador';
import Boton from './components/Boton';
import { useState } from 'react';

function App() {

  let [numClicks,setNumClicks] = useState(0);

  const increase = ()=>setNumClicks(numClicks+1);

  const blank = ()=>setNumClicks(0);

  return (
    <div className="App">
      <h1 className="mb-5">Desarrollado en ReactJS por <a href="https://josbertjg.github.io/" target="_blank">Josbert Guedez</a></h1>
      <div>
        <Contador num={numClicks}/>
        <Boton name='Click' isClickedButton={true} clickHandler={increase}/>
        <Boton name='Reiniciar' isClickedButton={false} clickHandler={blank}/>
      </div>
    </div>
  );
}

export default App;
