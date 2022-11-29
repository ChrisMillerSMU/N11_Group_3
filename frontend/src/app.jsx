import { CreatePost } from './pages/createPost.jsx';
import { Home } from './pages/Home.jsx';
import { Landing } from './pages/landing.jsx';
import { Login } from './pages/login.jsx';
import { Post } from './pages/post.jsx';
import { Register } from './pages/register.jsx';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import { useEffect, useState } from "react";
import React from 'react';


export const App = () => {
  const [ account, setAccount ] = useState(undefined);

  function setAccountValue(value){
    setAccount(value);
  }
  return <>
    <div className="container">
      <div className="vh-100 overflow-hidden">
        <div className="h-100 overflow-scroll">
          <Router>
            <Routes>
              <Route path="/" element={<Landing/>} ></Route>
              <Route path="/Home" element={<Home account={account}/>} ></Route>
              <Route path="/Login" element={<Login setAccount={setAccount}/>} ></Route>
              <Route path="/Post" element={<Post/>} ></Route>
              <Route path="/CreatePost" element={<CreatePost/>} ></Route>
              <Route path="/REgister" element={<Register/>} ></Route>
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  </>;
}
