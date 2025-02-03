import React from "react";

interface TargetColorProps {
	color: string;
	className?: string;
}

const TargetColorBox: React.FC<TargetColorProps> = ({ color, className }) => {
	return (
		<div
			className={`target-color-box ${className}`}
			style={{ backgroundColor: color }}
			data-testid="colorBox"
		></div>
	);
};

export default TargetColorBox;
