import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    addCategory(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
