import './allPages.css'
import {StartGame} from './startGame'
function App() {
  
  return (
    <div className='main-container'>
      <StartGame />
      <div className='snake-game-hidden' id='snake_game'></div>
    </div>
  );
}

export default App;
