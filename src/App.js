import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Modal(props){
  return(
    <div className='modal'>
      <h2>제목 : {props.title[props.selectTitle]}</h2>
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

  let[selectTitle, changeSelectTitle] = useState(0);



  function normalFor(){
    var normalArray = [];
    for(var i=0;i<3;i++){
      normalArray.push(<div>안녕</div>);
    }
    return normalArray;
  }

  function changeLikeCountFunction(i){
    var newArray = [...likeCount];
    newArray[i]++;
    changeLikeCount(newArray); 
  }

  function changeTitleFunction(){     
    var newArray = [...title]; 
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
      <div className='main-nav'>
        <div>S T A Y * B E A U T I F U L</div>
      </div>
        {
          title.map(function(a, i){
            return(
              <div className='title-list'>
                <h3 onClick={()=>{changeSelectTitle(i)}}> {a} <span onClick={ ()=>{ changeLikeCountFunction(i)} } >♥</span> { likeCount[i] } </h3>
                <p>줄리언 반스</p>
                <hr />          
              </div>
            )
          })
        }
             
        <button className="basicBtn" onClick={changeTitleFunction}>제목 변경 버튼</button>
        <button className="basicBtn" onClick={changeSortFunction}>정렬 변경 버튼</button>
        <button className="basicBtn" onClick={changeModalFunction}>모달창 열기</button>
        <button className="basicBtn" onClick={()=>{changeModal(false)}}>모달창 닫기</button>
        <button className="basicBtn" onClick={changeModalFunction2}>모달창 여닫기</button>
        <br />
        <button className="basicBtn" onClick={()=>{changeSelectTitle(0)}}>0번 글</button>
        <button className="basicBtn" onClick={()=>{changeSelectTitle(1)}}>1번 글</button>
        <button className="basicBtn" onClick={()=>{changeSelectTitle(2)}}>2번 글</button>

        {
          modal===true ? <Modal title={title} selectTitle={selectTitle} /> : null 
        }
        {/* App 안에 들어있는 <Modal> 컴포넌트를 부모-자식 관계라고 표현할 수 있는데, 
        자식 컴포넌트가 부모 컴포넌트 안에 있는 state를 가져다 써야 할 경우가 있다. 
        그럴 때는 {부모에 있던 state이름} 이렇게 쓰면 안 되고, props라는 문법을 사용해서
        {props.state이름}  이렇게 써야 한다. 
        ((props 사용법 - 중요!))
          1. <자식컴포넌트 전송할이름 = {state명}> 이렇게 작성 후 
          2. 자식 컴포넌트를 선언하는 function 안에 파라미터를 하나 만들어준다. 

        참고 1. props는 <Modal title={title} 이런거={이거} 저런거={저거}> 등 갯수 제한 없이 전달이 가능하다. 
        참고 2. props라는 파라미터에는 전송한 모든 props 데이터가 들어간다. props.title 처럼 원하는 것만 꺼내서 쓰면 됨. 
        참고 3. props는 꼭 {변수명} 으로만 전달해야 하는 건 아니다. <Modal title="미저리"> 이렇게 일반 텍스트도 전송이 가능하다. 
        */}
        
      </div>
   
    
  );
}

export default App;
