"use client"

import { ResponsiveContainer, AreaChart, Area, YAxis } from 'recharts';

interface GraphProps {
  data: { value: number }[];
  color: string;
}

export const Graph: React.FC<GraphProps> = ({ data, color }) => {
  const gradientId = `gradient-${color.replace(/[^a-zA-Z]/g, '')}`;
  
  return (
    <div className="h-20 w-full mt-6 relative group">
      <div 
        className="absolute inset-0 opacity-10 blur-2xl transition-opacity group-hover:opacity-20 pointer-events-none" 
        style={{ backgroundColor: color }}
      />
      
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity={0.4}/>
              <stop offset="100%" stopColor={color} stopOpacity={0}/>
            </linearGradient>
          </defs>
          <YAxis hide domain={['dataMin - 100', 'dataMax + 100']} />
          <Area
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={2.5}
            fillOpacity={1}
            fill={`url(#${gradientId})`}
            animationDuration={2000}
            isAnimationActive={true}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};