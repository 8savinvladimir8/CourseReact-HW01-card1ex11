import React from 'react';
import { Card } from 'antd';
import './App.css';

function App() {
  return (
    <div className="App">
      <Card title="Что понравилось на первом занятии" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>Много теоретического материала и ссылок - не нужно самому искать и тратить время</p>
      <p>Много практики на лекциях, сразу разбираем теорию на примерах</p>
      <p>Преподаватель хорошо и сразу объясняет моменты, которые не понятны</p>
    </Card>

    <Card size="small" title="Что улучшить" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>Катастрофически не хватает времени на своевременное выполнение заданий</p>
    </Card>
    </div>
  );
}

export default App;
