import './App.css';
import { GloceryList } from './GloceryList';
import image from './shopping1.jpeg'
import imageTwo from './shopping2.jpeg'
// import { Input } from './Input';

function App() {
  return (
    <div>
    <h2 className='Items'>Add up to 9 items</h2>
    <div className="App">
      <h1>Glocery List</h1>
      <img className='item' src={ image } width='300px' alt='shopping1'/>
      <div className='List'>
      <GloceryList/>
      </div>
      <img className='item' src={ imageTwo } width='300px' alt='shopping2'/>
    </div>
    </div>
  );
}

export default App;
