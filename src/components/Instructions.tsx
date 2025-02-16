const Instructions = () => {
	return (
		<div className="instructions-container" data-testid="gameInstructions">
			<p>
				Checkout the first rectangular color at the top of the page. Your goal
				is to guess the correct color from the 6 options below it.
			</p>
			<ul>
				<li>Click the color you think matches the target.</li>
				<li>If you're correct, you earn a point, and a new round starts.</li>
				<li>If you're wrong, the game ends.</li>
				<li>Try to get the highest score possible!</li>
			</ul>
		</div>
	);
};

export default Instructions;
