import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notifications: []
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    addNotification: (state, action) => {
      const notification = {
        id: Date.now() + Math.random(),
        type: action.payload.type || 'success',
        message: action.payload.message,
        duration: action.payload.duration || 4000
      };
      state.notifications.push(notification);
    },
    removeNotification: (state, action) => {
      state.notifications = state.notifications.filter(
        notification => notification.id !== action.payload
      );
    },
    clearAllNotifications: (state) => {
      state.notifications = [];
    }
  }
});

export const { addNotification, removeNotification, clearAllNotifications } = notificationSlice.actions;
export default notificationSlice.reducer;
