import CartProvider from './context/cart';
import { Home } from './pages/home';
import './style/global.ts';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { AddUser } from './pages/addUser';
import { SecondPage } from './pages/second';

function App() {
  return (
    <div className="App">
      <Router>
      <CartProvider>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/AddUser' element={<AddUser/>}/>
          <Route path='/SecondPage' element={<SecondPage/>}/>
        </Routes>
      </CartProvider>
      </Router>
    </div>
  );
}

export default App;
