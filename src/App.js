import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [title,changeTitle] = useState(['플로베르의 앵무새','초원의 집','부덴브로크 가의 사람들']);
  let [like,changeLike] = useState(0);

  function changeTitleFunction(){
     /* var newArray = title;
    newArray[0] = '눈사람 자살사건';    
    changeTitle(newArray); 

    이렇게 쓰면 동작 안함. 
    왜? 자바스크립트에서 array나 object는 = 로 복사하면 각각 별개의 자료형이 생성되는 게 아니라 값을 공유함.
    var data1 = [1,2,3]; 
    var data2 = data1; 
    이렇게 하면 data1, data2가 각각 별개로 [1,2,3]을 저장하는 게 아니라 같은 값을 공유한다는 말임.
    그래서 완전히 개별 복사본을 만들어주는 카피가 필요함.   
    var 새 어레이 = [...원본어레이] <- 이렇게. 
    */
    var newArray = [...title]; 
    /* 이 ...은 ES6 신문법임. array나 object 왼쪽에 붙일 수 있고, 중괄호나 대괄호를 벗겨주세요 라는 뜻임
    예를 들어 ...[1,2,3] 이렇게 쓰면 1,2,3만 남음.
    그리고 두번째 용도!
    위에서 쓴 것처럼 array나 object 자료형을 deep copy 할 때 많이 씀. 
    var data1 = [1,2,3];
    var data2 = [...data1]; 이렇게 괄호 벗기고 다시 array로 만들면 
    완전 독립적인 array 복사본을 생성하는 copy가 가능해짐. 
    */
    
    newArray[0] = '눈사람 자살사건';
    changeTitle(newArray);    
    
  }

  function changeSortFunction(){
    var sortArray = [...title];
    sortArray.sort();
    changeTitle(sortArray);
  }

  return (
    <div className="App">
      <div className='main-nav'>
        <div>S T A Y * B E A U T I F U L</div>
      </div>
      <div className='title-list'>
        <h3> { title[0] } <span onClick={ ()=>{ changeLike(like + 1)} } >♥</span> { like } </h3> 
        {/* 리액트에서는 div onclick="실행할 자바스크립트" 의 문법이
        div onClick={실행할 함수} 로 바뀐다. 
        1. C가 대문자인 것 / 2. 중괄호 {} 사용하는 것 / 3. 그냥 코드가 아니라 함수를 쓰는 거  기억하기!

        div onClick={함수명}
        div onClick={function(){ 실행할 코드 }}
        div onClick={()=>{실행할 코드}}
        이거 다 가능함. 

        <h3> {title[0]} <span onClick={ ()=>{ like + 1 } } >?</span> { like }</h3>    
        ㄴ 이렇게 하면 틀린 이유
        state는 변수와는 다르게 값을 변경할 때 (((변경함수)))를 써야 함.
        changeLike(대체할 데이터) 이렇게 써야 함.
        */}                 

        <p>줄리언 반스</p>
        <hr />
        <h3>{title[1]}</h3>
        <p>로라 잉걸스</p>
        <hr />
        <h3>{title[2]}</h3>
        <p>토마스 만</p>
        <hr />
        <button class="basicBtn" onClick={changeTitleFunction}>제목 변경 버튼</button>
        <button class="basicBtn" onClick={changeSortFunction}>정렬 변경 버튼</button>
      </div>
    </div>
  );
}

export default App;
