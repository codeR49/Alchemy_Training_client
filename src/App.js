import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from './Page/Signin/Signin';
import { AuthProvider } from './Component/Utils/Auth';
import RequireAuth from "./Component/ProtectedRoute/RequireAuth";
import Home from './Page/Layouts/Home';
import Trainer from './Page/Trainer/Trainer';
import TrainerSelctor from './Page/Layouts/TrainerSelctor';

function App() {
  return (
    <div >
      <AuthProvider>
  <BrowserRouter>
  <Routes>
  <Route exact path="/" element={<Signin />}/>
  <Route exact path="/i" element={<RequireAuth><Home/></RequireAuth>}/>
  <Route exact path="/TrainerSelector" element={<RequireAuth><TrainerSelctor/></RequireAuth>}/>
  </Routes>
  </BrowserRouter>
</AuthProvider>
    </div>
  );
}

export default App;
