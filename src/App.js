import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';

function App() {
  const [count, setCount] = useState(1);
  const [evenOrOddCount, setEvenOrOdd] = useState('Odd');

  const evenOrOdd = (count)=>{
    if(count%2==0){
      return 'Even';
    }else{
      return 'Odd';
    }
}

  useEffect(()=>{
    setEvenOrOdd(evenOrOdd(count))
  },[count])
  return (
    <div className="App">
       <Header count = {count} setCount = {setCount} evenOrOddCount = {evenOrOddCount}/>
       <Main count = {count} setCount = {setCount} evenOrOddCount = {evenOrOddCount} />
    </div>
  );
}

export default App;
