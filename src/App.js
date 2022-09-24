import logo from './logo.svg';
import './App.css';
import Navbar from './componant/Navbar/Navbar';
import AllGuns from './componant/AllGuns/AllGuns';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const countIncrease = () => {
    setCount(count + 1);
  }
  return (

    < div className="App" >
      <Navbar count={count} />
      <AllGuns countIncrease={countIncrease} />
    </div >
  );
}

export default App;
