import './App.css';
import Login from './component/login';
import Profile from './component/profile';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/profile' element={<Profile />} />
        <Route path='/' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;