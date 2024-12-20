import { createSlice } from '@reduxjs/toolkit';

const eventsSlice = createSlice({
  name: 'events',
  initialState: [
    { id: 1, title: 'React Конференция', description: 'Изучение React', date: '2024-12-25', category: 'Обучение' },
  ],
  reducers: {
    addEvent(state, action) {
      state.push(action.payload);
    },
    updateEvent(state, action) {
      const index = state.findIndex((e) => e.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteEvent(state, action) {
      return state.filter((e) => e.id !== action.payload);
    },
  },
});

export const { addEvent, updateEvent, deleteEvent } = eventsSlice.actions;
export default eventsSlice.reducer;
