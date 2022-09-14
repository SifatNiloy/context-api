import logo from './logo.svg';
import './App.css';
import One from './components/One/One';
import { createContext, useEffect, useState } from 'react';
import Three from './components/Three/Three';
export const RingContext = createContext('Ring')
function App() {
  // const [services, setServices] = useState([]);
  // useEffect(() => {
  //   fetch('services.json')
  //     .then(res => res.json())
  //     .then(data => setServices(data));
  // }, [])

  // console.log(services.name);
  return (
    // <RingContext.Provider value={services}>
    //   <One></One>
    // </RingContext.Provider>
    <div>
      <h2>this is app</h2>
      <Three></Three>
    </div>


  );
}

export default App;
