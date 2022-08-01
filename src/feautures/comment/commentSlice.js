import { createSlice } from '@reduxjs/toolkit';

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
  reducers: {},
});
const allComment = (state) => state.comments;
console.log(allComment);
export default commentSlice.reducer;
