import { TrendingDown, TrendingUp } from 'lucide-react';

type TrendBadgeProps = {
  percentChange: number;
};

const TrendBadge = ({ percentChange }: TrendBadgeProps) => {
  const isPositive = percentChange >= 0;

  return (
    <div
      className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-tight 
      ${isPositive ? 'bg-brand-green/10 text-brand-green' : 'bg-brand-red/10 text-brand-red'}`}
    >
      {isPositive ? (
        <TrendingUp width={10} height={10} />
      ) : (
        <TrendingDown width={10} height={10} />
      )}
      {isPositive && '+'}
      {percentChange}%
    </div>
  );
};

export default TrendBadge;
