import './App.css';
import { Routes, Route } from "react-router-dom"
import Homepage from './components/Homepage';
import Heading from './components/Heading';
import Exchanges from './components/Exchanges';
import Coins from './components/Coins';
import CoinDetails from './components/CoinDetails';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}  /> 
      <Route path='/exchanges' element= {<Exchanges/>} />
      <Route path='/coins' element={<Coins/>}/>
      <Route path='/coins/:id' element={<CoinDetails/>} />
    </Routes>
  );
}

export default App;