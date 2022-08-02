import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '2',
    user: 'anon',
    body: ' Kominfo killing us #blokirKominfo',
  },
  {
    id: '1',
    user: 'dave',
    body: ' learn Redux for getting Job',
  },
];

export const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    postComment: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(user, body) {
        return {
          payload: {
            id: nanoid(),
            user,
            body,
          },
        };
      },
    },
  },
});
export const allComment = (state) => state.comment;

export const { postComment } = commentSlice.actions;
export default commentSlice.reducer;
