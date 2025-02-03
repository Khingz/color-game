const WrongAnswer = () => {
	return (
		<div className="wrong-container">
			<div className="cross-icon">
				<div className="cross-line cross-line-1"></div>
				<div className="cross-line cross-line-2"></div>
			</div>
			<p className="wrong-message">Incorrect!</p>
		</div>
	);
};

export default WrongAnswer;
