import React from 'react';
import './App.scss';
import Header from './component/header/Header';
import Main from './component/main/Main';
import Posts from './component/posts/Posts';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Posts />
    </div>
  );
}

export default App;
