import { CreatePost } from './pages/createPost.jsx';
import { Home } from './pages/Home.jsx';
import { Landing } from './pages/landing.jsx';
import { Login } from './pages/login.jsx';
import { Register } from './pages/register.jsx';
import { Settings } from './pages/settings.jsx';
import { PostDetails } from './pages/postDetails';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { useState } from "react";
import React from 'react';


export const App = () => {
  const [account, setAccount] = useState(undefined);
  return <>
    <div className="container">
      <div className="vh-100 overflow-hidden">
        <div className="h-100 overflow-scroll">
          <Router>
            <Routes>
              <Route path="/" element={<Landing />} ></Route>
              <Route path="/home" element={<Home account={account} setAccount={setAccount}/>} ></Route>
              <Route path="/login" element={<Login setAccount={setAccount}/>} ></Route>
              <Route path="/createPost" element={<CreatePost account={account}/>} ></Route>
              <Route path="/register" element={<Register setAccount={setAccount} />} ></Route>
              <Route path="/settings" element={<Settings account={account} setAccount={setAccount}/>} ></Route>
              <Route path="/postDetails/:postID" element={<PostDetails/>} ></Route>
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  </>;
}
