import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  const currentDate = dayjs().format('YYYY-MM-DD HH:mm:ss');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Текущая дата и время:</h1>
      <p>{currentDate}</p>
      <hr />
      <h1>Данные из API:</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Загрузка...</p>}
    </div>
  );
}

export default App;