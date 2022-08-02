import { useSelector } from 'react-redux';
import { allComment } from './commentSlice';

const Comment = () => {
  const comments = useSelector((state) => state.comment);
  const coms = useSelector(allComment);
  var boxComment = {
    width: '400px',
    height: '100px',
    marginTop: '10px',
    border: 'solid 1px #000',
    padding: '10px',
  };
  return (
    <section
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {comments.map((comment) => {
        return (
          <div key={comment.id} style={boxComment}>
            <h5>{comment.user}</h5>
            <p>{comment.body}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Comment;
