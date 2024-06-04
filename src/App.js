import './allPages.css'

function App() {

  const handleStartGame=()=>{
    document.getElementById('snake_game').className='snake-game'
    document.getElementById('startgame_container').className='startgame-container-hidden'
  }

  return (
    <div className='main-container'>
      <div className='startgame-container' id='startgame_container'>
        <div><h1>About Game Picture and Some Gif</h1></div>
        <button className='startgame-button' onClick={handleStartGame}>Start Game</button>
      </div>
      <div className='snake-game-hidden' id='snake_game'></div>
    </div>
  );
}

export default App;
