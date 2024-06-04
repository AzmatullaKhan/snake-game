export const StartGame=()=>{

    const handleStartGame=()=>{
        document.getElementById('snake_game').className='snake-game'
        document.getElementById('startgame_container').className='startgame-container-hidden'
      }    

    return(
        <div className='startgame-container' id='startgame_container'>
            <div>
                <h1>About Game Picture and Some Gif</h1>
            </div>
            <button className='startgame-button' onClick={handleStartGame}>Start Game</button>
        </div>
    )
}