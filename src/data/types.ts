export type Language = 'en' | 'ar';
export type Theme = 'dark' | 'light';

export type ProductPricingType = 'free' | 'paid_coming_soon' | 'paid_inquiry';

export interface ProductItem {
  id: string;
  name: string;
  nameAr: string;
  tagline: string;
  taglineAr: string;
  category: 'Finance' | 'Education' | 'Personal Organization' | 'Music & Productivity' | 'Productivity' | 'Games' | 'Developer Tools' | 'AI & Productivity';
  pricing: ProductPricingType;
  priceLabel: string;
  priceLabelAr: string;
  status: 'Available' | 'In Development';
  statusAr: string;
  problemSolved: string;
  problemSolvedAr: string;
  description: string;
  descriptionAr: string;
  features: string[];
  featuresAr: string[];
  platform: string;
  requirements: string;
  version: string;
  githubUrl?: string;
  isVerifiedRepo: boolean;
  image: string;
  isFreeTool: boolean;
  isPaidProduct: boolean;
  inStore: boolean;
  downloadNote?: string;
  downloadNoteAr?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  titleAr: string;
  shortDesc: string;
  shortDescAr: string;
  fullDesc: string;
  fullDescAr: string;
  deliverables: string[];
  deliverablesAr: string[];
  typicalTimeline: string;
  typicalTimelineAr: string;
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  titleAr: string;
  subtitle: string;
  subtitleAr: string;
  category: string;
  categoryAr: string;
  description: string;
  descriptionAr: string;
  techStack: string[];
  status: 'Completed' | 'Active' | 'In Development';
  githubUrl?: string;
  liveUrl?: string;
  isCaseStudy?: boolean;
  caseStudyDetails?: {
    clientSummary: string;
    clientSummaryAr: string;
    challenge: string;
    challengeAr: string;
    solution: string;
    solutionAr: string;
    architecture: string[];
    architectureAr: string[];
    outcomes: string[];
    outcomesAr: string[];
  };
  image: string;
}

export interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  titleAr: string;
  summary: string;
  summaryAr: string;
  category: 'Programming Concepts' | 'AI & Tech' | 'Software Architecture' | 'Developer Guides';
  categoryAr: string;
  readTime: string;
  readTimeAr: string;
  date: string;
  tags: string[];
  relatedProductId?: string;
  content: string[];
  contentAr: string[];
}

export interface CartItem {
  product: ProductItem;
  quantity: number;
}

export type OrderStatus = 'Pending' | 'Under Review' | 'Confirmed' | 'Completed' | 'Cancelled';

export interface Order {
  id: string;
  date: string;
  customerName: string;
  customerEmail: string;
  customerPhone?: string;
  items: {
    productId: string;
    productName: string;
    priceLabel: string;
    quantity: number;
  }[];
  totalLabel: string;
  status: OrderStatus;
  paymentMethod: 'Manual Bank Transfer' | 'InstaPay / Mobile Wallet' | 'Inquiry / Pre-order';
  paymentReference?: string;
  notes?: string;
  downloadAccessGranted: boolean;
}

export interface ProjectQuoteRequest {
  id: string;
  date: string;
  name: string;
  email: string;
  category: string;
  budgetRange: string;
  description: string;
  requiredFeatures: string;
  contactPreference: 'Email' | 'WhatsApp' | 'Phone';
  status: 'New' | 'Reviewed' | 'Contacted';
}

export interface FeedbackSubmission {
  id: string;
  date: string;
  type: 'Bug Report' | 'Feature Request' | 'Product Feedback' | 'General Support';
  productName?: string;
  name: string;
  email: string;
  message: string;
  status: 'Open' | 'Resolved';
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: 'customer' | 'admin';
  joinedDate: string;
}
