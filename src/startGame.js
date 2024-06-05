export const StartGame=()=>{

    const handleStartGame=()=>{
        document.getElementById('snake_game').className='snake-game'
        document.getElementById('startgame_container').className='startgame-container-hidden'
        document.getElementById('startgame_button').className='startgame-container-hidden'
      }    

    return(<>
        <div className='startgame-container' id='startgame_container'></div>
        <button className='startgame-button' onClick={handleStartGame} id="startgame_button">Start Game</button>
        </>
    )
}