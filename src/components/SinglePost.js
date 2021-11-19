import React from 'react';

export default function SinglePost({
  id,
  title,
  text,
  isOnSinglePage,
  viewCallback,
  editCallback,
  deleteCallback
}) {
    // console.log(viewCallback);
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
      {!isOnSinglePage && <button onClick={() => viewCallback(id)}>View</button> }
      <button onClick={() => editCallback(id)}>Edit</button>
      <button onClick={() => deleteCallback(id)}> Delete </button>
    </li>
  );
}
