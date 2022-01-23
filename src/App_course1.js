import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  var data = 'Hello';
  let posts = '강남 고기 맛집';
  let [a,b] = useState('steam 게임 추천'); 
  {/* useState()는 state를 하나 만들어주는 함수다. useState(저장할 데이터) 이렇게 쓰면 state에 데이터를 저장 할 수 있다.
  그럼 [a,b]라는 이 array는 뭘 의미할까? : ES6 destructuring를 이용해서 저장해서 쓰면 된다. a에는 실제 저장할 데이터가, b에는 저장할 데이터를 변경시킬 함수가 들어있다. 

  ES6 destructuring문법이란? :
  내가 array 안에 있는 데이터들을 변수로 쉽게 저장하고 싶을 때 쓰는 신문법이다. 
  ex) var [name, age] = ['kim',20] 이렇게 쓰면 name = 'kim', age = 20이라는 변수가 자동으로 생성된다. 
  
  즉, 위 케이스에서 a는 'steam게임 추천'이라는 데이터가 들어있는 state이고, b는 이 데이터의 변경을 도와주는 함수이다(let [글제목, 글제목변경])

  (((왜 굳이 변수 안 쓰고 state에 저장해서 씀?))) -> 변수가 변경될 때 자동으로 관련된 html을 재렌더링 되게 하고 싶으면 써야함. 
  리액트는 state가 수정되면 state가 포함된 HTML을 자동으로 재렌더링 해준다. 
  사용자가 버튼을 눌렀을 때 어떤 텍스트가 변경되게 하고 싶을 때 -> state가 새로고침 없이 바로 재렌더링 해준다는 뜻. 
  일반 변수는 자동으로 재랜더링 해주지 않는다. 
  모든 데이터를 state로 저장할 필요는 없다(로고 등 바뀌지 않는 데이터들은 일반 변수로 저장해도 OK)
  */}
  let [c,d] = useState(['닌텐도 게임 추천', '오늘의 RPG게임 순위']);  {/* 이렇게 array나 Object로도 넣을 수 있음 */}

  return (
    <div className="App">
      <div className='black-nav'>
        <div>S T A Y * B E A U T I F U L - </div>
         {/* 리액트에서는 class=""를 넣을 때 className=""을 사용한다 */}
         <div>{data} - </div>
         {/* 리액트에서 데이터바인딩을 하고 싶으면 {} 안에 변수명만 담으면 된다(편리!) 
              변수명 뿐만 아니라 함수 등도 집어넣을 수 있고, href, id, className, src등의 html 속성에도 데이터바인딩이 가능하다. 
         */}
         <div className={data}> 이렇게 - </div>

         <div style={{color:'blue', fontSize:'24px'}}>- 글씨</div>
         {/* 스타일용 오브젝트 자료형은 이렇게 {속성명:'속성값'} 으로 넣는다.
         단, 속성명에 -(대시)를 쓸 수 없다. 항상 카멜케이스로 사용해야 함.
         이렇게 쓰기 너무 귀찮으니까 가급적 변수에 따로 저장해놓고 쓰거나 css파일에 class를 만들어서 쓰도록 하자. */}
      </div>
      <div className='list'>
        <h3>{a}</h3> {/* state도 일반 변수처럼 바인딩 된다. */}
        <p>1월 17일 발행</p>
        <hr />
        <h3>{c[0]}</h3> {/* state도 일반 변수처럼 바인딩 된다. */}
        <p>1월 18일 발행</p>
        <hr />
        <h3>{c[1]}</h3> {/* state도 일반 변수처럼 바인딩 된다. */}
        <p>1월 19일 발행</p>
        <hr />

      </div>
    </div>
  );
}

export default App;
