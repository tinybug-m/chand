import { Share2 } from 'lucide-react';
import Typography from '../atoms/Typography';
import Button from '../atoms/Button';
import { Graph } from './Graph';
import Dot from '../atoms/Dot';
import TrendBadge from '../atoms/TrendBadge';

type Props = {};

const test =
  '[{"value":90486.9396653936},{"value":89156.52630211502},{"value":90242.19070874568},{"value":88574.76628068485},{"value":88587.30312971328},{"value":88567.30605114791},{"value":88903.24358658379},{"value":90363.63240102805},{"value":88859.10414241352},{"value":89222.90650006034},{"value":89536.95105553872},{"value":89488.72057230968},{"value":88547.08456638778},{"value":88950.87772723798},{"value":88891.3779385919},{"value":89154.20087433518},{"value":90325.75548448264},{"value":89776.80232504143},{"value":88936.49851997569},{"value":89697.3161827211}]';
const change = 1.24;

const Card = (props: Props) => {
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
              currency
            </Typography>
          </div>

          <Typography variant="h3">US Dollar</Typography>
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
        <Typography variant="h2">89,450</Typography>

        <Typography
          variant="caption"
          className="text-[11px] text-white/30 font-mono tracking-[0.2em]"
        >
          IRT
        </Typography>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <TrendBadge percentChange={1.24} />

        <Typography className="text-[10px] text-white/20 font-medium">
          24H PERFORMANCE
        </Typography>
      </div>
      <Graph
        data={JSON.parse(test)}
        color={`var(--brand-${change >= 0 ? 'green' : 'red'})`}
      />
    </div>
  );
};

export default Card;
