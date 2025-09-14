'use client';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeNotification } from '@/redux/features/notificationSlice';

const NotificationToast = () => {
  const dispatch = useDispatch();
  const { notifications } = useSelector((state) => state.notification);
  const [visibleNotifications, setVisibleNotifications] = useState([]);

  useEffect(() => {
    if (notifications.length > 0) {
      setVisibleNotifications(notifications);
      
      // Auto remove notification after 4 seconds
      const timer = setTimeout(() => {
        if (notifications.length > 0) {
          dispatch(removeNotification(notifications[0].id));
        }
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [notifications, dispatch]);

  const handleClose = (id) => {
    dispatch(removeNotification(id));
  };

  if (visibleNotifications.length === 0) return null;

  return (
    <div className="notification-container" style={{
      position: 'fixed',
      top: '95px', // Below the fixed navbars
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 9999,
      width: '100%',
      maxWidth: '500px',
      padding: '0 20px'
    }}>
      {visibleNotifications.map((notification) => (
        <div
          key={notification.id}
          className="notification-toast"
          style={{
            backgroundColor: notification.type === 'success' ? '#10B981' : 
                           notification.type === 'error' ? '#EF4444' : 
                           notification.type === 'warning' ? '#F59E0B' : '#6B7280',
            color: 'white',
            padding: '12px 16px',
            borderRadius: '8px',
            marginBottom: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            animation: 'slideDown 0.3s ease-out',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Progress bar */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              height: '3px',
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              width: '100%',
              animation: 'progressBar 4s linear forwards'
            }}
          />
          
          {/* Icon */}
          <div style={{ display: 'flex', alignItems: 'center', marginRight: '12px' }}>
            {notification.type === 'success' && (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 12l2 2 4-4"/>
                <circle cx="12" cy="12" r="10"/>
              </svg>
            )}
            {notification.type === 'error' && (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="15" y1="9" x2="9" y2="15"/>
                <line x1="9" y1="9" x2="15" y2="15"/>
              </svg>
            )}
            {notification.type === 'warning' && (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                <line x1="12" y1="9" x2="12" y2="13"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
            )}
          </div>

          {/* Message */}
          <div style={{ flex: 1, fontSize: '14px', fontWeight: '500' }}>
            {notification.message}
          </div>

          {/* Close button */}
          <button
            onClick={() => handleClose(notification.id)}
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              padding: '4px',
              marginLeft: '12px',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.2s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent';
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
      ))}

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes progressBar {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }
      `}</style>
    </div>
  );
};

export default NotificationToast;
