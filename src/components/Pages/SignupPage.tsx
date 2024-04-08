import React from "react";
import Navigation from "../Navbar";
import SignupForm from "../SignupForm"


function SignupPage() {
  

  return (
    <>
      <Navigation isOpen={undefined} setIsOpen={undefined} />
      <SignupForm />
  </>
);
}

export default SignupPage;

