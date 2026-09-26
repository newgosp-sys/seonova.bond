export type PageId = 'home' | 'services' | 'case-studies' | 'free-audit-widget';

export type ModalType =
  | null
  | { type: 'client-portal' }
  | { type: 'consultation'; planName?: string }
  | { type: 'schema-generator' }
  | { type: 'cwv-benchmark' }
  | { type: 'algo-monitor' };

export interface NavigationProps {
  currentPage: PageId;
  onNavigate: (page: PageId, anchor?: string) => void;
  onOpenModal: (modal: ModalType) => void;
}
