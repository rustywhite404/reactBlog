import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Modal(){
  return(
    <div className='modal'>
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>        
    </div>
  )
}

function App() {

  let [title,changeTitle] = useState(['플로베르의 앵무새','초원의 집','부덴브로크 가의 사람들']);
  let [like,changeLike] = useState(0);
  let [likeCount,changeLikeCount] = useState([0,0,0]);
  let [modal,changeModal] = useState(false);
  let exArray = [2,3,4];
  let exArray2 = exArray.map(function(a){
    return a * 10
  });
  /* array 안의 모든 자료에 똑같은 작업을 해주고 싶을 때 map을 사용함. 소괄호 안에 콜백함수 하나 넣는 게 기본.
    이렇게 하면 map 안의 코드가 array의 자료 갯수만큼 실행된다. 
    map 함수는 원본 자료형을 변형시키지 않아서, 보통 새로운 변수에 담아서 사용함. 
    리액트에서는 이걸 반복문처럼 이용할 수 있다(아래 반복문 참고)
  */

  function normalFor(){
    /* 일반 for문은 이렇게 함수를 만들어서 그 안에서 쓰고 밖에서 호출해야 함. 
        함수 만들기 귀찮으니 코딩꼰대가 아니라면 그냥 map을 쓰라고 함. 
    */
    var normalArray = [];
    for(var i=0;i<3;i++){
      normalArray.push(<div>안녕</div>);
      /* 리액트에서는 html들을 그냥 array 안에 담아서 써도 잘 렌더링 해주니까 이렇게 써도 된다. */
    }
    return normalArray;
  }

  function changeLikeCountFunction(i){
    var newArray = [...likeCount];
    newArray[i]++;
    changeLikeCount(newArray); 
  }

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

  function changeModalFunction(){
    changeModal(true);
  }

  function changeModalFunction2(){
    {
      modal===false?changeModal(true):changeModal(false)
    }
  }


  return (    
    <div className="App"> 

      {/* 리액트 중괄호 내에서는 if문을 사용할 수 없어서, if문 대용으로 삼항연산자를 사용한다. 
            참고로 리액트에서 텅 빈 HTML을 의미하는 코드는 null이다. 
      */}


      {/* 리액트 중괄호 내에서는 if문을 사용할 수 없어서, if문 대용으로 삼항연산자를 사용한다. 
          참고로 리액트에서 텅 빈 HTML을 의미하는 코드는 null이다. 
      */}

      {/* 
          <Modal></Modal>
          이렇게 html을 function으로 따로 빼고, 원하는 곳에 한 문장으로 간결하게 끼워넣는 걸 컴포넌트Component라고 한다.
          1. 보통 대문자로 시작하고,
          2. return() 안에는 태그들이 평행하게 여러개 들어갈 수 없다. 최상위 div 또는 <></> 가 있어야 함. 이걸 fragments라고 한다. 
          3. component 위치는 App()과 나란히 만들어 주는 게 일반적이다. 결국 App()도 컴포넌트 생성 문법이기 때문. 
          일반적으로 컴포넌트용 function 안에다 또 다른 컴포넌트용 function을 만들지는 않는다.
          4. component 안에 다른 component를 넣을 수는 있다. 
          <컴포넌트><다른컴포넌트></다른컴포넌트><컴포넌트> 

          어떤 html을 컴포넌트로 만들면 좋을까? -> 반복되는 덩어리나 매우 자주 변경되는 덩어리, 다른 페이지가 필요할 경우 이 페이지 전체를 컴포넌트로 만들 수도 있고(필수는 아님)
          팀원과 협업할 때 컴포넌트 단위로 작업을 분배하기도 함. 

          컴포넌트의 단점 : 함수를 많이 만들면 관리가 힘들다. 
          제일 큰 단점 : Modal 컴포넌트에서 App(){}(다른 컴포넌트) 안에 있는 state를 사용하고 싶을 때 그냥 쓸 수 없음. props를 이용해서 전달해줘야 사용 가능함(그래서 귀찮음)
          => 그러니까 꼭 필요한 곳만 쪼개기로 하자. 
      */}

      <div className='main-nav'>
        <div>S T A Y * B E A U T I F U L</div>
      </div>
     

        {
          title.map(function(a, i){
            return(
              <div className='title-list'>
                <h3> {a} <span onClick={ ()=>{ changeLikeCountFunction(i)} } >♥</span> { likeCount[i] } </h3>
                <p>줄리언 반스</p>
                <hr />
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
              </div>
            )
          })
        }
         
             
        <button className="basicBtn" onClick={changeTitleFunction}>제목 변경 버튼</button>
        <button className="basicBtn" onClick={changeSortFunction}>정렬 변경 버튼</button>
        <button className="basicBtn" onClick={changeModalFunction}>모달창 열기</button>
        <button className="basicBtn" onClick={()=>{changeModal(false)}}>모달창 닫기</button>
        <button className="basicBtn" onClick={changeModalFunction2}>모달창 여닫기</button>
        {
          modal===true ? <Modal /> : null 
        }
        
      </div>
   
    
  );
}

export default App;
