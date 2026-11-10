import React, { useState } from 'react';
import { useApp } from '../data/store.tsx';
import {
  User,
  Package,
  Download,
  Lock,
  CheckCircle2,
  Clock,
  LogOut,
  ShieldCheck,
  Key,
  ExternalLink,
  Copy,
  Check,
  AlertCircle
} from 'lucide-react';

export const AccountPage: React.FC = () => {
  const { currentUser, setCurrentUser, loginAsDemoCustomer, logout, orders, language, t } = useApp();
  const isAr = language === 'ar';

  const [activeTab, setActiveTab] = useState<'orders' | 'downloads' | 'settings'>('orders');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;

    setCurrentUser({
      id: `usr_${Date.now()}`,
      name: nameInput.trim() || emailInput.split('@')[0],
      email: emailInput.trim(),
      role: 'customer',
      joinedDate: 'Nov 2026'
    });
  };

  const copyLicense = (key: string) => {
    navigator.clipboard.writeText(key);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  // If not logged in, show Auth form with Demo Quick Login
  if (!currentUser) {
    return (
      <div className="max-w-md mx-auto px-4 py-16 space-y-8">
        <div className="text-center space-y-2">
          <div className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center mx-auto text-[#B00018]">
            <User className="w-5 h-5" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-neutral-950 dark:text-white">
            {isRegistering ? t.register : t.login}
          </h1>
          <p className="text-xs text-neutral-500">
            {isAr
              ? 'سجل دخولك لمتابعة طلباتك، التراخيص المفعلة، والتنزيلات المحمية.'
              : 'Sign in to access your license keys, order tracking, and protected downloads.'}
          </p>
        </div>

        <div className="p-6 sm:p-7 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0E0E0E] shadow-sm space-y-4">
          <form onSubmit={handleLoginSubmit} className="space-y-3.5 text-xs">
            {isRegistering && (
              <div>
                <label className="block text-neutral-600 dark:text-neutral-400 font-medium mb-1">
                  {t.fullName}
                </label>
                <input
                  type="text"
                  required
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  placeholder={isAr ? 'الاسم الكريم' : 'Your name'}
                  className="w-full px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#B00018]"
                />
              </div>
            )}

            <div>
              <label className="block text-neutral-600 dark:text-neutral-400 font-medium mb-1">
                {t.emailAddress}
              </label>
              <input
                type="email"
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="name@domain.com"
                className="w-full px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#B00018]"
              />
            </div>

            <div>
              <label className="block text-neutral-600 dark:text-neutral-400 font-medium mb-1">
                {isAr ? 'كلمة المرور' : 'Password'}
              </label>
              <input
                type="password"
                required
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="••••••••"
                className="w-full px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#B00018]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 px-4 font-semibold text-white bg-[#B00018] hover:bg-[#F00020] rounded-md transition-colors cursor-pointer"
            >
              {isRegistering ? t.register : t.login}
            </button>
          </form>

          <div className="pt-2 text-center">
            <button
              onClick={() => setIsRegistering(!isRegistering)}
              className="text-xs text-neutral-500 hover:text-neutral-900 dark:hover:text-white underline cursor-pointer"
            >
              {isRegistering
                ? (isAr ? 'لديك حساب بالفعل؟ تسجيل الدخول' : 'Already have an account? Sign In')
                : (isAr ? 'ليس لديك حساب؟ إنشاء حساب جديد' : 'New customer? Create an account')}
            </button>
          </div>

          <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 text-center space-y-2">
            <span className="text-[11px] text-neutral-400 block">
              {isAr ? 'أو للتجربة السريعة الفورية:' : 'Or for instant review:'}
            </span>
            <button
              type="button"
              onClick={loginAsDemoCustomer}
              className="w-full py-2 text-xs font-medium text-neutral-700 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-700 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              {isAr ? 'دخول بحساب عميل تجريبي (Demo Customer)' : 'One-Click Demo Customer Sign In'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Logged-in Customer View
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      
      {/* Account Header */}
      <div className="p-6 sm:p-8 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0E0E0E] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#B00018]/10 text-[#B00018] font-bold text-lg flex items-center justify-center">
            {currentUser.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-neutral-950 dark:text-white">
                {currentUser.name}
              </h1>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                {currentUser.role}
              </span>
            </div>
            <p className="text-xs text-neutral-500 mt-0.5">
              {currentUser.email} · {isAr ? 'عضو منذ ' : 'Member since '}{currentUser.joinedDate}
            </p>
          </div>
        </div>

        <button
          onClick={logout}
          className="px-3.5 py-1.5 text-xs font-semibold text-neutral-600 dark:text-neutral-400 border border-neutral-300 dark:border-neutral-700 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>{t.logout}</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-neutral-200 dark:border-neutral-800 text-xs">
        {[
          { id: 'orders', label: t.myOrders, icon: Package },
          { id: 'downloads', label: t.myDownloads, icon: Download }
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`pb-3 px-3 font-semibold transition-colors flex items-center gap-2 cursor-pointer relative ${
                activeTab === tab.id
                  ? 'text-[#B00018]'
                  : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
              {activeTab === tab.id && (
                <span className="absolute bottom-0 inset-x-0 h-0.5 bg-[#B00018]" />
              )}
            </button>
          );
        })}
      </div>

      {/* Tab: Orders */}
      {activeTab === 'orders' && (
        <div className="space-y-4">
          <div className="text-xs text-neutral-500">
            {isAr ? 'سجل كافة طلبات الشراء والحجوزات المسجلة بحسابك:' : 'Complete ledger of orders and license pre-orders registered to your account:'}
          </div>

          <div className="space-y-3">
            {orders.map((ord) => {
              const isConfirmed = ord.status === 'Confirmed' || ord.status === 'Completed';
              return (
                <div
                  key={ord.id}
                  className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0E0E0E] flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-mono font-bold text-neutral-900 dark:text-white">
                        {ord.id}
                      </span>
                      <span className="text-xs text-neutral-400">· {ord.date}</span>
                      
                      {/* Status label (no pills) */}
                      <span
                        className={`text-xs font-semibold ${
                          isConfirmed ? 'text-emerald-500' : 'text-amber-500'
                        }`}
                      >
                        ● {ord.status}
                      </span>
                    </div>

                    <div className="text-xs text-neutral-700 dark:text-neutral-300">
                      {ord.items.map((it, idx) => (
                        <span key={idx} className="block">
                          {it.productName} × {it.quantity} ({it.priceLabel})
                        </span>
                      ))}
                    </div>

                    <div className="text-[11px] text-neutral-400 font-mono">
                      {isAr ? 'المرجع: ' : 'Reference: '}{ord.paymentReference} · {ord.paymentMethod}
                    </div>
                  </div>

                  {/* Actions / Download readiness */}
                  <div className="flex items-center gap-3 shrink-0">
                    {isConfirmed ? (
                      <button
                        onClick={() => setActiveTab('downloads')}
                        className="px-3 py-1.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-md transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>{isAr ? 'فتح التنزيل' : 'Access Download'}</span>
                      </button>
                    ) : (
                      <div className="text-[11px] text-amber-500 flex items-center gap-1 bg-amber-500/10 px-2.5 py-1 rounded">
                        <Clock className="w-3 h-3" />
                        <span>{isAr ? 'قيد التحقق اليدوي' : 'Verification In Review'}</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tab: Protected Downloads */}
      {activeTab === 'downloads' && (
        <div className="space-y-6">
          <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/40 text-xs text-neutral-600 dark:text-neutral-400 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-neutral-900 dark:text-white">
                {t.protectedDownloads}
              </div>
              <p className="mt-0.5 text-[11px] leading-relaxed">
                {isAr
                  ? 'التنزيلات المحمية مخصصة للعملاء الذين تم تأكيد مدفوعاتهم من قِبل إدارة كود برنت. لا يتم منح روابط التنزيل قبل التحقق الفعلي.'
                  : 'Protected distribution packages and license keys unlock upon payment confirmation by CodePrint administration.'}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {orders
              .filter((o) => o.downloadAccessGranted)
              .map((ord) => (
                <div
                  key={ord.id}
                  className="p-6 rounded-xl border border-emerald-500/30 bg-emerald-500/5 space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold uppercase">
                        {isAr ? 'ترخيص رسمي مفعل' : 'Official License Active'}
                      </span>
                      <h3 className="text-base font-bold text-neutral-950 dark:text-white mt-0.5">
                        {ord.items[0]?.productName || 'CodePrint Software Release'}
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-neutral-500">{ord.id}</span>
                  </div>

                  {/* Generated License Token */}
                  <div className="p-3 rounded-lg bg-neutral-900 text-white font-mono text-xs flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 truncate">
                      <Key className="w-3.5 h-3.5 text-[#F00020] shrink-0" />
                      <span className="truncate">CP-LIC-{ord.id}-PROD-2026-X99</span>
                    </div>
                    <button
                      onClick={() => copyLicense(`CP-LIC-${ord.id}-PROD-2026-X99`)}
                      className="text-[11px] text-neutral-300 hover:text-white flex items-center gap-1 cursor-pointer shrink-0"
                    >
                      {copiedKey === `CP-LIC-${ord.id}-PROD-2026-X99` ? (
                        <Check className="w-3 h-3 text-emerald-400" />
                      ) : (
                        <Copy className="w-3 h-3" />
                      )}
                      <span>{copiedKey ? (isAr ? 'تم' : 'Copied') : (isAr ? 'نسخ' : 'Copy')}</span>
                    </button>
                  </div>

                  <div className="flex items-center justify-between pt-1 text-xs">
                    <span className="text-neutral-500">
                      {isAr ? 'الحزمة: الإصدار المستقر v1.0' : 'Package: Release v1.0.0 Stable'}
                    </span>
                    <a
                      href={`https://github.com/codeprintomar`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 font-semibold text-white bg-neutral-900 dark:bg-white dark:text-neutral-900 rounded-md hover:bg-neutral-800 transition-colors flex items-center gap-1.5"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>{t.download}</span>
                    </a>
                  </div>
                </div>
              ))}

            {orders.filter((o) => o.downloadAccessGranted).length === 0 && (
              <div className="py-12 text-center text-xs text-neutral-400 space-y-2">
                <Lock className="w-8 h-8 text-neutral-300 dark:text-neutral-700 mx-auto" />
                <p>
                  {isAr
                    ? 'لا توجد تنزيلات مفعلة حالياً. الطلبات المعلقة قيد التحقق المالي.'
                    : 'No active downloads yet. Pending orders are undergoing manual verification.'}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
