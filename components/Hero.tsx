import { Home, Clock, Zap, Camera, User, Bell, Activity } from "lucide-react";
import PhoneFrame from "./PhoneFrame";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 md:pt-16 pb-12 md:pb-16 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
      <div className="text-center md:text-left">
        <span className="inline-flex items-center gap-2 text-xs font-bold text-[#005C53] bg-slate-200 rounded-full px-3 py-1.5 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#005C53]" />
          NOW IN CLOSED BETA
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] md:leading-[1.05] tracking-tight text-slate-900">
          Your Body&apos;s
          <br />
          <span className="bg-gradient-to-r from-[#00A896] to-[#005C53] bg-clip-text text-transparent">
            Ai Architect
          </span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-lg mx-auto md:mx-0">
          Stop guessing. Start measuring. AiFORMA uses advanced AI body intelligence to analyze your physique, track real progress, and tell you exactly what to improve every week.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-4">
          <a
            href="#waitlist"
            className="bg-[#005C53] text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-teal-800 transition-colors"
          >
            Get Early Access →
          </a>
          <a
            href="#get-app"
            className="flex items-center gap-2 border border-slate-200 font-semibold px-6 py-3.5 rounded-xl text-slate-900 hover:bg-slate-50 transition-colors"
          >
            <div>
              <Image
                src="/get-app.png"
                alt="AiFORMA"
                width={20}
                height={40}
                priority
              />
            </div>
            Get App
          </a>
        </div>
      </div >

      <div className="flex justify-center md:justify-end relative mt-4 md:mt-0">
        <PhoneFrame>
          <div className="relative h-full">
            {/* soft color blobs behind the glass panels */}
            <div className="absolute -top-6 -right-8 w-32 h-32 bg-teal-100/60 rounded-full blur-2xl" />
            <div className="absolute top-56 -left-10 w-28 h-28 bg-cyan-100/50 rounded-full blur-2xl" />

            <div className="relative flex items-start justify-between mb-6">
              <div className="text-xs font-extrabold tracking-wide text-slate-900">
                <span className="text-teal-500">Ai</span>FORMA
              </div>
              <button className="w-7 h-7 rounded-full bg-white/70 backdrop-blur-md border border-white/80 shadow-sm flex items-center justify-center">
                <Bell className="w-3.5 h-3.5 text-slate-500" />
              </button>
            </div>

            <p className="relative text-lg font-bold text-slate-900">
              Good morning, Josh 👋
            </p>
            <p className="relative text-xs text-slate-500 mb-4">
              Your transformation is progressing.
            </p>

            {/* Momentum card - dark glass */}
            <div className="relative rounded-2xl p-5 mb-4 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
              <div className="absolute -top-8 -right-6 w-28 h-28 bg-teal-400/25 rounded-full blur-3xl" />
              <div className="absolute inset-0 backdrop-blur-2xl bg-white/[0.04] border border-white/10 rounded-2xl" />

              <div className="relative">
                <p className="text-[10px] uppercase tracking-wide text-slate-400 mb-1">
                  Current Momentum
                </p>
                <p className="text-[10px] text-teal-400 mb-3">+12 pts this week</p>
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <span className="text-xl font-bold text-white border-2 border-teal-400/80 shadow-[0_0_20px_rgba(45,212,191,0.3)] rounded-full p-4">82</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-white">Strong Momentum</p>
                    <p className="text-[11px] text-slate-400">
                      You&apos;re building something great. Stay consistent.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Weight / trend - light glass */}
            <div className="relative grid grid-cols-2 gap-3 mb-6">
              <div className="bg-white/60 backdrop-blur-xl border border-white/70 rounded-xl p-3 shadow-[0_4px_20px_rgba(15,23,42,0.06)]">
                <p className="text-[10px] text-slate-500">Today&apos;s Weight</p>
                <p className="font-bold text-sm text-slate-900">87.4 kg</p>
                <p className="text-[10px] text-teal-600">↘ -0.6 kg</p>
              </div>
              <div className="bg-white/60 backdrop-blur-xl border border-white/70 rounded-xl p-3 shadow-[0_4px_20px_rgba(15,23,42,0.06)]">
                <p className="text-[10px] text-slate-500">Weekly Trend</p>
                <p className="font-bold text-sm text-slate-900">-0.6 kg</p>
                <p className="text-[10px] text-teal-600">Trending down</p>
              </div>
            </div>

            {/* Bottom nav - glass bar */}
            <div className="relative flex justify-between items-center bg-white/50 backdrop-blur-xl border border-white/70 rounded-2xl px-4 py-3 shadow-[0_4px_20px_rgba(15,23,42,0.06)]">
              <div className="flex flex-col items-center gap-1">
                <Home className="w-4 h-4 text-teal-600" />
                <span className="text-[9px] font-medium text-teal-600">Home</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Clock className="w-4 h-4 text-slate-300" />
                <span className="text-[9px] text-slate-400">Timeline</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Zap className="w-4 h-4 text-slate-300" />
                <span className="text-[9px] text-slate-400">Insights</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Camera className="w-4 h-4 text-slate-300" />
                <span className="text-[9px] text-slate-400">Check-in</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <User className="w-4 h-4 text-slate-300" />
                <span className="text-[9px] text-slate-400">Profile</span>
              </div>
            </div>
          </div>
        </PhoneFrame>

        {/* Floating Body Fat badge - glass */}
        <div className="absolute top-4 right-2 sm:top-16 sm:right-0 md:-right-16 bg-white/70 backdrop-blur-xl border border-white/80 rounded-2xl shadow-[0_8px_24px_rgba(15,23,42,0.12)] px-3 py-2 sm:px-4 sm:py-3 flex items-center gap-2 sm:gap-3">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
            <Activity className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-500" />
          </div>
          <div>
            <p className="text-[9px] sm:text-[10px] text-slate-500">Body Fat</p>
            <p className="text-xs sm:text-sm font-bold text-teal-600">-1.2%</p>
          </div>
        </div>
      </div>
    </section >
  );
}