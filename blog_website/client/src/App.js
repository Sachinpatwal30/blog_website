import React, { useContext } from 'react';
import TopBar from './components/TopBar/TopBar';
import Register from './pages/register/Register';
import Home from "./pages/home/Home";
import Login from './pages/login/Login';
import Write from './pages/write/Write';
import Single from './pages/single/Single';
import Setting from './pages/settings/Setting';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { Context } from './context/Context';

export default function App() {

  const {user}=useContext(Context);

  return (
    
        <Router>
          <TopBar />
          <Routes>
          <Route path="/" element={<Home /> }   /> 
          <Route path="/register" element={ user ? <Home />: <Register />} />
          <Route path="/login" element={user ? <Home />: <Login />} />
          <Route path="/write" element={user ? <Write />: <Register />} />
          <Route path="/settings" element={user ? <Setting />: <Login />} />
          <Route path="post/:post_id" element={<Single />} />
          </Routes>
        </Router>    
        )
}
