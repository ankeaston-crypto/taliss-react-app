// Импортирую Реакт
import React from 'react';

// Подключаю стили для кнопки
import './Button.css';

// Делаю компонент кнопки. Деструктуризирую onClick из пропсов
const Button = ({ onClick }) => {
  // Возвращаю кнопку. Вешаю на неё переданный onClick и даю класс для стилизации
  return (
    <button className="custom-button" onClick={onClick}>
      Очистить
    </button>
  );
};

// Экспортирую компонент
export default Button;