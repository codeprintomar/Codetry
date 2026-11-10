import React, { useState } from 'react';
import { useApp } from '../data/store.tsx';
import {
  ShieldAlert,
  Package,
  ShoppingBag,
  MessageSquare,
  FileText,
  Settings,
  Search,
  CheckCircle2,
  Clock,
  XCircle,
  ExternalLink,
  Save,
  Check,
  Edit2,
  Eye,
  Activity
} from 'lucide-react';
import { OrderStatus, ProductItem } from '../data/types.ts';

export const AdminPage: React.FC = () => {
  const {
    currentUser,
    loginAsAdmin,
    orders,
    updateOrderStatus,
    products,
    updateProduct,
    quotes,
    feedback,
    language,
    t
  } = useApp();
  const isAr = language === 'ar';

  const [activeTab, setActiveTab] = useState<'overview' | 'products' | 'orders' | 'quotes' | 'feedback' | 'settings'>('overview');
  const [orderSearch, setOrderSearch] = useState('');
  const [editingProduct, setEditingProduct] = useState<ProductItem | null>(null);
  const [statusMessage, setStatusMessage] = useState('');

  // Password-protected Admin Gateway
  if (!currentUser || currentUser.role !== 'admin') {
    return (
      <div className="max-w-md mx-auto px-4 py-20 space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center mx-auto">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-neutral-950 dark:text-white">
            {t.adminDashboard}
          </h1>
          <p className="text-xs text-neutral-500">
            {isAr
              ? 'هذه اللوحة مخصصة لإدارة منصة كود برنت، تأكيد طلبات الشراء، وتحديث المنتجات.'
              : 'Restricted administrative portal for managing CodePrint catalog, orders, and inquiries.'}
          </p>
        </div>

        <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0E0E0E] space-y-4">
          <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {isAr
              ? 'لأغراض المراجعة والتقييم الفوري، يمكنك الدخول كمدير منصة بضغطة زر واحدة:'
              : 'For demonstration and operational testing, authenticate as Platform Lead:'}
          </p>
          <button
            onClick={loginAsAdmin}
            className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-[#B00018] hover:bg-[#F00020] rounded-md transition-colors cursor-pointer shadow-sm"
          >
            {isAr ? 'الدخول كمسؤول للمنصة (Admin Sign-In)' : 'Sign In as CodePrint Admin'}
          </button>
        </div>
      </div>
    );
  }

  // KPIs
  const totalProducts = products.length;
  const totalOrders = orders.length;
  const pendingOrders = orders.filter((o) => o.status === 'Under Review' || o.status === 'Pending').length;
  const completedOrders = orders.filter((o) => o.status === 'Confirmed' || o.status === 'Completed').length;
  const totalQuotes = quotes.length;

  const filteredOrders = orders.filter(
    (o) =>
      o.id.toLowerCase().includes(orderSearch.toLowerCase()) ||
      o.customerName.toLowerCase().includes(orderSearch.toLowerCase()) ||
      o.customerEmail.toLowerCase().includes(orderSearch.toLowerCase()) ||
      o.status.toLowerCase().includes(orderSearch.toLowerCase())
  );

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProduct) {
      updateProduct(editingProduct);
      setEditingProduct(null);
      setStatusMessage(isAr ? 'تم حفظ تعديلات المنتج بنجاح' : 'Product updated successfully');
      setTimeout(() => setStatusMessage(''), 3000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      
      {/* Admin Header */}
      <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0E0E0E] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-amber-500"></span>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-500">
              Admin Console · CodePrint v1.2
            </span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-neutral-950 dark:text-white mt-1">
            {t.adminDashboard}
          </h1>
        </div>

        {statusMessage && (
          <div className="text-xs font-medium text-emerald-500 bg-emerald-500/10 px-3 py-1.5 rounded-md flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" />
            <span>{statusMessage}</span>
          </div>
        )}
      </div>

      {/* Admin Navigation Tabs */}
      <div className="flex items-center gap-1 overflow-x-auto border-b border-neutral-200 dark:border-neutral-800 pb-px text-xs">
        {[
          { id: 'overview', label: t.adminOverview, icon: Activity },
          { id: 'orders', label: `${t.adminOrders} (${pendingOrders} pending)`, icon: ShoppingBag },
          { id: 'products', label: t.adminProducts, icon: Package },
          { id: 'quotes', label: `${t.adminQuotes} (${totalQuotes})`, icon: MessageSquare },
          { id: 'feedback', label: t.adminFeedback, icon: FileText },
          { id: 'settings', label: t.adminSettings, icon: Settings }
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-2.5 px-3.5 font-semibold transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer rounded-t-md ${
                activeTab === tab.id
                  ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-950 dark:text-white border-b-2 border-[#B00018]'
                  : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB: OVERVIEW */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0E0E0E] space-y-1">
              <span className="text-xs text-neutral-400 font-medium">{t.navProducts}</span>
              <div className="text-2xl font-bold font-mono tabular-nums text-neutral-900 dark:text-white">{totalProducts}</div>
              <span className="text-[11px] text-neutral-500">{isAr ? '10 أدوات + 4 منتجات' : '10 Tools + 4 Paid'}</span>
            </div>

            <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0E0E0E] space-y-1">
              <span className="text-xs text-neutral-400 font-medium">{t.adminOrders}</span>
              <div className="text-2xl font-bold font-mono tabular-nums text-neutral-900 dark:text-white">{totalOrders}</div>
              <span className="text-[11px] text-neutral-500">{isAr ? 'إجمالي مسجل' : 'Lifetime Orders'}</span>
            </div>

            <div className="p-5 rounded-xl border border-amber-500/30 bg-amber-500/5 space-y-1">
              <span className="text-xs text-amber-500 font-medium">{t.statusUnderReview}</span>
              <div className="text-2xl font-bold font-mono tabular-nums text-amber-500">{pendingOrders}</div>
              <span className="text-[11px] text-amber-600/80">{isAr ? 'تحتاج تحقق مالي' : 'Requires Payment Check'}</span>
            </div>

            <div className="p-5 rounded-xl border border-emerald-500/30 bg-emerald-500/5 space-y-1">
              <span className="text-xs text-emerald-500 font-medium">{t.statusConfirmed}</span>
              <div className="text-2xl font-bold font-mono tabular-nums text-emerald-500">{completedOrders}</div>
              <span className="text-[11px] text-emerald-600/80">{isAr ? 'تم منح التنزيلات' : 'Downloads Delivered'}</span>
            </div>
          </div>

          {/* Recent Orders Action Queue */}
          <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0E0E0E] space-y-4">
            <h3 className="text-sm font-bold text-neutral-950 dark:text-white">
              {isAr ? 'طابور التحقق المالي للطلبات الحديثة' : 'Immediate Order Review Queue'}
            </h3>
            <div className="space-y-3">
              {orders.slice(0, 4).map((ord) => (
                <div
                  key={ord.id}
                  className="p-3.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-neutral-900 dark:text-white">{ord.id}</span>
                      <span className="text-neutral-400">· {ord.customerName} ({ord.customerEmail})</span>
                    </div>
                    <div className="text-[11px] text-neutral-500 mt-0.5">
                      {ord.paymentMethod} — {isAr ? 'مرجع: ' : 'Ref: '}{ord.paymentReference}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`text-[11px] font-semibold px-2 py-0.5 rounded ${
                      ord.status === 'Confirmed' || ord.status === 'Completed'
                        ? 'text-emerald-500 bg-emerald-500/10'
                        : 'text-amber-500 bg-amber-500/10'
                    }`}>
                      {ord.status}
                    </span>

                    <button
                      onClick={() => {
                        const next: OrderStatus = ord.status === 'Confirmed' ? 'Under Review' : 'Confirmed';
                        updateOrderStatus(ord.id, next);
                      }}
                      className="px-2.5 py-1 text-[11px] font-semibold text-white bg-neutral-900 dark:bg-neutral-800 hover:bg-[#B00018] rounded cursor-pointer transition-colors"
                    >
                      {ord.status === 'Confirmed' ? 'Revoke' : 'Verify & Confirm'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB: ORDERS MANAGEMENT */}
      {activeTab === 'orders' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <div className="relative w-full max-w-sm">
              <Search className="w-4 h-4 absolute top-2.5 start-3 text-neutral-400" />
              <input
                type="text"
                value={orderSearch}
                onChange={(e) => setOrderSearch(e.target.value)}
                placeholder={isAr ? 'بحث برقم الطلب أو العميل...' : 'Search by order ID, email, status...'}
                className="w-full ps-9 pe-4 py-1.5 text-xs rounded-md border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#B00018]"
              />
            </div>
            <span className="text-xs text-neutral-400 font-mono">
              {filteredOrders.length} {isAr ? 'طلبات' : 'records'}
            </span>
          </div>

          <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden bg-white dark:bg-[#0E0E0E]">
            <table className="w-full text-start text-xs">
              <thead className="bg-neutral-50 dark:bg-neutral-900/60 border-b border-neutral-200 dark:border-neutral-800 text-neutral-400 font-medium">
                <tr>
                  <th className="py-3 px-4 text-start">{t.orderId}</th>
                  <th className="py-3 px-4 text-start">{t.customer}</th>
                  <th className="py-3 px-4 text-start">{t.date}</th>
                  <th className="py-3 px-4 text-start">{t.paymentMethod}</th>
                  <th className="py-3 px-4 text-start">{t.paymentRef}</th>
                  <th className="py-3 px-4 text-start">{t.orderStatus}</th>
                  <th className="py-3 px-4 text-start">{t.downloadAccess}</th>
                  <th className="py-3 px-4 text-start">{t.action}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800/80">
                {filteredOrders.map((ord) => (
                  <tr key={ord.id} className="hover:bg-neutral-50 dark:hover:bg-neutral-900/30">
                    <td className="py-3 px-4 font-mono font-bold text-neutral-900 dark:text-white">{ord.id}</td>
                    <td className="py-3 px-4">
                      <div className="font-semibold text-neutral-900 dark:text-white">{ord.customerName}</div>
                      <div className="text-[11px] text-neutral-400">{ord.customerEmail}</div>
                    </td>
                    <td className="py-3 px-4 font-mono text-neutral-400">{ord.date}</td>
                    <td className="py-3 px-4 text-neutral-700 dark:text-neutral-300">{ord.paymentMethod}</td>
                    <td className="py-3 px-4 font-mono text-[11px] text-neutral-500">{ord.paymentReference}</td>
                    <td className="py-3 px-4">
                      <select
                        value={ord.status}
                        onChange={(e) => updateOrderStatus(ord.id, e.target.value as OrderStatus)}
                        className="px-2 py-1 rounded border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-xs font-semibold"
                      >
                        <option value="Pending">Pending</option>
                        <option value="Under Review">Under Review</option>
                        <option value="Confirmed">Confirmed</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`text-[11px] font-semibold ${
                        ord.downloadAccessGranted ? 'text-emerald-500' : 'text-neutral-400'
                      }`}>
                        {ord.downloadAccessGranted ? '✓ Enabled' : '✕ Locked'}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <button
                        onClick={() => {
                          const next = ord.status === 'Confirmed' ? 'Under Review' : 'Confirmed';
                          updateOrderStatus(ord.id, next);
                        }}
                        className="text-[11px] font-medium text-[#B00018] hover:underline cursor-pointer"
                      >
                        Toggle Status
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB: PRODUCTS MANAGEMENT */}
      {activeTab === 'products' && (
        <div className="space-y-6">
          {editingProduct ? (
            <form onSubmit={handleSaveProduct} className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0E0E0E] space-y-4 max-w-2xl text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-neutral-200 dark:border-neutral-800">
                <h3 className="text-sm font-bold text-neutral-950 dark:text-white">
                  Edit Product: {editingProduct.name}
                </h3>
                <button
                  type="button"
                  onClick={() => setEditingProduct(null)}
                  className="text-neutral-400 hover:text-white"
                >
                  Cancel
                </button>
              </div>

              <div>
                <label className="block text-neutral-400 mb-1">Status</label>
                <select
                  value={editingProduct.status}
                  onChange={(e) => setEditingProduct({ ...editingProduct, status: e.target.value as any })}
                  className="w-full p-2 rounded border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900"
                >
                  <option value="Available">Available</option>
                  <option value="In Development">In Development</option>
                </select>
              </div>

              <div>
                <label className="block text-neutral-400 mb-1">Price Label</label>
                <input
                  type="text"
                  value={editingProduct.priceLabel}
                  onChange={(e) => setEditingProduct({ ...editingProduct, priceLabel: e.target.value })}
                  className="w-full p-2 rounded border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900"
                />
              </div>

              <div>
                <label className="block text-neutral-400 mb-1">Tagline</label>
                <input
                  type="text"
                  value={editingProduct.tagline}
                  onChange={(e) => setEditingProduct({ ...editingProduct, tagline: e.target.value })}
                  className="w-full p-2 rounded border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900"
                />
              </div>

              <button
                type="submit"
                className="px-4 py-2 font-semibold text-white bg-[#B00018] hover:bg-[#F00020] rounded cursor-pointer"
              >
                Save Changes
              </button>
            </form>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {products.map((p) => (
                <div
                  key={p.id}
                  className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0E0E0E] flex items-center justify-between gap-4 text-xs"
                >
                  <div>
                    <div className="font-bold text-neutral-950 dark:text-white">{p.name} ({p.nameAr})</div>
                    <div className="text-neutral-500">{p.category} · {p.priceLabel} · {p.status}</div>
                  </div>

                  <button
                    onClick={() => setEditingProduct(p)}
                    className="px-3 py-1.5 text-[11px] font-semibold text-neutral-700 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-700 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center gap-1 cursor-pointer"
                  >
                    <Edit2 className="w-3 h-3" />
                    <span>Edit</span>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* TAB: QUOTES */}
      {activeTab === 'quotes' && (
        <div className="space-y-4">
          <div className="text-xs text-neutral-500">
            {isAr ? 'قائمة طلبات المشاريع المخصصة الواردة من نموذج الخدمات:' : 'Inbound client project inquiries submitted from the Services form:'}
          </div>

          <div className="space-y-3">
            {quotes.map((q) => (
              <div
                key={q.id}
                className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0E0E0E] space-y-3 text-xs"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-mono font-bold text-neutral-950 dark:text-white">{q.id}</span>
                    <span className="text-neutral-400 ms-2">· {q.date} · {q.category}</span>
                  </div>
                  <span className="text-xs font-semibold text-emerald-500 font-mono">{q.budgetRange}</span>
                </div>

                <div className="text-neutral-800 dark:text-neutral-200">
                  <span className="font-semibold">{q.name}</span> ({q.email}) — Preferred: {q.contactPreference}
                </div>

                <p className="text-neutral-600 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-900/60 p-3 rounded">
                  {q.description}
                </p>

                <div className="text-[11px] text-neutral-500">
                  <span className="font-semibold">Required: </span>{q.requiredFeatures}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB: FEEDBACK */}
      {activeTab === 'feedback' && (
        <div className="space-y-4">
          <div className="space-y-3">
            {feedback.map((fb) => (
              <div
                key={fb.id}
                className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0E0E0E] space-y-2 text-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-neutral-950 dark:text-white">
                    {fb.type} — {fb.productName}
                  </span>
                  <span className="text-neutral-400 font-mono">{fb.date}</span>
                </div>
                <div className="text-neutral-500">{fb.name} ({fb.email})</div>
                <p className="text-neutral-700 dark:text-neutral-300">{fb.message}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB: SETTINGS */}
      {activeTab === 'settings' && (
        <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0E0E0E] space-y-4 max-w-xl text-xs">
          <h3 className="text-sm font-bold text-neutral-950 dark:text-white">
            Platform Settings &amp; Invariants
          </h3>
          <div className="space-y-3 text-neutral-600 dark:text-neutral-400 leading-relaxed">
            <p><strong>Brand:</strong> CodePrint</p>
            <p><strong>Official Web:</strong> https://code-print.wasmer.app/</p>
            <p><strong>Official GitHub:</strong> https://github.com/codeprintomar</p>
            <p><strong>Store Mode:</strong> Verified Manual Verification &amp; Invoiced Delivery</p>
            <p><strong>Payment Gateways:</strong> InstaPay Egypt / Bank Wire</p>
          </div>
        </div>
      )}

    </div>
  );
};
