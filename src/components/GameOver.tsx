import React from "react";

interface GameOverProps {
	score: number | undefined;
    playAgain: () => void
}

const GameOver: React.FC<GameOverProps> = ({ score, playAgain }) => {
    return (
        <div className="game-over">
            <h1>Game Over</h1>
            <p>Your score: {score}</p>
            <button onClick={playAgain}>Play Again</button>
        </div>
    );
}

export default GameOver;