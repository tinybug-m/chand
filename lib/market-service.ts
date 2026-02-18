import { MarketInstrument, PricePoint } from '@/app/types/markets';

export const parseTgjuResponse = (result: any): Partial<MarketInstrument> => {
  const latestRow = result.data[0];

  const currentPrice = Math.floor(
    parseInt(latestRow[3].replace(/,/g, '')) / 10,
  );

  const percentageHtml = latestRow[5];
  const percentageMatch = percentageHtml.match(/>(.*?)%/);
  const dailyChange = percentageMatch ? parseFloat(percentageMatch[1]) : 0;

  const priceHistory: PricePoint[] = result.data
    .map((row: any) => ({
      value: parseInt(row[0].replace(/,/g, '')),
    }))
    .reverse();

  return { price: currentPrice, change: dailyChange, data: priceHistory };
};
