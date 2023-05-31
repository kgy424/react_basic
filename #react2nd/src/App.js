import './App.css';
import Header from './components/header';
import Menu from './components/Menu';

function App() {
  return (
    <div>
      <Menu text="Green"/>
      <Menu text="Academy"/>
      <Header color="Red" num={1}/>
    <Header color="Blue" num={2}/>
    <Header color="Green" num={3}/>
  
    </div>
  );  
}

export default App;
