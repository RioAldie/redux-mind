import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postComment } from './commentSlice';

const AddCommentFrom = () => {
  const [user, setUser] = useState('');
  const [body, setBody] = useState('');
  const dispatch = useDispatch();
  const onUserChanged = (e) => setUser(e.target.value);
  const onBodyChange = (e) => setBody(e.target.value);

  const handleSavePostComment = () => {
    if (user && body) {
      dispatch(postComment(user, body));
      setBody('');
      setUser('');
    }
  };
  return (
    <form
      style={{
        width: '400px',
        height: '300px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <label>Username: </label>
      <input onChange={(e) => onUserChanged(e)} value={user} />
      <label>Comment: </label>
      <textarea onChange={(e) => onBodyChange(e)} value={body} />
      <button type="button" onClick={() => handleSavePostComment()}>
        Save
      </button>
    </form>
  );
};

export default AddCommentFrom;
