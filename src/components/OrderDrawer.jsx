import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, Bell, ShoppingBag, Utensils, MessageSquare, AlertCircle } from 'lucide-react';
import { useOrder } from '../context/OrderContext';

export default function OrderDrawer() {
  const {
    isOrderDrawerOpen,
    setIsOrderDrawerOpen,
    setIsWaiterViewOpen,
    orderItems,
    updateQuantity,
    removeItem,
    clearOrder,
    totalItemsCount,
    subtotal,
    tableNumber,
    setTableNumber,
    orderNotes,
    setOrderNotes
  } = useOrder();

  const [confirmClear, setConfirmClear] = useState(false);

  if (!isOrderDrawerOpen) return null;

  const quickTables = ['Table 1', 'Table 2', 'Table 3', 'Table 4', 'Table 5', 'Table 6', 'Family Hall 1', 'Family Hall 2'];

  const handleProceedToWaiter = () => {
    setIsOrderDrawerOpen(false);
    setIsWaiterViewOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsOrderDrawerOpen(false)}
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-fadeIn"
      />

      {/* Drawer Container: 100% width on mobile, capped at max-w-md on desktop */}
      <div className="fixed inset-y-0 right-0 w-full sm:max-w-md flex z-50">
        <div className="w-full h-full bg-white shadow-2xl flex flex-col justify-between animate-slideLeft overflow-hidden">
          
          {/* Drawer Header */}
          <div className="px-4 py-3.5 sm:px-5 sm:py-4 bg-[#250610] text-white flex items-center justify-between border-b border-brand-900 shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gold-600 text-stone-950 flex items-center justify-center font-bold shrink-0">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-base sm:text-lg text-gold-200 leading-tight">
                  Your Order Tray
                </h3>
                <p className="text-[11px] sm:text-xs text-amber-200/70">
                  {totalItemsCount} {totalItemsCount === 1 ? 'item' : 'items'} selected
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOrderDrawerOpen(false)}
              className="p-2 text-stone-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors shrink-0"
              aria-label="Close tray"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body - Scrollable content */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden p-3.5 sm:p-5 space-y-4 bg-stone-50/50">
            
            {/* Table Number Selector */}
            <div className="bg-white p-3 sm:p-3.5 rounded-2xl border border-stone-200 shadow-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-700">
                  Your Table / Seating:
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-brand-50 text-brand-900 border border-brand-200">
                  {tableNumber}
                </span>
              </div>

              {/* Table Quick Selection Chips */}
              <div className="flex gap-1.5 overflow-x-auto no-scrollbar py-1">
                {quickTables.map((tbl) => (
                  <button
                    key={tbl}
                    type="button"
                    onClick={() => setTableNumber(tbl)}
                    className={`text-[11px] px-2.5 py-1 rounded-lg font-medium whitespace-nowrap transition-all border shrink-0 ${
                      tableNumber === tbl
                        ? 'bg-brand-900 text-gold-200 border-brand-900 shadow-xs'
                        : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    {tbl}
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Items List */}
            {orderItems.length > 0 ? (
              <div className="space-y-3">
                <div className="flex items-center justify-between px-0.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-600">
                    Selected Dishes
                  </h4>
                  {confirmClear ? (
                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] text-rose-700 font-semibold">Clear all?</span>
                      <button
                        onClick={() => {
                          clearOrder();
                          setConfirmClear(false);
                        }}
                        className="text-[11px] px-2 py-0.5 bg-rose-700 text-white rounded font-bold"
                      >
                        Yes
                      </button>
                      <button
                        onClick={() => setConfirmClear(false)}
                        className="text-[11px] px-2 py-0.5 bg-stone-200 text-stone-700 rounded font-bold"
                      >
                        No
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setConfirmClear(true)}
                      className="text-[11px] text-stone-400 hover:text-rose-700 flex items-center gap-1 transition-colors"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>Clear All</span>
                    </button>
                  )}
                </div>

                {orderItems.map((item) => (
                  <div
                    key={item.itemKey}
                    className="bg-white p-3 sm:p-3.5 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between gap-2.5"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-start gap-2 min-w-0">
                        {/* Veg / Non-veg dot */}
                        <div
                          className={`w-3.5 h-3.5 rounded-xs border p-0.5 mt-1 shrink-0 flex items-center justify-center ${
                            item.isVeg
                              ? 'border-emerald-600 bg-emerald-50'
                              : 'border-rose-700 bg-rose-50'
                          }`}
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full ${
                              item.isVeg ? 'bg-emerald-600' : 'bg-rose-700'
                            }`}
                          />
                        </div>

                        <div className="min-w-0">
                          <p className="text-sm font-bold text-stone-900 leading-snug break-words">
                            {item.name}
                          </p>
                          <div className="flex items-center gap-1.5 mt-0.5 flex-wrap">
                            {item.variant && (
                              <span className="text-[10px] sm:text-[11px] font-semibold text-brand-900 bg-brand-50 px-1.5 py-0.2 rounded border border-brand-200">
                                {item.variant} Portion
                              </span>
                            )}
                            <span className="text-xs text-stone-500 font-medium">
                              ₹{item.price} each
                            </span>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => removeItem(item.itemKey)}
                        className="text-stone-300 hover:text-rose-600 p-1 transition-colors shrink-0"
                        title="Remove dish"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Stepper and Line Total */}
                    <div className="flex items-center justify-between pt-2 border-t border-stone-100">
                      <div className="flex items-center gap-2 bg-stone-100 rounded-lg p-1">
                        <button
                          onClick={() => updateQuantity(item.itemKey, -1)}
                          className="w-6 h-6 rounded bg-white shadow-xs flex items-center justify-center text-stone-700 hover:bg-stone-200 active:scale-95"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-stone-900 min-w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.itemKey, 1)}
                          className="w-6 h-6 rounded bg-white shadow-xs flex items-center justify-center text-stone-700 hover:bg-stone-200 active:scale-95"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-sm font-extrabold text-stone-900">
                        ₹{item.price * item.quantity}
                      </span>
                    </div>
                  </div>
                ))}

                {/* Kitchen Special Notes */}
                <div className="bg-white p-3 sm:p-3.5 rounded-2xl border border-stone-200 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-stone-700">
                    <MessageSquare className="w-3.5 h-3.5 text-gold-600" />
                    <span>Kitchen Notes / Preferences:</span>
                  </div>
                  <textarea
                    value={orderNotes}
                    onChange={(e) => setOrderNotes(e.target.value)}
                    placeholder="e.g. Mild spicy for children, please serve soup first, extra lemons..."
                    rows={2}
                    className="w-full text-xs p-2 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-brand-800"
                  />
                </div>
              </div>
            ) : (
              /* Empty Tray State */
              <div className="text-center py-16 px-4 space-y-3">
                <div className="w-16 h-16 rounded-full bg-cream-200 text-stone-400 flex items-center justify-center mx-auto">
                  <Utensils className="w-8 h-8 text-stone-400" />
                </div>
                <h4 className="font-serif font-bold text-base text-stone-800">
                  Your Order Tray is Empty
                </h4>
                <p className="text-stone-500 text-xs max-w-xs mx-auto">
                  Browse our authentic dishes and click "+ Add" to begin assembling your meal.
                </p>
                <button
                  onClick={() => setIsOrderDrawerOpen(false)}
                  className="px-5 py-2 rounded-xl bg-gold-600 text-stone-950 font-bold text-xs shadow hover:bg-gold-500 transition-all"
                >
                  Explore Menu
                </button>
              </div>
            )}
          </div>

          {/* Drawer Footer / Checkout Actions */}
          {orderItems.length > 0 && (
            <div className="p-3.5 sm:p-5 bg-white border-t border-stone-200 shadow-lg space-y-2.5 shrink-0">
              {/* Summary row */}
              <div className="flex items-center justify-between text-sm">
                <span className="text-stone-600 font-medium text-xs sm:text-sm">Estimated Order Total:</span>
                <span className="text-lg sm:text-xl font-extrabold text-stone-950">
                  ₹{subtotal}
                </span>
              </div>

              {/* Main Action Button: Show to Waiter */}
              <button
                onClick={handleProceedToWaiter}
                className="w-full py-3 sm:py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 via-gold-500 to-amber-600 text-stone-950 font-extrabold text-sm sm:text-base shadow-lg hover:from-amber-400 hover:to-gold-500 transition-all flex items-center justify-center gap-2 transform active:scale-98 cursor-pointer"
              >
                <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-stone-950 animate-bounce-subtle" />
                <span>Show Order to Waiter</span>
              </button>

              <p className="text-center text-[10px] sm:text-[11px] text-stone-500">
                Turn your phone towards the waiter or show them the screen to place your table order.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
