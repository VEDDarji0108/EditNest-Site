import { create } from 'zustand';
import { apiUrl } from '../config/api';

const fallbackPortfolio = [
  {
    id: 'f1',
    title: 'Chromatic Flight Reel',
    imageUrl: 'https://via.placeholder.com/600x760.png?text=Chromatic+Flight',
    category: 'Video Editing',
  },
  {
    id: 'f2',
    title: 'Aurora Brand Suite',
    imageUrl: 'https://via.placeholder.com/600x640.png?text=Aurora+Brand',
    category: 'Graphic Design',
  },
  {
    id: 'f3',
    title: 'Splash Motion Idents',
    imageUrl: 'https://via.placeholder.com/600x680.png?text=Motion+Idents',
    category: 'Animation',
  },
];

export const useSiteStore = create((set, get) => ({
  mobileNavOpen: false,
  toggleMobileNav: () => set((state) => ({ mobileNavOpen: !state.mobileNavOpen })),
  closeMobileNav: () => set({ mobileNavOpen: false }),
  portfolio: fallbackPortfolio,
  loadingPortfolio: false,
  portfolioError: null,
  async fetchPortfolio() {
    if (get().loadingPortfolio) return;

    set({ loadingPortfolio: true, portfolioError: null });

    try {
      const response = await fetch(apiUrl('/api/portfolio'));
      if (!response.ok) {
        throw new Error('Failed to fetch portfolio');
      }
      const data = await response.json();
      set({
        portfolio: data.items ?? data,
        loadingPortfolio: false,
      });
    } catch (error) {
      console.warn('Portfolio fetch failed, using fallback data', error);
      set({
        portfolio: get().portfolio.length ? get().portfolio : fallbackPortfolio,
        portfolioError: 'Unable to load the live gallery right now.',
        loadingPortfolio: false,
      });
    }
  },
}));

