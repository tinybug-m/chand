import { Zap } from "lucide-react";
import Button from "./components/atoms/Button";

export default function Home() {

  return (
    <div className="min-h-screen container m-auto">
      <div className="flex w-full">
        <div className="flex flex-1 justify-start">
          <Button layout="icon" variant="glow">
            <Zap className="text-cyan-400 fill-cyan-400/20" />
          </Button>
        </div>
        <div className="flex-1">2</div>
      </div>
    </div>
  );
}
