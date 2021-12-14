import logo from '../logo.svg';
import '../App.css';
import Greet from './Greet';
import Message from './Message';
import Button from './Button';
import Employee from './Employee';
import Hello from './Hello';
import NavBar from './NavBar';


function Home() {
  return (
    <div className="Home">
      <header className="App-header">

        <img src="https://i.kym-cdn.com/photos/images/facebook/002/139/744/c27.png" className="App-logo" alt="logo" />
        <p>
          POGGERS!
        </p>

        <p>{Hello()}</p>
        
        
        <Button></Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          
        >
          Learn React
        </a>

        
      </header>
    </div>
  );
}

export default Home;
