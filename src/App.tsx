import './App.css';
import Barry from './otters/otter1.jpg';
import Robin from './otters/otter2.jpg';
import Maurice from './otters/otter3.jpg';
import Lesley from './otters/otter4.jpg';
import Barbara from './otters/otter5.jpg';

function App() {
  return (
    <div>
      <header className='header-component'>
        <h1>Ottergram</h1>
        <h3>Collection of cute otter pics</h3>
      </header>
      <ul className='post-list'>
        <li className='post-component'>
          <button>
            <img src={Barry} alt="Barry the Otter" />
            <p>Barry</p>
          </button>
        </li>
        <li  className='post-component'>
          <button>
            <img src={Robin} alt="Robin the Otter" />
            <p>Robin</p>
          </button>
        </li>
        <li  className='post-component'>
          <button>
            <img src={Maurice} alt="Maurice the Otter" />
            <p>Maurice</p>
          </button>
        </li>
        <li  className='post-component'>
          <button>
            <img src={Lesley} alt="Lesley the Otter" />
            <p>Lesley</p>
          </button>
        </li>
        <li  className='post-component'>
          <button>
            <img src={Barbara} alt="Barbara the Otter" />
            <p>Barbara</p>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default App;
