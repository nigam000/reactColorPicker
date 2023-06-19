import React, { useState } from 'react';
import './Task3.css';

function ColorPicker({ colors }) {
  const [showColorList, setShowColorList] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');

  const handleButtonClick = () => {
    setShowColorList(!showColorList);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColorList(false);
  };

  const buttonStyle = {
    backgroundColor: selectedColor,
    color: selectedColor ? '#fff' : '#333',
  };

  return (
    <div className="color-picker">
      <button onClick={handleButtonClick} className="color-picker-button" style={buttonStyle}>
        {selectedColor ? selectedColor : 'Pick a color'}
      </button>
      {showColorList && (
        <ul className="color-list">
          {colors.map((color, index) => (
            <li
              key={index}
              onClick={() => handleColorClick(color)}
              style={{ backgroundColor: color }}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ColorPicker;
