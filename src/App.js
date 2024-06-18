import { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState()
  const [height, setHeight] = useState()
  const [bmi, setBmi] = useState()
  const [message, setMessage] = useState()

  function reload() {
    window.location.reload()
  }
  
  function calcBmi(e) {
    e.preventDefault()
    const heightInm = height/100
    let calc = (weight / (heightInm * heightInm))
    setBmi(calc.toFixed(1))
    console.log(calc)
    
    if (calc<20){
      setMessage("You are under-weight")
    }
    else if (calc>=20 && calc<=25){
      setMessage("You are fit")
    }
    else {
      setMessage("You are over-weight")
    }
  }

  return (
    <div className='app'>
      <div className="container">
        <h1>BMI Calculator</h1>
        <form onSubmit={calcBmi}>
          <div class="mb-3">
            <label class="form-label">Weight (kg)</label>
            <input type="number" class="form-control" value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div class="mb-3">
            <label class="form-label">Height (m)</label>
            <input type="number" class="form-control" value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>

          <div className="buttons">
            <button type="submit" class="btn btn-primary" >Submit</button>
            <button type="button" class="btn btn-primary" onClick={reload}>Reload</button>
          </div>
        </form>
        <h5>Your BMI is {bmi}</h5>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default App;
