import React from 'react';
import FitnessForm from './FitnessForm';
import FitnessProgram from "./FitnessProgram"
function App() {

  const [fitnessEvent, setFitnessEvent] = React.useState({});


  function submitForm(payload) {

    if (payload !== null || undefined) {
      setFitnessEvent(payload);
      console.log(payload)
    }
  }



  return (
    <div className="App">


      <FitnessForm submit={submitForm} />
      <FitnessProgram />


    </div>
  );
}

export default App;
