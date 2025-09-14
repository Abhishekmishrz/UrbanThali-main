import { useDispatch } from 'react-redux';
import { addNotification } from '@/redux/features/notificationSlice';

const useNotification = () => {
  const dispatch = useDispatch();

  const showNotification = (message, type = 'success', duration = 4000) => {
    dispatch(addNotification({
      message,
      type,
      duration
    }));
  };

  const showSuccess = (message, duration = 4000) => {
    showNotification(message, 'success', duration);
  };

  const showError = (message, duration = 4000) => {
    showNotification(message, 'error', duration);
  };

  const showWarning = (message, duration = 4000) => {
    showNotification(message, 'warning', duration);
  };

  const showInfo = (message, duration = 4000) => {
    showNotification(message, 'info', duration);
  };

  return {
    showNotification,
    showSuccess,
    showError,
    showWarning,
    showInfo
  };
};

export default useNotification;
