import { Smartphone, Apple, PlayCircle } from "lucide-react";
import Image from "next/image";

export default function LaunchApps() {
  return (
    <section className="bg-slate-50 py-20 text-center">
      <div className="max-w-xl mx-auto px-6">
        <span className="inline-flex items-center gap-2 text-xs font-bold text-teal-700 bg-[#005C531A] rounded-full px-3 py-1.5 mb-6">
          <Smartphone className="w-3.5 h-3.5" />
          COMING SOON
        </span>

        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
          Available Soon on iOS & Android
        </h2>
        <p className="text-slate-600 mb-8">
          AiFORMA arrives on the App Store and Google Play early next year.
          Founding members get first access — join the waitlist to be notified
          the moment it drops.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2 bg-black text-white rounded-xl px-4 py-2.5">
            <div>
              <Image
                src="/app-store-logo.png"
                alt="AiFORMA"
                width={24}
                height={24}
                priority
              />
            </div>
            <div className="text-left leading-tight">
              <p className="text-[9px] text-slate-300">Coming soon on</p>
              <p className="text-sm font-semibold">App Store</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-black text-white rounded-xl px-4 py-2.5">
            <div>
              <Image
                src="/google-play-icon.png"
                alt="AiFORMA"
                width={20}
                height={20}
                priority
              />
            </div>
            <div className="text-left leading-tight">
              <p className="text-[9px] text-slate-300">Coming soon on</p>
              <p className="text-sm font-semibold">Google Play</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
