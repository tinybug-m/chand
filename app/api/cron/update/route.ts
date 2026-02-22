import { Redis } from '@upstash/redis';
import { NextResponse } from 'next/server';
import { ASSETS_TO_UPDATE } from '@/lib/constants';

const redis = Redis.fromEnv();

export async function GET(req: Request) {
  // console.log('Starting Redis Sync...');

  try {
    const updatedGraphs = [];

    for (const asset of ASSETS_TO_UPDATE) {
      try {
        const url = `https://api.tgju.org/v1/market/indicator/summary-table-data/${asset.slug}?start=0&length=30`;

        console.log(`📡 Fetching ${asset.name}...`);

        const res = await fetch(url, {
          cache: 'no-store',
          signal: AbortSignal.timeout(10000),
        });

        if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);

        const result = await res.json();
        if (!result.data || result.data.length === 0) continue;

        const latestRow = result.data[0];

        const priceInToman = Math.floor(
          parseInt(latestRow[0].replace(/,/g, '')) / 10,
        );

        const percentageMatch = latestRow[5].match(/>(.*?)%/);
        const dailyChange = percentageMatch
          ? parseFloat(percentageMatch[1])
          : 0;

        const history = result.data
          .map((row: any) => ({
            value: Math.floor(parseInt(row[0].replace(/,/g, '')) / 10),
          }))
          .reverse();

        updatedGraphs.push({
          id: asset.id,
          name: asset.name,
          type:
            asset.id.includes('gold') ||
            asset.id.includes('silver') ||
            asset.id.includes('ayar')
              ? 'metal'
              : 'currency',
          price: priceInToman,
          change: dailyChange,
          data: history,
        });

        console.log(`✅ Processed ${asset.name}`);
      } catch (assetError: any) {
        console.error(`❌ Failed asset ${asset.slug}:`, assetError.message);
      }
    }

    if (updatedGraphs.length > 0) {
      await redis.set('market_data', updatedGraphs);
      console.log(`💾 Saved ${updatedGraphs.length} assets to Redis.`);
    }

    return NextResponse.json({
      success: true,
      count: updatedGraphs.length,
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error('Global Update Error:', error);
    return NextResponse.json(
      { error: 'Failed to update assets', details: error.message },
      { status: 500 },
    );
  }
}
