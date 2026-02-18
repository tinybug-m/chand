import { Redis } from '@upstash/redis';
import { NextResponse } from 'next/server';
import { ASSETS_TO_UPDATE } from '@/lib/constants';

const redis = Redis.fromEnv();

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const key = searchParams.get('key');

    if (key !== process.env.CRON_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const updatedGraphs = await Promise.all(
      ASSETS_TO_UPDATE.map(async (asset) => {
        const url = `https://api.tgju.org/v1/market/indicator/summary-table-data/${asset.slug}?start=0&length=30`;
        const res = await fetch(url, { cache: 'no-store' });
        const result = await res.json();

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

        return {
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
        };
      }),
    );

    // 3. THE SWAP: Save to Redis instead of fs.writeFile
    // We store it under the key 'market_data'
    await redis.set('market_data', updatedGraphs);

    return NextResponse.json({
      success: true,
      count: updatedGraphs.length,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Update Error:', error);
    return NextResponse.json(
      { error: 'Failed to update assets' },
      { status: 500 },
    );
  }
}
