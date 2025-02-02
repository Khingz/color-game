import ColorBox from "./ColorBox";

const ColorOptions = () => {
	const options = [1, 2, 3, 4, 5, 6];

    return (
        <div className="color-options-container">
            {options.map(option => (
                <ColorBox />
            ))}
        </div>
    )
};

export default ColorOptions;
