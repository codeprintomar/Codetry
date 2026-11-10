import React, { useState } from 'react';
import { useApp } from '../data/store.tsx';
import { X, Trash2, ArrowRight, ShieldCheck, ShoppingBag } from 'lucide-react';
import { CheckoutModal } from './CheckoutModal.tsx';

export const CartDrawer: React.FC = () => {
  const { isCartOpen, setIsCartOpen, cart, removeFromCart, clearCart, t, language } = useApp();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  if (!isCartOpen) return null;

  const isAr = language === 'ar';
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end">
        <div className="w-full max-w-md h-full bg-white dark:bg-[#101010] border-s border-neutral-200 dark:border-neutral-800 shadow-2xl flex flex-col animate-in slide-in-from-right duration-200">
          
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-[#B00018]" />
              <h3 className="text-sm font-bold text-neutral-900 dark:text-white">
                {t.cart} ({cartCount})
              </h3>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 text-neutral-400 hover:text-neutral-900 dark:hover:text-white rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-neutral-400 space-y-3">
                <ShoppingBag className="w-10 h-10 stroke-1 text-neutral-300 dark:text-neutral-700" />
                <p className="text-xs">{t.cartEmpty}</p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-neutral-900 dark:text-white border border-neutral-300 dark:border-neutral-700 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer"
                >
                  {isAr ? 'تصفح المنتجات' : 'Browse Products'}
                </button>
              </div>
            ) : (
              cart.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="p-3.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30 flex items-start justify-between gap-3"
                >
                  <div className="space-y-1">
                    <div className="text-xs font-semibold text-neutral-900 dark:text-white">
                      {isAr ? product.nameAr : product.name}
                    </div>
                    <div className="text-[11px] text-neutral-500 font-mono">
                      {isAr ? product.priceLabelAr : product.priceLabel}
                    </div>
                    <div className="text-[10px] text-neutral-400">
                      {isAr ? 'الكمية: ' : 'Qty: '}{quantity}
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="p-1.5 text-neutral-400 hover:text-red-600 transition-colors cursor-pointer"
                    title={isAr ? 'حذف' : 'Remove item'}
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer / Summary */}
          {cart.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/40 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-neutral-500">{t.subtotal}</span>
                <span className="font-semibold text-neutral-900 dark:text-white">
                  {isAr ? 'قيد المراجعة / حسب الحزمة' : 'Tier Package / Invoiced'}
                </span>
              </div>
              <p className="text-[11px] text-neutral-400 leading-normal">
                {isAr
                  ? 'يتم تسجيل الطلب أولاً تحت التحقق والمراجعة. لا يتم احتساب أي مبلغ تلقائي بدون مراجعة وتأكيد.'
                  : 'Orders are registered under manual verification. No automated charges occur without review.'}
              </p>
              <div className="pt-2 flex items-center gap-2">
                <button
                  onClick={() => setIsCheckoutOpen(true)}
                  className="flex-1 py-2.5 px-4 text-xs font-semibold text-white bg-[#B00018] hover:bg-[#F00020] rounded-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <span>{t.checkout}</span>
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                </button>
                <button
                  onClick={clearCart}
                  className="py-2.5 px-3 text-xs text-neutral-500 hover:text-neutral-900 dark:hover:text-white border border-neutral-300 dark:border-neutral-700 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer"
                >
                  {t.clearCart}
                </button>
              </div>
              <div className="flex items-center justify-center gap-1 text-[10px] text-neutral-400 pt-1">
                <ShieldCheck className="w-3 h-3 text-emerald-500" />
                <span>{isAr ? 'دفع يدوي آمن وموثق' : 'Secure Manual Verification Flow'}</span>
              </div>
            </div>
          )}

        </div>
      </div>

      {isCheckoutOpen && (
        <CheckoutModal
          onClose={() => {
            setIsCheckoutOpen(false);
            setIsCartOpen(false);
          }}
        />
      )}
    </>
  );
};
