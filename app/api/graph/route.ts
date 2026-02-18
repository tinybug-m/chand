import { Redis } from '@upstash/redis';
import { NextResponse } from 'next/server';

const redis = Redis.fromEnv();

export async function GET() {
  const data = await redis.get('market_data');
  return NextResponse.json(data || []);
}
