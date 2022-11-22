import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.module.css';
import Header from './component/header';
import Info from './component/info';
import Menu from './component/menu';
import Review from './component/review';
import NavBar from './component/NavBar';
import reportWebVitals from './reportWebVitals';
import Section from './pages/Homepage';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const styles = {
  background: "#F0F0F3",
};

//index.js에서 App.js를 렌더링 중입니다. 코드 수정하지 않아도 괜찮습니다.

root.render(
  <React.StrictMode>
    {/* <Header />
    <body style={styles}>
    <Section></Section>
    </body> */}
    <App></App>
  </React.StrictMode>
);

/////////////////////////////////////
// 윤주영이 임의로 작성한 곳//
ReactDOM.render(
  <React.SrtictMode>
    <App/>
    </React.SrtictMode>,
    document.getElementById('root')
);
// 윤주영이 임의로 작성한 곳//
////////////////////////////////////////////

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
