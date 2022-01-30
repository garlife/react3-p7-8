import React from 'react';

//на вход получаем объект с массивом лист
const ListView = ({ list }) => (
  <ul>
    {/* перебираем массив и выводим списком */}
    {list.map(({ title, body, id }) => (
      <li key={id}>
        <h3>{title}</h3>
        <p>{body}</p>
      </li>
    ))}
  </ul>
);

export default ListView;
