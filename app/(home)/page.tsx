import Link from 'next/link';
import { cn } from '@/lib/cn';
import {
  BatteryChargingIcon,
} from 'lucide-react';
import Banner from '@/components/Banner';
import Features from '@/components/features';
import Subscribe from "@/components/subscribe"

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-start text-left">
      
      {/* <Banner />
      <Features /> */}
      <Subscribe />
    </main>
  );
}
