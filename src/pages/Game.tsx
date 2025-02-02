import TargetColorBox from "../components/TargetColorBox";
import LineDivider from "../components/LineDivider";
import Scoreboard from "../components/Scoreboard";
import ColorOptions from "../components/ColorOptions";

const Game = () => {
	return (
		<div className="game-container">
			<header>
                <h2>Kami Games</h2>
				<Scoreboard score={0} />
			</header>
			<LineDivider />
			<TargetColorBox />
            <p>Guess the color...</p>
            <ColorOptions />
            <div className="restart-button">
                <button>Restart Game</button>
            </div>
		</div>
	);
};

export default Game;
