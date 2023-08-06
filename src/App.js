import { Container } from 'react-bootstrap';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import UpdateProfile from './components/UpdateProfile';
import AuthProvider from './context/AuthContext';
import RequirAuth from './context/RequirAuth';

function App() {
  return (
    <Container className='d-flex align-items-center justify-content-center' style={{minHeight:"100vh"}}>
      <div className='w-100' style={{maxWidth:"400px"}}>
        <BrowserRouter>
        <AuthProvider>
        <Routes>
          <Route index element={
          <RequirAuth>
<Dashboard/>
          </RequirAuth>
          }/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/forgot-password' element={<ForgotPassword/>}/>
          <Route path='/update-profile' element={<UpdateProfile/>}/>
        </Routes>
        </AuthProvider>
        </BrowserRouter>
      </div>
    </Container>
  );
}

export default App;
