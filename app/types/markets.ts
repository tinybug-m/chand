export interface PricePoint {
  value: number;
}

export interface MarketInstrument {
  id: string;
  name: string;
  type: 'metal' | 'currency';
  price: number;
  change: number;
  data: PricePoint[];
}
