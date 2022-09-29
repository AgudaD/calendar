import './App.css';
import { useState } from 'react';
import Calendar from 'react-calendar';

function App() {
  const [value, onChange] = useState(new Date());
  return (
    <div className="App">
      <div style={{color:'white'}}>
        {value.toString()}
      </div>
      <Calendar onChange={onChange} value={value} minDate={new Date("01-01-2000")} maxDate={new Date("12-31-2030")} className="cal" />
    </div>
    
  );
}

export default App;
