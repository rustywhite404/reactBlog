import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [title,changeTitle] = useState(['플로베르의 앵무새','초원의 집','부덴브로크 가의 사람들'])
  return (
    <div className="App">
      <div className='main-nav'>
        <div>S T A Y * B E A U T I F U L</div>
      </div>
      <div className='title-list'>
        <h3>{title[0]}</h3> 
        <p>줄리언 반스</p>
        <hr />
        <h3>{title[1]}</h3>
        <p>로라 잉걸스</p>
        <hr />
        <h3>{title[2]}</h3>
        <p>토마스 만</p>
        <hr />

      </div>
    </div>
  );
}

export default App;
