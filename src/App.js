import './App.css';

import MCNavBar from './Components/MCNavBar'
import Footer from './Components/Footer';
import Main from './Components/Main'

function App() {
  return (
    <div className="App">
      <div className='header'>
        <MCNavBar></MCNavBar>
      </div>
      <div className='main'>
        <Main></Main>
      </div>
      <div className='footer'>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
