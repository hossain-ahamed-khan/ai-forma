import { ChevronLeft, User } from "lucide-react";
import PhoneFrame from "./PhoneFrame";

const steps = [
  {
    number: "01",
    title: "Complete your scan",
    description: "Take three guided photos using the built-in camera overlay.",
  },
  {
    number: "02",
    title: "AI builds your report",
    description: "Our AI analyzes dozens of body measurements in seconds.",
  },
  {
    number: "03",
    title: "Know exactly what to improve",
    description: "Receive personalized recommendations based on your latest results.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            How it works
          </h2>
          <p className="text-slate-600 max-w-lg mb-10">
            Transforming your body shouldn&apos;t be a guessing game. AiFORMA
            makes tracking progress scientific and simple.
          </p>

          <div className="space-y-8">
            {steps.map((s) => (
              <div key={s.number} className="flex gap-5">
                <span className="text-3xl font-extrabold text-slate-200">
                  {s.number}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{s.title}</h3>
                  <p className="text-sm text-slate-500">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <PhoneFrame>
            <div className="relative h-full flex flex-col">
              {/* soft color blobs so the glass has something to refract */}
              <div className="absolute -top-4 -right-8 w-32 h-32 bg-rose-100/60 rounded-full blur-2xl" />
              <div className="absolute top-44 -left-10 w-28 h-28 bg-teal-100/60 rounded-full blur-2xl" />

              <div className="relative flex items-center gap-3 mb-8">
                <button className="w-9 h-9 rounded-full bg-white/70 backdrop-blur-md border border-white/80 shadow-sm flex items-center justify-center">
                  <ChevronLeft className="w-5 h-5 text-slate-500" />
                </button>
                <p className="font-bold text-base text-slate-900">Body Composition</p>
              </div>

              <p className="text-[11px] text-center tracking-wide text-slate-400 font-medium mb-6">
                OVERVIEW
              </p>

              <div className="relative grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/60 backdrop-blur-xl border border-white/70 rounded-2xl p-6 min-h-[160px] flex flex-col items-center justify-center gap-2 shadow-[0_4px_20px_rgba(15,23,42,0.06)]">
                  <div className="w-14 h-14 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center mb-3">
                    <User className="w-7 h-7 text-rose-400" />
                  </div>
                  <p className="text-xs text-slate-500">Fat Mass</p>
                  <p className="text-sm font-bold text-slate-900">18.7 kg</p>
                </div>
                <div className="bg-white/60 backdrop-blur-xl border border-white/70 rounded-2xl p-6 min-h-[160px] flex flex-col items-center justify-center shadow-[0_4px_20px_rgba(15,23,42,0.06)]">
                  <div className="w-14 h-14 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center mb-3">
                    <User className="w-7 h-7 text-teal-500" />
                  </div>
                  <p className="text-xs text-slate-500">Lean Mass</p>
                  <p className="text-sm font-bold text-slate-900">68.7 kg</p>
                </div>
              </div>

              <div className="relative bg-white/50 backdrop-blur-xl border border-white/70 rounded-2xl p-6 flex-1 shadow-[0_4px_20px_rgba(15,23,42,0.06)]">
                <p className="text-xs text-slate-500 mb-2">
                  Body Fat Percentage
                </p>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-2xl font-bold text-slate-900">18.2%</p>
                  <span className="text-xs font-semibold bg-teal-50 text-teal-700 border border-teal-200 px-2.5 py-1 rounded-full">
                    Good
                  </span>
                </div>
                <div className="h-2 bg-slate-200/70 rounded-full overflow-hidden">
                  <div className="h-full w-1/3 bg-gradient-to-r from-teal-600 to-emerald-500 rounded-full" />
                </div>
              </div>
            </div>
          </PhoneFrame>
        </div>
      </div>
    </section>
  );
}