import React, { useState } from 'react';
import { Plus, Minus, Sparkles, Flame, Check } from 'lucide-react';
import { useOrder } from '../context/OrderContext';

export default function FoodCard({ item }) {
  const { addItem, updateQuantity, getItemQuantity, orderItems } = useOrder();
  
  // Portion variant selection (if item offers Half / Full)
  const hasVariants = item.variants && item.variants.length > 0;
  const [selectedVariant, setSelectedVariant] = useState(
    hasVariants ? item.variants[0] : null
  );

  const activePrice = selectedVariant ? selectedVariant.price : item.price;
  const currentVariantLabel = selectedVariant ? selectedVariant.label : null;

  // Key for this specific variant or item
  const currentItemKey = `${item.id}__${currentVariantLabel || 'standard'}`;
  const cartItem = orderItems.find(i => i.itemKey === currentItemKey);
  const qtyInCart = cartItem ? cartItem.quantity : 0;

  const handleAdd = () => {
    addItem(item, selectedVariant);
  };

  const handleIncrement = () => {
    updateQuantity(currentItemKey, 1);
  };

  const handleDecrement = () => {
    updateQuantity(currentItemKey, -1);
  };

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200/90 shadow-sm hover:shadow-card hover:border-gold-400/80 transition-all flex flex-col justify-between group">
      <div>
        {/* Top Indicators: Veg/Non-Veg & Badges */}
        <div className="flex items-start justify-between gap-2 mb-2.5">
          <div className="flex items-center gap-2">
            {/* Authentic Indian Veg / Non-Veg icon */}
            <div
              className={`w-4 h-4 rounded-sm border p-0.5 flex items-center justify-center shrink-0 ${
                item.isVeg
                  ? 'border-emerald-600 bg-emerald-50'
                  : 'border-rose-700 bg-rose-50'
              }`}
              title={item.isVeg ? 'Pure Vegetarian' : 'Non-Vegetarian'}
            >
              <div
                className={`w-2 h-2 rounded-full ${
                  item.isVeg ? 'bg-emerald-600' : 'bg-rose-700'
                }`}
              />
            </div>

            {/* Subcategory or note */}
            {item.sub && (
              <span className="text-[10px] font-medium text-stone-600 uppercase tracking-wider bg-stone-100 px-1.5 py-0.5 rounded">
                {item.sub}
              </span>
            )}
          </div>

          {/* Special / Popular Badges */}
          <div className="flex items-center gap-1">
            {item.isSpecial && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300">
                <Sparkles className="w-2.5 h-2.5 text-amber-700" />
                Special
              </span>
            )}
            {item.isPopular && !item.isSpecial && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 text-rose-900 border border-rose-200">
                <Flame className="w-2.5 h-2.5 text-rose-600" />
                Popular
              </span>
            )}
          </div>
        </div>

        {/* Dish Title & Hindi Subtitle */}
        <div className="mb-2">
          <h3 className="font-serif font-bold text-base sm:text-lg text-stone-900 leading-snug group-hover:text-brand-900 transition-colors">
            {item.name}
          </h3>
          {item.hindi && (
            <p className="text-xs text-stone-600 font-medium mt-0.5">
              {item.hindi}
            </p>
          )}
        </div>

        {/* Appetizing Description */}
        {item.description && (
          <p className="text-stone-600 text-xs sm:text-[13px] leading-relaxed line-clamp-2 mb-3">
            {item.description}
          </p>
        )}

        {/* Portion Selector (Variants: Half / Full) */}
        {hasVariants && (
          <div className="my-3 pt-2.5 border-t border-stone-100">
            <span className="text-[11px] font-semibold text-stone-600 uppercase tracking-wider block mb-1.5">
              Select Portion:
            </span>
            <div className="flex gap-1.5">
              {item.variants.map((v) => {
                const isSelected = selectedVariant?.label === v.label;
                return (
                  <button
                    key={v.label}
                    type="button"
                    onClick={() => setSelectedVariant(v)}
                    className={`flex-1 py-1 px-2 rounded-lg text-xs font-semibold transition-all border ${
                      isSelected
                        ? 'bg-brand-900 text-gold-200 border-brand-900 shadow-xs'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    <span>{v.label}</span>
                    <span className="ml-1 opacity-90 font-normal">₹{v.price}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Card Footer: Price and Add/Quantity Stepper */}
      <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
        <div>
          <span className="text-xs text-stone-600 block">Price</span>
          <div className="flex items-baseline gap-1">
            <span className="text-lg sm:text-xl font-extrabold text-stone-900">
              ₹{activePrice}
            </span>
            {item.note && (
              <span className="text-[10px] text-amber-700 font-medium">
                ({item.note})
              </span>
            )}
          </div>
        </div>

        {/* Quantity Stepper / Add Button */}
        <div>
          {qtyInCart > 0 ? (
            <div className="flex items-center gap-2 bg-stone-900 text-white rounded-xl px-2 py-1 shadow-md">
              <button
                onClick={handleDecrement}
                className="w-6 h-6 rounded-md bg-stone-800 hover:bg-brand-800 flex items-center justify-center transition-colors focus:outline-none"
                aria-label="Decrease quantity"
              >
                <Minus className="w-3.5 h-3.5 text-stone-200" />
              </button>
              <span className="font-bold text-sm min-w-4 text-center text-gold-300">
                {qtyInCart}
              </span>
              <button
                onClick={handleIncrement}
                className="w-6 h-6 rounded-md bg-stone-800 hover:bg-brand-800 flex items-center justify-center transition-colors focus:outline-none"
                aria-label="Increase quantity"
              >
                <Plus className="w-3.5 h-3.5 text-stone-200" />
              </button>
            </div>
          ) : (
            <button
              onClick={handleAdd}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gold-600 hover:bg-gold-500 text-stone-950 font-bold text-xs sm:text-sm shadow-sm transition-all transform active:scale-95 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5 text-stone-950 stroke-[3]" />
              <span>Add</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
