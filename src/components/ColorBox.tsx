import React from "react";

interface ColorBoxProps {
	color: string;
	onClick: (color: string) => void;
}

const ColorBox: React.FC<ColorBoxProps> = ({ color, onClick }) => {
	return (
		<button
			className="option-color-box-button"
			style={{ backgroundColor: color }}
            onClick={() => onClick(color)}
			data-testid="colorOption"
		></button>
	);
};

export default ColorBox;
