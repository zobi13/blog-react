import React from 'react';

function SingleCar({
  id,
  title,
  text,
  createdAt,
  deleteCallback,
  editCallback,
}) {
  return (
    <li
      style={{
        border: '1px solid black',
        marginBottom: '5px',
        padding: 5,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <span>Title: {title}</span>
      <span>Text: {text}</span>
      <span>Created at: {createdAt}</span>
      <button onClick={() => deleteCallback(id)}>Delete</button>
      <button onClick={() => editCallback(id)}>Edit</button>
    </li>
  );
}

export default SingleCar;
