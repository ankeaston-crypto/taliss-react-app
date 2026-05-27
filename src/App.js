import React, { useState } from 'react';

// Импортирую свою кнопку
import Button from './components/Button';

// Подключаю стили
import './App.css';

// Делаю главный компонент
function App() {
  // Создаю счётчик кликов
  const [clickCount, setClickCount] = useState(0);

  // Функция увеличивает счётчик при клике
  const handleButtonClick = () => {
    setClickCount(clickCount + 1);
  };

  // Возвращаю контейнер с кнопкой. Цвет фона меняется: чётное число кликов — серый, нечётное — кремовый
  return (
    <div
      className="app-container"
      style={{
        backgroundColor: clickCount % 2 === 0 ? '#f4f4f4' : '#ffebcd',
      }}
    >
      <Button onClick={handleButtonClick} />
    </div>
  );
}

export default App;