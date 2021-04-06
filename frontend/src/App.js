import { BrowserRouter, Link, Route } from 'react-router-dom';
import './App.css';
import EmployeeEditScreen from './screens/EmployeeEditScreen';
import HomeScreen from './screens/HomeScreen';
import NewEmployeeScreen from './screens/NewEmployeeScreen';


function App() {


  return (
    <BrowserRouter>
      <div className="grid-container">
        <header>
          <div className="container">
            <nav className="navbar">
                <div className="navbar-nav">
                    <ul>
                      <li className="nav-item"> <Link to="/"> HOME </Link> </li>
                      <li className="nav-item"> <Link to="/newEmployee">Add</Link> </li>
                      <li className="nav-item"> <Link to="/signin">Sign In</Link></li>
                    </ul>
                </div>
            </nav>
          </div>
        </header>

        <main>
          <>
            <Route path="/" component= { HomeScreen } exact />
            <Route path="/newEmployee" component= { NewEmployeeScreen } /> 
            <Route path="/employee/:id/edit" component= { EmployeeEditScreen } />
            {/*  */}
          </>

        </main>
      </div>
      </BrowserRouter>
  );
}

export default App;
