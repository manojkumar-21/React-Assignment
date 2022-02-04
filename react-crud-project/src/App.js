
import './App.css';
import {
	BrowserRouter as Router,
	Routes,
  Route,
} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Navbar from './components/Navbar/Navbar';
import Employees from './components/Employees/Employees';
import Products from './components/Products/Products';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import AddEmployee from './components/AddEmployees/AddEmployee';
import EditEmployee from './components/EditEmployees/EditEmployee';
import Cart from './components/Cart/Cart';



function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} ></Route>
          <Route exact path="/home" element={<Home />} ></Route>
          <Route exact path="/employees" element={<Employees />} ></Route>
          <Route exact path="/products" element={<Products />} ></Route>
          <Route exact path="/add" element={<AddEmployee />} ></Route>
          <Route exact path="/edit/:empid" element={<EditEmployee />} ></Route>
          <Route exact path="/cart" element={<Cart />} ></Route>
          <Route element={ <NotFound/>}></Route>
        </Routes>
      </div>
      
    </Router>
    
  );
}

export default App;
