import { useEffect, useState } from 'react';
import "./App.css";
import MainPage from './pages/MainPage.jsx';

function App() {
  return (
    <div className={`flex flex-col items-center`}>
      <h1>Hello World</h1>
      <body>
        <MainPage />
      </body>
    </div>
  );
}

export default App;
