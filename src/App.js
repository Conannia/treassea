import {Route, Routes } from 'react-router-dom'
import HomePage from './pages/home/home';
import LoginPage from './pages/login/login';
import RegisPage from './pages/register/register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>} exact/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
