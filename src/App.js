
import { useState } from 'react';
import './App.css';
import { LC, NC, SC, UC } from './data/PassChar';

function App() {
  let [uppercase, setUppercase] = useState(false)
  let [lowercase, setLowercase] = useState(false)
  let [symbols, setSymbol] = useState(false)
  let [number, setNumber] = useState(false)
  let [passwordLength, setPasswordLength] = useState(10)
  let [finalPassword, setFinalPass] = useState('')

  let copyPass = () => {
    navigator.clipboard.writeText(finalPassword)
  }

  let createPassword = () => {
    let finalPass = ''
    let charSet = ''
    if (uppercase || lowercase || symbols || number) {
      if (uppercase) charSet += UC;
      if (lowercase) charSet += LC;
      if (symbols) charSet += SC;
      if (number) charSet += NC
      for (let i = 0; i < passwordLength; i++) {
        finalPass += charSet.charAt(Math.floor(Math.random() * charSet.length))
      }
      setFinalPass(finalPass)
    }
    else {
      alert("Please select atleast one checkbox")
    }
  }

  return (
    <div className="passwordbox">
      <h2>Password Generator</h2>

      <div className='passwordBoxin'>
        <input type='text' readOnly value={finalPassword} />
        <button onClick={copyPass}>Copy</button>
      </div>
      <div className='passlength'>
        <label>Password length</label>
        <input type='number' max={20} min={10} value={passwordLength} onChange={(event) => { setPasswordLength(event.target.value) }} />
      </div>

      <div className='passlength'>
        <label>Include Uppercase Latters</label>
        <input type='checkbox' checked={uppercase} onChange={() => setUppercase(!uppercase)} />
      </div>

      <div className='passlength'>
        <label>Include Lowercase Latters</label>
        <input type='checkbox' checked={lowercase} onChange={() => setLowercase(!lowercase)} />
      </div>

      <div className='passlength'>
        <label>Include Symbols</label>
        <input type='checkbox' checked={symbols} onChange={() => setSymbol(!symbols)} />
      </div>

      <div className='passlength'>
        <label>Include Number</label>
        <input type='checkbox' checked={number} onChange={() => setNumber(!number)} />
      </div>

      <button className='btn' onClick={createPassword}>Genrate Password</button>
    </div>
  );
}

export default App;
