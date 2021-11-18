import React from 'react';
import { Link } from 'react-router-dom';

function SingleCar({
  id,
  title,
  text,
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
      <Link to = '/api/posts/:postId'> View Post </Link>
      {/* <button onClick={() => deleteCallback(id)}>Delete</button>
      <button onClick={() => editCallback(id)}>Edit</button> */}
    </li>
  );
}

export default SingleCar;
