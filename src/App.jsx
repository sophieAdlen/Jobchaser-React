import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import HomePage from "./components/Pages/HomePage";
import JobList from "./components/JobList";
import AboutPage from "./components/Pages/AboutPage";
import ContactPage from "./components/Pages/Contactpage";
import LoginPage from "./components/Pages/LoginPage";
import SignupPage from "./components/Pages/SignupPage";
import { AuthContext } from './Context/Authcontext';
import Header from './components/Header';
import Footer from './components/Footer';
import { useContext } from 'react';
import { auth } from "./firebase-config";

import "./App.css";

function ProtectedRoute() {

  const authContext = useContext(AuthContext)
  const isAuthenticated = authContext && authContext.user !== null

  console.log("isAuthenticated", isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to="/signup" replace />
}



function App() {

  const authContext = useContext(AuthContext);
  console.log("authContext: ", authContext);


  const isAuthenticated = authContext && authContext.user !== null;
  console.log("isAuthenticated", isAuthenticated)

  console.log(isAuthenticated);

  return (
  

    <BrowserRouter>
    <Navigate />
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/jobs" element={<ProtectedRoute />}>
            <Route path="/jobs" element={<JobList />} />
          </Route>
      </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}


export default App;


