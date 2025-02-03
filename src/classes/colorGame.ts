export class ColorGame {
	score = 0;
	targetColor = "";
	colorOptions: string[] = [];

	hexToRgb = (hex: string) => {
		const r = parseInt(hex.slice(1, 3), 16);
		const g = parseInt(hex.slice(3, 5), 16);
		const b = parseInt(hex.slice(5, 7), 16);
		return { r, g, b };
	};

	rgbToHex = (r: number, g: number, b: number) => {
		return `#${((1 << 24) | (r << 16) | (g << 8) | b)
			.toString(16)
			.slice(1)
			.padStart(6, "0")}`;
	};

	generateRandomColor = () =>
		`#${Math.floor(Math.random() * 16777215)
			.toString(16)
			.padStart(6, "0")}`;

	initGame = () => {
		this.targetColor = this.generateRandomColor();
		const targetRgb = this.hexToRgb(this.targetColor);

		this.colorOptions = [this.targetColor];

		while (this.colorOptions.length < 6) {
			const r = this.adjustColorValue(targetRgb.r);
			const g = this.adjustColorValue(targetRgb.g);
			const b = this.adjustColorValue(targetRgb.b);
			const newColor = this.rgbToHex(r, g, b);

			if (!this.colorOptions.includes(newColor)) {
				this.colorOptions.push(newColor);
			}
		}

		this.colorOptions.sort(() => Math.random() - 0.5);
	};

	adjustColorValue = (colorValue: number) => {
		const offset = Math.floor(Math.random() * 101) - 50;
		const newColorValue = colorValue + offset;
		return Math.min(255, Math.max(0, newColorValue));
	};

	checkAnswer = (color: string) => {
		if (color === this.targetColor) {
			this.score = this.score + 1;
			this.initGame();
			return true;
		}

		return false;
	};

	resetGame = () => {
		this.score = 0;
		this.initGame();
	};

	getScore = () => this.score;
	getTargetColor = () => this.targetColor;
	getOptions = () => this.colorOptions;
}
