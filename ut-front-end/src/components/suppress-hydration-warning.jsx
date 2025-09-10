'use client';

import { useEffect } from 'react';

export default function SuppressHydrationWarning() {
  useEffect(() => {
    // Immediately clean up any existing extension attributes
    const immediateCleanup = () => {
      const extensionAttributes = [
        'bis_skin_checked',
        'bis_register',
        'data-gr-ext-installed',
        'data-new-gr-c-s-check-loaded',
        'data-dashlane-rid',
        'data-honey-installed',
        'data-rakuten-installed',
        'data-lastpass-icon-root'
      ];
      
      document.querySelectorAll('[bis_skin_checked]').forEach(element => {
        element.removeAttribute('bis_skin_checked');
      });
      
      extensionAttributes.forEach(attr => {
        document.querySelectorAll(`[${attr}]`).forEach(element => {
          element.removeAttribute(attr);
        });
      });
    };
    
    // Run immediately
    immediateCleanup();
    
    // Override console methods to suppress hydration warnings
    const originalError = console.error;
    const originalWarn = console.warn;
    
    const suppressMessage = (message) => {
      const messageStr = typeof message === 'string' ? message : String(message);
      
      return (
        messageStr.includes('hydrated') ||
        messageStr.includes('Hydration') ||
        messageStr.includes('bis_skin_checked') ||
        messageStr.includes('bis_register') ||
        messageStr.includes('tree hydrated but some attributes') ||
        messageStr.includes('did not match') ||
        messageStr.includes('Warning: Prop') ||
        messageStr.includes('Warning: Extra attributes') ||
        // Common browser extension attributes
        messageStr.includes('grammarly') ||
        messageStr.includes('data-gr') ||
        messageStr.includes('data-new-gr') ||
        messageStr.includes('lastpass') ||
        messageStr.includes('data-dashlane') ||
        messageStr.includes('data-honey') ||
        messageStr.includes('data-rakuten') ||
        messageStr.includes('browser extension')
      );
    };
    
    console.error = (...args) => {
      if (args[0] && suppressMessage(args[0])) {
        return;
      }
      originalError.apply(console, args);
    };
    
    console.warn = (...args) => {
      if (args[0] && suppressMessage(args[0])) {
        return;
      }
      originalWarn.apply(console, args);
    };

    // Set up MutationObserver to continuously remove extension attributes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes') {
          const target = mutation.target;
          if (target.hasAttribute('bis_skin_checked')) {
            target.removeAttribute('bis_skin_checked');
          }
          if (target.hasAttribute('bis_register')) {
            target.removeAttribute('bis_register');
          }
        }
      });
    });
    
    // Start observing the entire document
    observer.observe(document.documentElement, {
      attributes: true,
      subtree: true,
      attributeFilter: ['bis_skin_checked', 'bis_register']
    });
    
    // Run cleanup periodically for new elements
    const intervalId = setInterval(immediateCleanup, 500);

    // Cleanup on unmount
    return () => {
      clearInterval(intervalId);
      observer.disconnect();
      console.error = originalError;
      console.warn = originalWarn;
    };
  }, []);

  return null;
}