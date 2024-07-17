import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import ShowContacts from './components/ShowContacts';
import Error from './components/Error';
import AddContacts from './components/AddContacts';
import Navbar from './navbar/Navbar.jsx';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ShowContacts/>}></Route>
          <Route path='/show' element={<ShowContacts/>}></Route>
          <Route path='/register' element={<AddContacts/>}></Route>


          <Route path='*' element={<Error/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
