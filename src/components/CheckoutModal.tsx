import React, { useState } from 'react';
import { useApp } from '../data/store.tsx';
import { X, CheckCircle, ShieldAlert, ArrowRight, Copy, Check } from 'lucide-react';
import { Order } from '../data/types.ts';

interface CheckoutModalProps {
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ onClose }) => {
  const { cart, placeOrder, language, t, setCurrentView } = useApp();
  const isAr = language === 'ar';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'InstaPay / Mobile Wallet' | 'Manual Bank Transfer' | 'Inquiry / Pre-order'>('InstaPay / Mobile Wallet');
  const [paymentReference, setPaymentReference] = useState('');
  const [notes, setNotes] = useState('');
  const [placedOrder, setPlacedOrder] = useState<Order | null>(null);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError(isAr ? 'يرجى إدخال الاسم والبريد الإلكتروني' : 'Please provide your name and email address.');
      return;
    }

    if (!email.includes('@')) {
      setError(isAr ? 'يرجى إدخال بريد إلكتروني صحيح' : 'Please provide a valid email address.');
      return;
    }

    const orderItems = cart.map((item) => ({
      productId: item.product.id,
      productName: isAr ? item.product.nameAr : item.product.name,
      priceLabel: isAr ? item.product.priceLabelAr : item.product.priceLabel,
      quantity: item.quantity
    }));

    const newOrder = placeOrder({
      customerName: name.trim(),
      customerEmail: email.trim(),
      customerPhone: phone.trim() || undefined,
      items: orderItems,
      totalLabel: isAr ? 'قيد المراجعة / حسب الحزمة' : 'Tier Package / Invoiced',
      paymentMethod,
      paymentReference: paymentReference.trim() || 'Pending Reference',
      notes: notes.trim() || undefined
    });

    setPlacedOrder(newOrder);
  };

  const copyOrderId = () => {
    if (placedOrder) {
      navigator.clipboard.writeText(placedOrder.id);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs overflow-y-auto">
      <div
        className="w-full max-w-xl my-8 bg-white dark:bg-[#121212] rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between bg-neutral-50/50 dark:bg-neutral-900/30">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#B00018]"></span>
            <h3 className="text-sm font-bold text-neutral-950 dark:text-white">
              {placedOrder ? t.orderPlaced : t.checkout}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-neutral-900 dark:hover:text-white rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7">
          {placedOrder ? (
            /* Order Placed Success State */
            <div className="space-y-6 text-center">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 text-amber-500 mx-auto flex items-center justify-center">
                <CheckCircle className="w-6 h-6" />
              </div>

              <div>
                <h4 className="text-lg font-bold text-neutral-950 dark:text-white">
                  {t.orderPlaced}
                </h4>
                <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-md mx-auto">
                  {t.orderPlacedSub}
                </p>
              </div>

              {/* Order ID Box */}
              <div className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60 max-w-sm mx-auto text-start space-y-2">
                <div className="flex items-center justify-between text-xs text-neutral-400">
                  <span>{t.orderId}</span>
                  <button
                    onClick={copyOrderId}
                    className="flex items-center gap-1 text-[11px] text-[#B00018] hover:underline cursor-pointer"
                  >
                    {copied ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? (isAr ? 'تم النسخ' : 'Copied') : (isAr ? 'نسخ' : 'Copy')}</span>
                  </button>
                </div>
                <div className="text-base font-mono font-bold text-neutral-900 dark:text-white">
                  {placedOrder.id}
                </div>
                <div className="text-[11px] text-neutral-500">
                  <span>{t.orderStatus}: </span>
                  <span className="font-semibold text-amber-500">{t.statusUnderReview}</span>
                </div>
              </div>

              <div className="text-start p-3.5 rounded border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-600 dark:text-neutral-400 space-y-1">
                <div className="font-semibold text-neutral-900 dark:text-white flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5 text-amber-500" />
                  <span>{isAr ? 'الخطوة التالية للتفعيل' : 'Next Steps For Verification'}</span>
                </div>
                <p>
                  {isAr
                    ? 'سيقوم فريق الدعم بمراجعة بيانات التحويل وتحديث حالة الطلب إلى "تم التأكيد". يمكنك متابعة حالة طلبك أو التواصل مع الدعم في أي وقت.'
                    : 'Our verification team reviews manual references within business hours. Once verified, your status transitions to Confirmed and download access is enabled.'}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    onClose();
                    setCurrentView('account');
                  }}
                  className="w-full sm:flex-1 py-2.5 px-4 text-xs font-semibold text-white bg-[#B00018] hover:bg-[#F00020] rounded-md transition-colors cursor-pointer"
                >
                  {t.myOrders}
                </button>
                <button
                  onClick={onClose}
                  className="w-full sm:flex-1 py-2.5 px-4 text-xs font-semibold text-neutral-700 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-700 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  {isAr ? 'إغلاق' : 'Close'}
                </button>
              </div>
            </div>
          ) : (
            /* Checkout Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-2.5 text-xs text-red-500 bg-red-500/10 border border-red-500/20 rounded-md">
                  {error}
                </div>
              )}

              {/* Order Items Preview */}
              <div className="p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30 space-y-1.5 text-xs">
                <span className="text-[11px] font-semibold text-neutral-400 block mb-1">
                  {isAr ? 'ملخص العناصر' : 'Items In Order'}
                </span>
                {cart.map(({ product, quantity }) => (
                  <div key={product.id} className="flex justify-between items-center text-neutral-700 dark:text-neutral-300">
                    <span>{isAr ? product.nameAr : product.name} × {quantity}</span>
                    <span className="font-mono text-neutral-500">{isAr ? product.priceLabelAr : product.priceLabel}</span>
                  </div>
                ))}
              </div>

              {/* Customer Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-neutral-600 dark:text-neutral-400 font-medium mb-1">
                    {t.fullName} *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={isAr ? 'أدخل اسمك الكريم' : 'Your full name'}
                    className="w-full px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#B00018]"
                  />
                </div>
                <div>
                  <label className="block text-neutral-600 dark:text-neutral-400 font-medium mb-1">
                    {t.emailAddress} *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@domain.com"
                    className="w-full px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#B00018]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-neutral-600 dark:text-neutral-400 font-medium text-xs mb-1">
                  {isAr ? 'رقم الهاتف / الواتساب' : 'Phone / WhatsApp'}
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+20 100 ..."
                  className="w-full px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white text-xs focus:outline-none focus:ring-1 focus:ring-[#B00018]"
                />
              </div>

              {/* Payment Method Selector */}
              <div className="space-y-1.5 text-xs">
                <label className="block text-neutral-600 dark:text-neutral-400 font-medium">
                  {t.paymentMethod}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'InstaPay / Mobile Wallet', label: isAr ? 'إنستاباي / محفظة إلكترونية' : 'InstaPay / Wallet' },
                    { id: 'Manual Bank Transfer', label: isAr ? 'تحويل بنكي' : 'Bank Transfer' },
                    { id: 'Inquiry / Pre-order', label: isAr ? 'طلب مسبق / استفسار' : 'Pre-order Inquiry' }
                  ].map((m) => (
                    <button
                      type="button"
                      key={m.id}
                      onClick={() => setPaymentMethod(m.id as any)}
                      className={`p-2.5 rounded-md border text-start transition-colors cursor-pointer text-xs ${
                        paymentMethod === m.id
                          ? 'border-[#B00018] bg-[#B00018]/5 text-neutral-900 dark:text-white font-semibold'
                          : 'border-neutral-200 dark:border-neutral-800 text-neutral-500 hover:bg-neutral-50 dark:hover:bg-neutral-900'
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Transaction Reference Notice */}
              <div className="p-3 rounded-md bg-neutral-100 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 space-y-2">
                <div className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  {t.manualPaymentNote}
                </div>
                <input
                  type="text"
                  value={paymentReference}
                  onChange={(e) => setPaymentReference(e.target.value)}
                  placeholder={t.enterReference}
                  className="w-full px-3 py-1.5 rounded border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white text-xs focus:outline-none focus:ring-1 focus:ring-[#B00018]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-[#B00018] hover:bg-[#F00020] rounded-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
              >
                <span>{t.confirmOrder}</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
