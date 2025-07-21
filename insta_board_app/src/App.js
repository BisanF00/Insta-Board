import './App.css';
import UserList from './components/userList/userList'; 

function App() {
  return (
    <div className="App">
      <div>
        <header className='header'>
          <img src="/instaLogo.png" alt='instalogo' className='App-logo'/>
          <h1>Insta Board</h1>
        </header>
      </div>
      <UserList />
    </div>
  );
}

export default App;
