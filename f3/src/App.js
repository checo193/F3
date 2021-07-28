import './App.css';
import Squad from './containers/Squad';
import Header from './components/Header'

function App() {
  return (
    <div className='App'>
      <div className='header'>
        <Header/>
      </div>
      <div>
        <Squad/>
      </div>
    </div>
  );
}

export default App;
