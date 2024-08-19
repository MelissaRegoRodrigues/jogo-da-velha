import '../index.css';

export default function GameOver({winner, onRestart}){
    return <div id="game-over">
        <h2>GameOver</h2>
        {winner && <p>{winner} ganhou!</p>}
        {!winner && <p>Empate!</p>}
        <p><button onClick={onRestart}>Revanche!</button></p>
    </div>
}