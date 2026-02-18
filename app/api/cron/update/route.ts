import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';
import { ASSETS_TO_UPDATE } from '@/lib/constants';

export async function GET() {
  try {
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

    const filePath = path.join(process.cwd(), 'lib', 'db.json');
    await fs.writeFile(
      filePath,
      JSON.stringify({ graphs: updatedGraphs }, null, 2),
    );

    return NextResponse.json({ success: true, count: updatedGraphs.length });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to update assets' },
      { status: 500 },
    );
  }
}
