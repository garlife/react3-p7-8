import React from 'react';

const ListView = ({ list }) => (
  <ul>
    {list.map(({ title, body, id }) => (
      <li key={id}>
        <h3>{title}</h3>
        <p>{body}</p>
      </li>
    ))}
  </ul>
);

export default ListView;
