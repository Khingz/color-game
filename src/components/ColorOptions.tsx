import ColorBox from "./ColorBox";
import React from "react";

interface ColorOptionsProps {
	options: string[];
    onColorSelect: (color: string) => void;
}

const ColorOptions: React.FC<ColorOptionsProps> = ({ options, onColorSelect }) => {
	return (
		<div className="color-options-container">
			{options.map((option) => (
				<ColorBox key={option} color={option} onClick={onColorSelect}/>
			))}
		</div>
	);
};

export default ColorOptions;
