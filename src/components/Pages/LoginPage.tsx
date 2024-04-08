import React from "react";
import Navigation from "../Navbar";
import LoginForm from "../LoginForm";

function LoginPage() {
 
  return (
    <>
    
      <Navigation isOpen={undefined} setIsOpen={undefined} />
     <LoginForm />
    
    </>
  );
}

export default LoginPage;
