import React from "react";

interface ScoreboardProps {
	score: number | null;
}

const Scoreboard: React.FC<ScoreboardProps> = ({ score }) => (
	<p className="scoreboard">
		<span>Score:</span> {score}
	</p>
);

export default Scoreboard;
