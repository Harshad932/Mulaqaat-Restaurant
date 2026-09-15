import React, { createContext, useContext, useState, useEffect } from 'react';

const OrderContext = createContext();

const STORAGE_KEY = 'mulaqaat_current_order';
const TABLE_KEY = 'mulaqaat_table_num';
const NOTES_KEY = 'mulaqaat_order_notes';

export function OrderProvider({ children }) {
  const [orderItems, setOrderItems] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [tableNumber, setTableNumber] = useState(() => {
    try {
      return localStorage.getItem(TABLE_KEY) || 'Table 1';
    } catch {
      return 'Table 1';
    }
  });

  const [orderNotes, setOrderNotes] = useState(() => {
    try {
      return localStorage.getItem(NOTES_KEY) || '';
    } catch {
      return '';
    }
  });

  const [isOrderDrawerOpen, setIsOrderDrawerOpen] = useState(false);
  const [isWaiterViewOpen, setIsWaiterViewOpen] = useState(false);

  // Sync with localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(orderItems));
    } catch (e) {
      console.error('Failed to save order to localStorage', e);
    }
  }, [orderItems]);

  useEffect(() => {
    try {
      localStorage.setItem(TABLE_KEY, tableNumber);
    } catch (e) {
      console.error('Failed to save table number', e);
    }
  }, [tableNumber]);

  useEffect(() => {
    try {
      localStorage.setItem(NOTES_KEY, orderNotes);
    } catch (e) {
      console.error('Failed to save order notes', e);
    }
  }, [orderNotes]);

  // Helper to generate unique key based on item id and variant label
  const getItemKey = (item, variant) => {
    const variantLabel = variant ? variant.label : (item.variants ? item.variants[0].label : 'standard');
    return `${item.id}__${variantLabel}`;
  };

  const addItem = (item, selectedVariant = null) => {
    const variant = selectedVariant || (item.variants ? item.variants[0] : null);
    const unitPrice = variant ? variant.price : item.price;
    const itemKey = getItemKey(item, variant);

    setOrderItems(prev => {
      const existing = prev.find(i => i.itemKey === itemKey);
      if (existing) {
        return prev.map(i =>
          i.itemKey === itemKey ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [
          ...prev,
          {
            itemKey,
            id: item.id,
            name: item.name,
            hindi: item.hindi,
            isVeg: item.isVeg,
            price: unitPrice,
            variant: variant ? variant.label : null,
            quantity: 1,
            notes: ''
          }
        ];
      }
    });
  };

  const updateQuantity = (itemKey, delta) => {
    setOrderItems(prev => {
      return prev
        .map(item => {
          if (item.itemKey === itemKey) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const removeItem = (itemKey) => {
    setOrderItems(prev => prev.filter(i => i.itemKey !== itemKey));
  };

  const updateItemNotes = (itemKey, notes) => {
    setOrderItems(prev =>
      prev.map(i => (i.itemKey === itemKey ? { ...i, notes } : i))
    );
  };

  const clearOrder = () => {
    setOrderItems([]);
    setOrderNotes('');
  };

  // Get quantity of an item in the cart
  const getItemQuantity = (itemId, variantLabel = null) => {
    const targetKey = variantLabel ? `${itemId}__${variantLabel}` : null;
    if (targetKey) {
      const found = orderItems.find(i => i.itemKey === targetKey);
      return found ? found.quantity : 0;
    }
    // Sum all variants of this item
    return orderItems
      .filter(i => i.id === itemId)
      .reduce((sum, i) => sum + i.quantity, 0);
  };

  const totalItemsCount = orderItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <OrderContext.Provider
      value={{
        orderItems,
        tableNumber,
        setTableNumber,
        orderNotes,
        setOrderNotes,
        addItem,
        updateQuantity,
        removeItem,
        updateItemNotes,
        clearOrder,
        getItemQuantity,
        totalItemsCount,
        subtotal,
        isOrderDrawerOpen,
        setIsOrderDrawerOpen,
        isWaiterViewOpen,
        setIsWaiterViewOpen
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export function useOrder() {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
}
