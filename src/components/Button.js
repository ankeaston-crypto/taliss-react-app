import React, { useState } from 'react';

// Подключаю стили для кнопки
import './Button.css';

// Делаю компонент кнопки, который не только выполняет действие, но и меняет цвет
const Button = ({ onClick }) => {
  // Создаю состояние isClicked, чтобы знать, нажимали на кнопку или нет
  const [isClicked, setIsClicked] = useState(false);

  // Делаю функцию обработки клика (внутренняя логика + передача внешнему обработчику)
  const handleClick = () => {
    // Меняю состояние на противоположное (было true → стало false и наоборот)
    setIsClicked(!isClicked);
    // Передаю управление внешнему обработчику, если он был передан в пропсах
    onClick(); 
  };

  // Возвращаю кнопку, ииии класс зависит от состояния isClicked
  return (
    <button
      className={`custom-button ${isClicked ? 'clicked' : ''}`}
      onClick={handleClick}
    >
      Изменить цвет
    </button>
  );
};

export default Button;