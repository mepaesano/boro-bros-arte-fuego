import { useEffect } from 'react';

// Analytics tracking functions
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  // Google Analytics 4
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, parameters);
  }
  
  // Meta Pixel
  if (typeof fbq !== 'undefined') {
    fbq('track', eventName, parameters);
  }
  
  console.log('Analytics Event:', eventName, parameters);
};

// E-commerce specific events
export const trackPurchase = (transactionId: string, value: number, items: any[]) => {
  const purchaseData = {
    transaction_id: transactionId,
    value: value,
    currency: 'ARS',
    items: items
  };
  
  trackEvent('purchase', purchaseData);
};

export const trackAddToCart = (itemId: string, itemName: string, value: number, quantity: number = 1) => {
  const cartData = {
    currency: 'ARS',
    value: value,
    items: [{
      item_id: itemId,
      item_name: itemName,
      quantity: quantity,
      price: value
    }]
  };
  
  trackEvent('add_to_cart', cartData);
};

export const trackViewItem = (itemId: string, itemName: string, category: string, value: number) => {
  const itemData = {
    currency: 'ARS',
    value: value,
    items: [{
      item_id: itemId,
      item_name: itemName,
      item_category: category,
      price: value
    }]
  };
  
  trackEvent('view_item', itemData);
};

export const trackBeginCheckout = (value: number, items: any[]) => {
  const checkoutData = {
    currency: 'ARS',
    value: value,
    items: items
  };
  
  trackEvent('begin_checkout', checkoutData);
};

export const trackViewCart = (value: number, items: any[]) => {
  const cartData = {
    currency: 'ARS',
    value: value,
    items: items
  };
  
  trackEvent('view_cart', cartData);
};

// Hook for page view tracking
export const usePageTracking = (pageName: string, additionalData?: Record<string, any>) => {
  useEffect(() => {
    // Track page view
    trackEvent('page_view', {
      page_title: pageName,
      page_location: window.location.href,
      ...additionalData
    });
  }, [pageName, additionalData]);
};

// Declare global functions for TypeScript
declare global {
  function gtag(...args: any[]): void;
  function fbq(...args: any[]): void;
}