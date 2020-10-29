import './App.css';
import Reg from './Components/Registration/register';
import Lands from './Components/Land/landing';
import {Router} from '@reach/router';
import Gabble from './Components/Gab/maingab';
function App() {
  return (
    <div>
      <Router>
        <Regs path='/reg'></Regs>
        <Landingpage path='/'></Landingpage>
        <Gabfinals path='/gab'></Gabfinals>
      </Router>
    </div>
  );
}
function Regs(){
  return <Reg></Reg>
}
function Gabfinals(){
  return <Gabble></Gabble>
}
function Landingpage(){
  return <Lands></Lands>
}
export default App;
