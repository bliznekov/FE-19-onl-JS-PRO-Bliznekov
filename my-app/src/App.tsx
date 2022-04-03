import React from 'react';
import './App.scss';
import Header from './component/header/Header';
import Main from './component/main/Main';
import Posts from './component/posts/Posts';
import Timer from './component/timer/Timer';



const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Posts />
      <Timer />
    </div>
  );
}

export default App;
