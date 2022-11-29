import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect, Component} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './component/header';
import NavBar from './component/NavBar';
// import Info from './component/info';
// import Menu from './component/menu';
// import Review from './component/review';
// import NavBar from './component/NavBar';
// import reportWebVitals from './reportWebVitals';
import Section from './pages/Homepage';

import CreateStore from './pages/CreateStore';
import CreateMenu from './pages/CreateMenu';
import CreateReview from './pages/CreateReview';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import MyPageBookmark from './pages/MyPageBookmark';
import MyPageMenu from './pages/MyPageMenu';
import ReviewAll from './pages/ReviewAll';
import SignUp from './pages/SignUp';
import StoreDetail from './pages/StoreDetail';
import StoreListView from './pages/StoreListView';

//App.js를  index.js에서 렌더링 중입니다!

function App() {
  const [data, setData] = useState([{}])
  useEffect(() => {
      fetch("/").then(
          //response 객체의 json() 이용하여 json 데이터를 객체로 전환
          response=>response.json()
      ).then(
          data =>{
              setData(data);
          }
      ).catch(
          (err) => console.log(err)
      )
  },[])
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <div>
                            { (typeof data.users === 'undefined') ? (
                                <p>loading...</p>
                            ) : (
                                data.users.map((u) => <p>{u.name}</p>)
                            )}
                            </div>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/CreateStore" element={<CreateStore />}></Route>
          <Route path="/CreateMenu/:id" element={<CreateMenu />}></Route>
          <Route path="/CreateReview" element={<CreateReview />}></Route>
          <Route path="/Homepage" element={<Homepage />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/MyPage" element={<MyPage />}></Route>
          <Route path="/MyPageBookmark" element={<MyPageBookmark />}></Route>
          <Route path="/MyPageMenu" element={<MyPageMenu />}></Route>
          <Route path="/ReviewAll" element={<ReviewAll />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/StoreDetail" element={<StoreDetail />}></Route>
          <Route path="/StoreListView" element={<StoreListView />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
