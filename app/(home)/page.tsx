import Link from 'next/link';
import { cn } from '@/lib/cn';
import {
  BatteryChargingIcon,
} from 'lucide-react';
import Banner from "@/components/Banner";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-start text-left">
      <Banner />
       <div className="flex flex-col border-b border-r md:flex-row *:border-l *:border-t">
        <div className="group flex flex-col min-w-0 flex-1 pt-8 **:transition-colors">
          <h2 className="text-3xl text-center font-extrabold font-mono uppercase text-fd-muted-foreground mb-4 lg:text-4xl group-hover:text-blue-500">
            Crack The Interview
          </h2>
          <p className="text-center font-mono text-xs text-fd-foreground/60 mb-8 group-hover:text-blue-500/80">
            Sharp. Confident. Ready — just like your future.
          </p>
          <div className="h-[200px] overflow-hidden p-8 bg-gradient-to-b from-fd-primary/10 group-hover:from-blue-500/10">
            <div className="mx-auto bg-radial-[circle_at_0%_100%] from-60% from-transparent to-fd-primary size-[500px] rounded-full group-hover:from-blue-500 group-hover:to-blue-600/10" />
          </div>
        </div>
       
      </div>
    </main>
  );
}
