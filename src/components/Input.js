// Импортирую Реакт
import React from 'react';

// Подключаю стили для поля ввода
import './Input.css';

// Делаю через форвардРеф, чтоб родитель мог дать ссылку
const Input = React.forwardRef((props, ref) => {
 //Возвращаюс инпут. Привязала к нему реф, дала класс и раскидала остальные пропсы.
  return <input ref={ref} className="custom-input" {...props} />;

});

// Эскпорт коммента
export default Input;