import { Share2 } from 'lucide-react';
import Typography from '../atoms/Typography';
import Button from '../atoms/Button';
import { Graph } from './Graph';
import Dot from '../atoms/Dot';
import TrendBadge from '../atoms/TrendBadge';
import { MarketInstrument } from '@/app/types/markets';

const Card = (props: MarketInstrument) => {
  const { data, price, change, name, type } = props;
  return (
    <div
      className={
        'relative border-white/30 border-2 p-7 rounded-4xl group transition-all duration-500'
      }
    >
      <div className="flex justify-between items-center  mb-8">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-1.5">
            <Dot variant="green" />

            <Typography
              variant="caption"
              className="tracking-[0.25em] text-white/30"
            >
              {type}
            </Typography>
          </div>

          <Typography variant="h3">{name}</Typography>
        </div>

        <div className="flex">
          <Button
            className="w-8 h-8 border-2 rounded-xl  border-white/10"
            layout="icon"
          >
            <Share2 />
          </Button>
        </div>
      </div>
      <div className="flex items-baseline gap-2">
        <Typography variant="h2">{price.toLocaleString()}</Typography>

        <Typography
          variant="caption"
          className="text-[11px] text-white/30 font-mono tracking-[0.2em]"
        >
          IRT
        </Typography>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <TrendBadge percentChange={change} />

        <Typography className="text-[10px] text-white/20 font-medium">
          24H PERFORMANCE
        </Typography>
      </div>
      <Graph
        data={data}
        color={`var(--brand-${change >= 0 ? 'green' : 'red'})`}
      />
    </div>
  );
};

export default Card;
