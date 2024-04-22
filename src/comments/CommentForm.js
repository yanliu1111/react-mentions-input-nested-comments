import { Mention, MentionsInput } from 'react-mentions';
import React, { useState } from 'react';

import mentionStyle from '../mentionStyle';
import style from '../style';

const users = [
  {
    id: 'tony',
    display: 'Tony Stark',
  },
  {
    id: 'pepper',
    display: 'Pepper Potts',
  },
  {
    id: 'natasha',
    display: 'Natasha Romanoff',
  },
  {
    id: 'steve',
    display: 'Steve Rogers',
  },
  {
    id: 'bruce',
    display: 'Bruce Banner',
  },
  {
    id: 'rocket',
    display: 'Rocket Raccoon',
  },
];

const fetchUsers = (query, callback) => {
  if (!query) return;
  setTimeout(() => {
    const filteredUsers = users.filter((user) =>
      user.display.toLowerCase().includes(query)
    );
    callback(filteredUsers);
  }, 2000);
};
const CommentForm = ({
  handleSubmit,
  submitLable,
  hasCancelButton = false,
  initialText = '',
  handCancel,
}) => {
  const [text, setText] = useState(initialText);

  const onAdd = (e) => {
    console.log('onAdd', e);
  };
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (e) => {
    e.preventDefault(); // prevent the form won't be submitted by default
    handleSubmit(text);
    setText('');
  };
  return (
    <form onSubmit={onSubmit}>
      {' '}
      <MentionsInput
        className='comment-form-textarea'
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={"Mention people using '@'"}
        a11ySuggestionsListLabel={'Suggested mentions'}
        style={style}
      >
        <Mention style={mentionStyle} data={fetchUsers} onAdd={onAdd} />
      </MentionsInput>
      <button className='comment-form-button' disabled={isTextareaDisabled}>
        {submitLable}
      </button>
      {hasCancelButton && (
        <button
          type='button'
          className='comment-form-button comment-form-cancel-button'
          onClick={handCancel}
        >
          Cancel
        </button>
      )}
    </form>
  );
};
export default CommentForm;
