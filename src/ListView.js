import React from 'react';
import ListViewTemplate from "./ListViewTemplate"

//на вход получаем объект с массивом лист
const ListView = ({list}) => (
  <ul>
    {/* перебираем массив и выводим списком */}
    {list.map(({id, title, body}) => (
      <li key={id}>
        <ListViewTemplate title={title} body={body}/>
      </li>
    ))}
  </ul>
);

export default ListView;
