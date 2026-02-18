import { Zap } from 'lucide-react';
import Button from './components/atoms/Button';
import Typography from './components/atoms/Typography';
import Main from './components/layout/Main';
import Cards from './components/organisms/Cards';

export default function Home() {
  return (
    <Main>
      <div className="flex w-full">
        <div className="flex flex-col gap-2 flex-1 justify-start">
          <div className="flex items-center gap-2">
            <Button layout="icon" variant="glow">
              <Zap className="text-cyan-400 fill-cyan-400/20" />
            </Button>
            <Typography
              variant="caption"
              className="tracking-[0.4em] text-cyan-400"
            >
              Enterprise Market Node
            </Typography>
          </div>
          <Typography variant="h1">
            chand
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              ?
            </span>
          </Typography>
          <Typography>
            High-precision asset tracking for the Iranian market. Ultra-low
            latency data synchronization.
          </Typography>
        </div>
        <div className="hidden md:block flex-1" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <Cards />
      </div>
    </Main>
  );
}
