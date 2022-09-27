import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Body from './components/body';
import Logo from './components/logo';
import Brands from './components/brands';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Body></Body>
      <Logo></Logo>
      <Brands></Brands>
    </div>
  );
}

export default App;
