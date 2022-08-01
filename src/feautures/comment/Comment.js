import { useSelector } from 'react-redux';
import allComment from './commentSlice';

const Comment = () => {
  const comments = useSelector((state) => state.comment);

  return (
    <section>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <h5>{comment.user}</h5>
            <p>{comment.body}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Comment;
