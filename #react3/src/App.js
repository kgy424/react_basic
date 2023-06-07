import "./App.css";
import Body from "./component/Body";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Children from "./component/Children";

function App() {
  const name = "KGY"
  const footProps = {
    name: "KGY",
    location: "Busan"
  }

  function handleClick(){
    console.log("함수형 클릭")
  }

  const arrowClick=()=>{
    console.log("화살표 함수 실행")
  }
  
  return (
    <div>
      <Header name={name} />
      <Body name={name} location="Busan" />
      <Footer {...footProps} />
      <Children>
        <div>Child Component</div>
      </Children>
      <button onClick={handleClick}>함수형 클릭</button>
      <button onClick={arrowClick}>화살표 함수 클릭</button>
    </div>
  );
}

export default App;
