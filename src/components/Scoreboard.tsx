import React from "react";

interface ScoreboardProps {
	score: number;
}

const Scoreboard: React.FC<ScoreboardProps> = ({ score }) => <p className="scoreboard"><span>Score:</span> {score}</p>;

export default Scoreboard;
