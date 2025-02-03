import TargetColorBox from "../components/TargetColorBox";
import LineDivider from "../components/LineDivider";
import Scoreboard from "../components/Scoreboard";
import ColorOptions from "../components/ColorOptions";
import { useEffect, useState } from "react";
import { ColorGame } from "../classes/colorGame";
import GameOver from "../components/GameOver";
import CorrectAnswer from "../components/CorrectAnswer";
import WrongAnswer from "../components/WrongAnswer";
import Instructions from "../components/Instructions";

const Game = () => {
	const [game, setGame] = useState<ColorGame | null>(null);
	const [gameOver, setGameOver] = useState(false);
	const [animationCorrect, setCorrectAnimation] = useState(false);
	const [animationWrong, setWrongAnimation] = useState(false);
	const [showInstructions, setShowInstructions] = useState(false);

	useEffect(() => {
		const newGame = new ColorGame();
		newGame.initGame();
		setGame(newGame);
	}, []);

	const handleRestart = () => {
		if (!game) return;
		game.resetGame();
		setGame({ ...game });
		setGameOver(false);
	};

	const handleColorSelect = (color: string) => {
		if (!game) return;

		if (!game.checkAnswer(color)) {
			setWrongAnimation(true);
			setTimeout(() => {
				setWrongAnimation(false);
				setGameOver(true);
			}, 2000);
		} else {
			setCorrectAnimation(true);
			setTimeout(() => {
				setCorrectAnimation(false);
				setGame({ ...game });
			}, 2000);
		}
	};

	return (
		<div className="game-container">
			<header>
				<h2>Kami Games</h2>
				{game && !gameOver && <Scoreboard score={game.getScore()} />}
			</header>
			<LineDivider />
			{animationCorrect && <CorrectAnswer />}
			{animationWrong && <WrongAnswer />}
			{gameOver && (
				<GameOver score={game?.getScore()} playAgain={handleRestart} />
			)}
			{!gameOver && !animationCorrect && !animationWrong && (
				<>
					<TargetColorBox color={game?.getTargetColor() ?? "#000"} />
					<ColorOptions
						options={game?.getOptions() ?? []}
						onColorSelect={handleColorSelect}
					/>
					<div className="restart-button-container">
						<p onClick={() => (setShowInstructions(!showInstructions))}>How to play...</p>

						<button onClick={handleRestart}>Restart Game</button>
					</div>
					{showInstructions && (<Instructions />)}
				</>
			)}
		</div>
	);
};

export default Game;
