
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SignUp from './componenet/SignUp';
import Sign from "./componenet/Sign";
import Home from "./componenet/Home";
import React, { useEffect, useState } from "react";

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
     <Route path="/" element ={<SignUp/>}></Route>
     <Route path="/signin" element ={<Sign/>}></Route>
     <Route path="/home" element ={<Home/>}></Route>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
