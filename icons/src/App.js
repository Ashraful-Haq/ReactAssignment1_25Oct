import './App.css';
import {FaAmazon,FaDiscord,FaGithub,FaPinterest,FaReddit} from "react-icons/fa";
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>React Web-App Title</h1>
       <p>Assignment done by Ashraf</p>
       <h3>Daily websites used by me are:</h3>
       <FaAmazon/> <br/>
       <FaDiscord/> <br/>
       <FaGithub/> <br/>
       <FaPinterest/> <br/>
       <FaReddit/>
      </header>
    </div>
  );
}


export default App;
