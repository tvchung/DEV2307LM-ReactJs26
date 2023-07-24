import logo from './logo.svg';
import logoDevmaster from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="">
        <img src={logoDevmaster} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://devmaster.edu.vn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React By Devmaster
        </a>
      </header>
      <section>
        <h2>Welcome to ReactJS</h2>
        <img src={logo} alt="React"/>
      </section>
    </div>
  );
}

export default App;
