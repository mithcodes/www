
import './App.css';

let name='react app'
// aha hm jo text likha karta tha usa hm curely baraces k hlp sa likh sakt haan
 let loo='App-header'
function App() {
// console k bhi use kr skta han
console.log('App')

  return (
    <div className='App'>
       <div className={loo}>
    {/* <div className="App-header"> aha hm atrribute de sakta han */}
      {name}
      <Demo></Demo>
      {/* demo ko attach kar raha han demo ko link karega tabhi kaam karega */}
    </div>
    </div>
  );
}

function Demo() { //aha demo bhi component haan
  return (
    <div className='App'>
    <div className="App-header">
      demo
    </div>
    </div>
  );
}

export default App;
