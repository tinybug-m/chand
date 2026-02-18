export interface AssetConfig {
  id: string;
  slug: string;
  name: string;
  type: 'currency' | 'metal';
}

export const ASSETS_TO_UPDATE: AssetConfig[] = [
  {
    id: 'usd-irt',
    slug: 'price_dollar_rl',
    name: 'US Dollar',
    type: 'currency',
  },
  { id: 'gold-18k', slug: 'geram18', name: 'Gold 18k', type: 'metal' },
  {
    id: 'ayar-fund',
    slug: 'ime_fund_ayar',
    name: 'Ayar Gold Fund',
    type: 'metal',
  },
  { id: 'silver-999', slug: 'silver_999', name: 'Silver 999', type: 'metal' },
  { id: 'eur-irt', slug: 'price_eur', name: 'Euro', type: 'currency' },
  { id: 'gbp-irt', slug: 'price_gbp', name: 'British Pound', type: 'currency' },
];
