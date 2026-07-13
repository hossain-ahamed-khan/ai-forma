import { ChevronLeft, Smartphone } from "lucide-react";
import PhoneFrame from "./PhoneFrame";
import { FiUser } from "react-icons/fi";


const muscleGroups = [
  { label: "Chest", value: 76 },
  { label: "Back", value: 71 },
  { label: "Shoulders", value: 68 },
  { label: "Arms", value: 72 },
];

const recommendations = [
  { number: 1, title: "Nutrition", description: "Optimize deficit, raise protein" },
  { number: 2, title: "Training", description: "Add 2x lower body sessions" },
  { number: 3, title: "Cardio", description: "2-3x low intensity weekly" },
];

export default function Cockpit() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-xs font-bold tracking-widest text-[#005C53] mb-3">
          SEE IT IN ACTION
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
          Your Complete physique Intelligence Hub.
        </h2>
        <p className="text-slate-600 max-w-xl mx-auto mb-12">
          Every screen is designed to keep you focused, motivated, and moving forward —
          from daily momentum to deep AI breakdowns.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {/* Symmetry Score phone */}
          <PhoneFrame>
            <div className="relative h-full">
              {/* soft color blobs behind the glass cards */}
              <div className="absolute -top-4 -right-8 w-32 h-32 bg-teal-200/50 rounded-full blur-2xl" />
              <div className="absolute top-40 -left-10 w-28 h-28 bg-cyan-100/60 rounded-full blur-2xl" />

              <div className="relative flex items-center gap-3 mb-6">
                <button className="w-7 h-7 rounded-full bg-white/70 backdrop-blur-md border border-white/80 shadow-sm flex items-center justify-center">
                  <ChevronLeft className="w-4 h-4 text-slate-500" />
                </button>
                <p className="font-bold text-[15px] text-slate-900">Symmetry Score</p>
              </div>

              <p className="text-[10px] text-center tracking-wide text-slate-400 font-medium mb-6">
                LEFT VS RIGHT BALANCE
              </p>

              <div className="relative w-32 h-32 mx-auto rounded-full bg-white/70 backdrop-blur-xl border-2 border-teal-600/80 shadow-[0_8px_24px_rgba(13,148,136,0.18)] flex flex-col items-center justify-center mb-6">
                <span className="text-4xl font-extrabold text-slate-900">78</span>
                <span className="text-[11px] text-slate-400 font-medium">/100</span>
              </div>

              <p className="text-center font-bold text-base text-slate-900 mb-6">
                Good Symmetry
              </p>

              <div className="relative space-y-4 bg-white/50 backdrop-blur-xl border border-white/70 rounded-2xl p-4 shadow-[0_4px_20px_rgba(15,23,42,0.06)]">
                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-slate-600 font-medium">Upper Body</span>
                    <span className="text-slate-900 font-semibold">80%</span>
                  </div>
                  <div className="h-1.5 bg-slate-200/70 rounded-full overflow-hidden">
                    <div className="h-full w-4/5 bg-gradient-to-r from-teal-600 to-emerald-500 rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-slate-600 font-medium">Lower Body</span>
                    <span className="text-slate-900 font-semibold">76%</span>
                  </div>
                  <div className="h-1.5 bg-slate-200/70 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-teal-600 to-emerald-500 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </PhoneFrame>

          {/* Muscle Development phone */}
          <PhoneFrame>
            <div className="relative h-full">
              <div className="absolute -top-6 -left-8 w-32 h-32 bg-emerald-100/60 rounded-full blur-2xl" />
              <div className="absolute bottom-20 -right-10 w-28 h-28 bg-teal-200/50 rounded-full blur-2xl" />

              <div className="relative flex items-center gap-3 mb-6">
                <button className="w-7 h-7 rounded-full bg-white/70 backdrop-blur-md border border-white/80 shadow-sm flex items-center justify-center">
                  <ChevronLeft className="w-4 h-4 text-slate-500" />
                </button>
                <p className="font-bold text-[15px] text-slate-900">Muscle Development</p>
              </div>

              <p className="text-[10px] tracking-wide text-slate-400 font-medium mb-4">
                MUSCLE BALANCE & GROWTH
              </p>

              <div className="relative w-full h-32 mx-auto mb-6 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/70 shadow-[0_4px_20px_rgba(15,23,42,0.06)] flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-teal-50 border border-teal-100 flex justify-center items-center">
                  <FiUser size={30} />
                </div>
              </div>

              <div className="relative space-y-4 bg-white/50 backdrop-blur-xl border border-white/70 rounded-2xl p-4 shadow-[0_4px_20px_rgba(15,23,42,0.06)]">
                {muscleGroups.map((m) => (
                  <div key={m.label}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-slate-600 font-medium">{m.label}</span>
                      <span className="text-slate-900 font-semibold">{m.value}%</span>
                    </div>
                    <div className="h-1.5 bg-slate-200/70 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-teal-600 to-emerald-500 rounded-full"
                        style={{ width: `${m.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </PhoneFrame>

          {/* Recommendations phone */}
          <PhoneFrame>
            <div className="relative h-full">
              <div className="absolute top-24 -right-10 w-32 h-32 bg-cyan-100/60 rounded-full blur-2xl" />
              <div className="absolute bottom-10 -left-10 w-28 h-28 bg-teal-200/50 rounded-full blur-2xl" />

              <div className="relative flex items-center gap-3 mb-6">
                <button className="w-7 h-7 rounded-full bg-white/70 backdrop-blur-md border border-white/80 shadow-sm flex items-center justify-center">
                  <ChevronLeft className="w-4 h-4 text-slate-500" />
                </button>
                <p className="font-bold text-[15px] text-slate-900">Recommendations</p>
              </div>

              <p className="text-[10px] tracking-wide text-slate-400 font-medium mb-4">
                AI SUGGESTED FOCUS
              </p>

              <div className="relative space-y-3 text-start">
                {recommendations.map((r) => (
                  <div
                    key={r.number}
                    className="flex gap-3 items-start bg-white/60 backdrop-blur-xl border border-white/70 rounded-2xl p-4 shadow-[0_4px_20px_rgba(15,23,42,0.06)] hover:bg-white/80 transition-colors"
                  >
                    <span className="w-6 h-6 rounded-full bg-teal-50 border border-teal-200 text-[11px] font-semibold text-teal-700 flex items-center justify-center shrink-0">
                      {r.number}
                    </span>
                    <div>
                      <p className="font-semibold text-sm text-slate-900">{r.title}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{r.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </PhoneFrame>
        </div>

        <a
          href="#get-app"
          id="get-app"
          className="inline-flex items-center gap-2 bg-slate-900 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-slate-800 transition-colors mt-12"
        >
          <Smartphone className="w-4 h-4" />
          Get app
        </a>
      </div>
    </section >
  );
}