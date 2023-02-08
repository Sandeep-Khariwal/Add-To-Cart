import './App.css';
// import "./index.css"

import { BrowserRouter as Router , Routes , Route } from "react-router-dom"
import {Provider} from "react-redux"
import Home from './components/Home';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import store from './store/Store';
import Error from './components/Error';

import "./styles/error.scss"

function App() {
  return (
    <div className="App">
      <Provider store={store} >
      <Router>
        <Navbar/>
        <Routes>
          <Route  path='/' element={<Home/>} ></Route>
          <Route  exact path='/cart' element={<Cart/>} ></Route>
          <Route  path='*' element={<Error/>} ></Route>
        </Routes>
      </Router>
      </Provider>
    </div>
  );
}

export default App;
