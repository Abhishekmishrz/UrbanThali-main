'use client';

import React, { useState, useEffect } from 'react';

const ToastWrapper = () => {
  const [ToastContainer, setToastContainer] = useState(null);

  useEffect(() => {
    import('react-toastify').then((mod) => {
      setToastContainer(() => mod.ToastContainer);
    });
    import('react-toastify/dist/ReactToastify.css');
  }, []);

  if (!ToastContainer) return null;

  return (
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
};

export default ToastWrapper;