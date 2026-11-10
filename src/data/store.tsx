import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Language,
  Theme,
  ProductItem,
  CartItem,
  Order,
  OrderStatus,
  ProjectQuoteRequest,
  FeedbackSubmission,
  UserProfile,
  ProjectItem,
  ArticleItem
} from './types.ts';
import { INITIAL_PRODUCTS } from './products.ts';
import { TRANSLATIONS } from './translations.ts';

interface AppContextType {
  language: Language;
  direction: 'ltr' | 'rtl';
  setLanguage: (lang: Language) => void;
  theme: Theme;
  toggleTheme: () => void;
  t: typeof TRANSLATIONS.en;
  currentView: string;
  setCurrentView: (view: string) => void;
  products: ProductItem[];
  updateProduct: (updated: ProductItem) => void;
  cart: CartItem[];
  addToCart: (product: ProductItem) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  orders: Order[];
  placeOrder: (orderData: Omit<Order, 'id' | 'date' | 'status' | 'downloadAccessGranted'>) => Order;
  updateOrderStatus: (orderId: string, newStatus: OrderStatus) => void;
  quotes: ProjectQuoteRequest[];
  submitQuote: (quoteData: Omit<ProjectQuoteRequest, 'id' | 'date' | 'status'>) => void;
  feedback: FeedbackSubmission[];
  submitFeedback: (feedbackData: Omit<FeedbackSubmission, 'id' | 'date' | 'status'>) => void;
  currentUser: UserProfile | null;
  setCurrentUser: (user: UserProfile | null) => void;
  loginAsDemoCustomer: () => void;
  loginAsAdmin: () => void;
  logout: () => void;
  selectedProduct: ProductItem | null;
  setSelectedProduct: (product: ProductItem | null) => void;
  selectedProject: ProjectItem | null;
  setSelectedProject: (project: ProjectItem | null) => void;
  selectedArticle: ArticleItem | null;
  setSelectedArticle: (article: ArticleItem | null) => void;
  isSearchModalOpen: boolean;
  setIsSearchModalOpen: (open: boolean) => void;
  isQuoteModalOpen: boolean;
  setIsQuoteModalOpen: (open: boolean) => void;
  isBugReportModalOpen: boolean;
  setIsBugReportModalOpen: (open: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const SEED_ORDERS: Order[] = [
  {
    id: 'CP-8921',
    date: '2026-11-05',
    customerName: 'Karim Al-Mansour',
    customerEmail: 'karim@mansour.tech',
    customerPhone: '+20 100 234 5678',
    items: [
      { productId: 'gradeos', productName: 'GradeOS Academic License', priceLabel: 'Early Access License', quantity: 1 }
    ],
    totalLabel: 'Under Review',
    status: 'Confirmed',
    paymentMethod: 'InstaPay / Mobile Wallet',
    paymentReference: 'IP-984421-EG',
    downloadAccessGranted: true
  },
  {
    id: 'CP-9014',
    date: '2026-11-08',
    customerName: 'Nour El-Din',
    customerEmail: 'nour@creativehub.co',
    items: [
      { productId: 'outfit-closet', productName: 'Outfit Closet Commercial Package', priceLabel: 'Pre-order Package', quantity: 1 }
    ],
    totalLabel: 'Under Review',
    status: 'Under Review',
    paymentMethod: 'Manual Bank Transfer',
    paymentReference: 'TXN-002931-MISR',
    downloadAccessGranted: false
  }
];

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('codeprint_lang');
    return saved === 'ar' ? 'ar' : 'en';
  });

  const [theme, setThemeState] = useState<Theme>(() => {
    const saved = localStorage.getItem('codeprint_theme');
    return saved === 'light' ? 'light' : 'dark';
  });

  const [currentView, setCurrentView] = useState<string>('home');
  const [products, setProducts] = useState<ProductItem[]>(() => {
    const saved = localStorage.getItem('codeprint_products');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return INITIAL_PRODUCTS;
      }
    }
    return INITIAL_PRODUCTS;
  });

  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('codeprint_cart');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return [];
      }
    }
    return [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem('codeprint_orders');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return SEED_ORDERS;
      }
    }
    return SEED_ORDERS;
  });

  const [quotes, setQuotes] = useState<ProjectQuoteRequest[]>(() => {
    const saved = localStorage.getItem('codeprint_quotes');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return [];
      }
    }
    return [
      {
        id: 'REQ-101',
        date: '2026-11-07',
        name: 'Tariq Hassan',
        email: 'tariq@retailbrand.net',
        category: 'E-commerce Development',
        budgetRange: '$1,000 - $3,000',
        description: 'Need an online storefront with telegram order dispatch and manual payment receipt upload.',
        requiredFeatures: 'Product catalog, Cart, Telegram alert webhook, Arabic typography',
        contactPreference: 'WhatsApp',
        status: 'Reviewed'
      }
    ];
  });

  const [feedback, setFeedback] = useState<FeedbackSubmission[]>(() => {
    const saved = localStorage.getItem('codeprint_feedback');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return [];
      }
    }
    return [
      {
        id: 'FB-402',
        date: '2026-11-06',
        type: 'Feature Request',
        productName: 'Wave',
        name: 'Hany Maher',
        email: 'hany@audiofreak.io',
        message: 'Looking forward to the podcast feed integration in Wave!',
        status: 'Open'
      }
    ];
  });

  const [currentUser, setCurrentUser] = useState<UserProfile | null>(() => {
    const saved = localStorage.getItem('codeprint_user');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return null;
      }
    }
    return null;
  });

  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isBugReportModalOpen, setIsBugReportModalOpen] = useState(false);

  const direction = language === 'ar' ? 'rtl' : 'ltr';
  const t = TRANSLATIONS[language];

  // Sync Language and Direction on <html>
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
    localStorage.setItem('codeprint_lang', language);
  }, [language, direction]);

  // Sync Theme on <html>
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      document.body.classList.add('bg-[#080808]', 'text-white');
      document.body.classList.remove('bg-[#F4F0E8]', 'text-[#111111]');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      document.body.classList.remove('bg-[#080808]', 'text-white');
      document.body.classList.add('bg-[#F8F7F4]', 'text-[#111111]');
    }
    localStorage.setItem('codeprint_theme', theme);
  }, [theme]);

  // Sync Cart
  useEffect(() => {
    localStorage.setItem('codeprint_cart', JSON.stringify(cart));
  }, [cart]);

  // Sync Orders
  useEffect(() => {
    localStorage.setItem('codeprint_orders', JSON.stringify(orders));
  }, [orders]);

  // Sync Quotes
  useEffect(() => {
    localStorage.setItem('codeprint_quotes', JSON.stringify(quotes));
  }, [quotes]);

  // Sync Feedback
  useEffect(() => {
    localStorage.setItem('codeprint_feedback', JSON.stringify(feedback));
  }, [feedback]);

  // Sync Products
  useEffect(() => {
    localStorage.setItem('codeprint_products', JSON.stringify(products));
  }, [products]);

  // Sync User
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('codeprint_user', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('codeprint_user');
    }
  }, [currentUser]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const updateProduct = (updated: ProductItem) => {
    setProducts((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
  };

  const addToCart = (product: ProductItem) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const placeOrder = (orderData: Omit<Order, 'id' | 'date' | 'status' | 'downloadAccessGranted'>): Order => {
    const newOrder: Order = {
      ...orderData,
      id: `CP-${Math.floor(1000 + Math.random() * 9000)}`,
      date: new Date().toISOString().split('T')[0],
      status: 'Under Review',
      downloadAccessGranted: false
    };
    setOrders((prev) => [newOrder, ...prev]);
    clearCart();
    return newOrder;
  };

  const updateOrderStatus = (orderId: string, newStatus: OrderStatus) => {
    setOrders((prev) =>
      prev.map((order) => {
        if (order.id === orderId) {
          const downloadAccess = newStatus === 'Confirmed' || newStatus === 'Completed';
          return { ...order, status: newStatus, downloadAccessGranted: downloadAccess };
        }
        return order;
      })
    );
  };

  const submitQuote = (quoteData: Omit<ProjectQuoteRequest, 'id' | 'date' | 'status'>) => {
    const newQuote: ProjectQuoteRequest = {
      ...quoteData,
      id: `REQ-${Math.floor(100 + Math.random() * 900)}`,
      date: new Date().toISOString().split('T')[0],
      status: 'New'
    };
    setQuotes((prev) => [newQuote, ...prev]);
  };

  const submitFeedback = (feedbackData: Omit<FeedbackSubmission, 'id' | 'date' | 'status'>) => {
    const newFb: FeedbackSubmission = {
      ...feedbackData,
      id: `FB-${Math.floor(100 + Math.random() * 900)}`,
      date: new Date().toISOString().split('T')[0],
      status: 'Open'
    };
    setFeedback((prev) => [newFb, ...prev]);
  };

  const loginAsDemoCustomer = () => {
    setCurrentUser({
      id: 'usr_customer_1',
      name: 'Omar Developer',
      email: 'codeprintomar@gmail.com',
      role: 'customer',
      joinedDate: 'Nov 2026'
    });
  };

  const loginAsAdmin = () => {
    setCurrentUser({
      id: 'usr_admin_root',
      name: 'CodePrint Lead',
      email: 'admin@codeprint.app',
      role: 'admin',
      joinedDate: 'Jan 2026'
    });
  };

  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <AppContext.Provider
      value={{
        language,
        direction,
        setLanguage,
        theme,
        toggleTheme,
        t,
        currentView,
        setCurrentView,
        products,
        updateProduct,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        orders,
        placeOrder,
        updateOrderStatus,
        quotes,
        submitQuote,
        feedback,
        submitFeedback,
        currentUser,
        setCurrentUser,
        loginAsDemoCustomer,
        loginAsAdmin,
        logout,
        selectedProduct,
        setSelectedProduct,
        selectedProject,
        setSelectedProject,
        selectedArticle,
        setSelectedArticle,
        isSearchModalOpen,
        setIsSearchModalOpen,
        isQuoteModalOpen,
        setIsQuoteModalOpen,
        isBugReportModalOpen,
        setIsBugReportModalOpen
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
