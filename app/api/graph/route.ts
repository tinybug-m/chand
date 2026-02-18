// app/api/graph/route.ts
import { MarketInstrument } from '@/app/types/markets';
import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'lib', 'db.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
 
    const rawData = JSON.parse(fileContents);

    const response = rawData.graphs as MarketInstrument[];

    return NextResponse.json(response);
  } catch (error) {
    console.error('Fetch Error:', error);
    return NextResponse.json({ error: 'Failed to load data' }, { status: 500 });
  }
}
