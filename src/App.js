import AddCommentFrom from './feautures/comment/AddCommentFrom';
import Comment from './feautures/comment/Comment';
import Counter from './feautures/counter/Counter';

const App = () => {
  return (
    <main
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      className="App"
    >
      <AddCommentFrom />
      <Comment />
    </main>
  );
};

export default App;
