import React, { useState } from 'react';
import { X, Check, Edit3, RotateCcw, Copy, CheckCircle2, MessageSquare, AlertCircle, Utensils } from 'lucide-react';
import { useOrder } from '../context/OrderContext';

export default function WaiterViewModal() {
  const {
    isWaiterViewOpen,
    setIsWaiterViewOpen,
    setIsOrderDrawerOpen,
    orderItems,
    tableNumber,
    orderNotes,
    subtotal,
    totalItemsCount,
    clearOrder
  } = useOrder();

  const [copied, setCopied] = useState(false);
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  if (!isWaiterViewOpen) return null;

  const handleEdit = () => {
    setIsWaiterViewOpen(false);
    setIsOrderDrawerOpen(true);
  };

  const handleCopySummary = () => {
    let text = `*Mulaqaat Family Restaurant - Order*\n`;
    text += `*${tableNumber}*\n`;
    text += `Time: ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}\n\n`;
    text += `*ITEMS:*\n`;
    orderItems.forEach((item, idx) => {
      text += `${idx + 1}. ${item.quantity}x ${item.name} ${item.variant ? `(${item.variant})` : ''} - ₹${item.price * item.quantity}\n`;
    });
    if (orderNotes) {
      text += `\n*Note:* ${orderNotes}\n`;
    }
    text += `\n*Total Items:* ${totalItemsCount}\n`;
    text += `*Estimated Total:* ₹${subtotal}\n`;

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white text-stone-900 rounded-3xl shadow-2xl overflow-hidden border-2 border-gold-500/40 my-auto">
        
        {/* Waiter Banner Header */}
        <div className="bg-[#240610] text-white p-5 sm:p-6 border-b-4 border-gold-500 text-center relative">
          
          {/* Close / Return Button */}
          <button
            onClick={() => setIsWaiterViewOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-stone-300 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Restaurant Logo & Table Badge */}
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-cream-100 p-1 ring-2 ring-gold-400 overflow-hidden flex items-center justify-center shadow-lg">
              <img
                src="/logo.png"
                alt="Mulaqaat Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-gold-200 uppercase">
                Mulaqaat Family Restaurant
              </h2>
              <div className="mt-1 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500 text-stone-950 font-black text-sm tracking-wider uppercase shadow">
                <span>{tableNumber}</span>
              </div>
            </div>
          </div>

          <p className="mt-2 text-xs text-amber-200/80 font-medium">
            Customer Table Order • Please prepare the following items
          </p>
        </div>

        {/* Order Details Body */}
        <div className="p-4 sm:p-6 max-h-[60vh] overflow-y-auto space-y-4">
          
          {orderItems.length > 0 ? (
            <div className="space-y-3">
              {/* Itemized Table with Large Typography */}
              <div className="border border-stone-200 rounded-2xl overflow-hidden shadow-xs">
                <div className="bg-stone-100/80 px-4 py-2 text-xs font-bold text-stone-600 uppercase tracking-wider flex justify-between">
                  <span>Dish / Portion</span>
                  <span>Qty & Amount</span>
                </div>

                <div className="divide-y divide-stone-100 bg-white">
                  {orderItems.map((item, idx) => (
                    <div
                      key={item.itemKey}
                      className="p-3.5 sm:p-4 flex items-center justify-between gap-3 hover:bg-amber-50/40 transition-colors"
                    >
                      <div className="flex items-start gap-2.5">
                        {/* Veg / Non-Veg dot */}
                        <div
                          className={`w-4 h-4 rounded-xs border p-0.5 mt-0.5 shrink-0 flex items-center justify-center ${
                            item.isVeg
                              ? 'border-emerald-600 bg-emerald-50'
                              : 'border-rose-700 bg-rose-50'
                          }`}
                        >
                          <div
                            className={`w-2 h-2 rounded-full ${
                              item.isVeg ? 'bg-emerald-600' : 'bg-rose-700'
                            }`}
                          />
                        </div>

                        <div>
                          <div className="flex items-baseline gap-2">
                            <span className="font-bold text-base sm:text-lg text-stone-950">
                              {item.name}
                            </span>
                            {item.variant && (
                              <span className="font-semibold text-xs px-2 py-0.5 rounded-full bg-brand-100 text-brand-900 border border-brand-200">
                                {item.variant}
                              </span>
                            )}
                          </div>
                          {item.hindi && (
                            <p className="text-xs text-stone-500 font-medium">{item.hindi}</p>
                          )}
                        </div>
                      </div>

                      {/* Large Quantity Badge & Price */}
                      <div className="text-right shrink-0">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-stone-900 text-gold-300 font-extrabold text-sm sm:text-base shadow-xs">
                          <span>{item.quantity} ×</span>
                        </div>
                        <p className="text-xs text-stone-600 font-bold mt-1">
                          ₹{item.price * item.quantity}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Special Instructions Box */}
              {orderNotes && (
                <div className="p-3.5 sm:p-4 rounded-2xl bg-amber-50 border-2 border-amber-300/80 text-amber-950 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-900">
                    <MessageSquare className="w-4 h-4 text-amber-700" />
                    <span>Special Kitchen Instructions:</span>
                  </div>
                  <p className="text-sm font-semibold pl-5 text-stone-800">
                    "{orderNotes}"
                  </p>
                </div>
              )}

              {/* Total Calculation Strip */}
              <div className="p-4 rounded-2xl bg-stone-100 border border-stone-200 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-stone-500 font-bold">
                    Total Order Quantity
                  </p>
                  <p className="text-sm font-extrabold text-stone-800">
                    {totalItemsCount} Dishes
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs uppercase tracking-wider text-stone-500 font-bold">
                    Estimated Subtotal
                  </p>
                  <p className="text-2xl font-black text-brand-950">
                    ₹{subtotal}
                  </p>
                </div>
              </div>

            </div>
          ) : (
            <div className="text-center py-10 space-y-2">
              <p className="text-stone-500 text-sm">No items in the order tray.</p>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 bg-stone-50 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handleEdit}
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl border border-stone-300 bg-white hover:bg-stone-100 text-stone-800 font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-xs transition-colors"
            >
              <Edit3 className="w-4 h-4 text-stone-600" />
              <span>Modify Order</span>
            </button>

            <button
              onClick={handleCopySummary}
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl border border-gold-400 bg-gold-50 hover:bg-gold-100 text-gold-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-xs transition-colors"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-gold-700" />
                  <span>Copy Text</span>
                </>
              )}
            </button>
          </div>

          <div className="w-full sm:w-auto">
            {showClearConfirm ? (
              <div className="flex items-center justify-end gap-2">
                <span className="text-xs text-rose-700 font-bold">Start fresh?</span>
                <button
                  onClick={() => {
                    clearOrder();
                    setShowClearConfirm(false);
                    setIsWaiterViewOpen(false);
                  }}
                  className="px-3 py-1.5 bg-rose-700 text-white rounded-lg font-bold text-xs"
                >
                  Yes, New Order
                </button>
                <button
                  onClick={() => setShowClearConfirm(false)}
                  className="px-3 py-1.5 bg-stone-200 text-stone-700 rounded-lg font-bold text-xs"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowClearConfirm(true)}
                className="w-full sm:w-auto text-xs font-semibold text-stone-500 hover:text-rose-700 py-2 px-3 transition-colors flex items-center justify-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Start New Order</span>
              </button>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
