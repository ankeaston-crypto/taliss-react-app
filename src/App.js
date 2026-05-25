// Импортирую Реакт и хук useRef для ссылки на инпут
import React, { useRef } from 'react';

// Импортирую свою кнопку
import Button from './components/Button';

// Импортирую свой инпут
import Input from './components/Input';

// Подключаю стили для всего приложения
import './App.css';

// Делаю главный компонент приложения
function App() {
  
  // Создаю рефку для инпута, чтоб потом управлять им
  const inputRef = useRef(null);
  
  // Делаю функцию, которая очищает инпут
  const handleClear = () => {
    // Проверяю, что инпут существует
    if (inputRef.current) {
      // Очищаю значение в поле ввода
      inputRef.current.value = '';
    }
  };
  
  // Возвращаю разметку: контейнер, внутри инпут и кнопка очистки
  return (
    <div className="app-container">
      {/* Инпут с рефкой и плейсхолдером */}
      <Input ref={inputRef} placeholder="Введите текст..." />
      
      {/* Кнопка, по клику вызывает очистку инпута */}
      <Button onClick={handleClear} />
    </div>
  );
}

// Экспортирую компонент, чтоб его можно было запустить
export default App;
