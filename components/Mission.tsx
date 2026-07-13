import PhoneFrame from "./PhoneFrame";
import { ChevronLeft } from "lucide-react";

export default function Mission() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="flex justify-between min-h-[480px]">
          <PhoneFrame dark>
            <div className="flex items-center gap-3 mb-8">
              <ChevronLeft className="w-4 h-4 text-slate-400" />
              <p className="font-bold text-sm">Momentum Score</p>
            </div>
            <div className="w-28 h-28 mx-auto rounded-full border-4 border-teal-400 flex flex-col items-center justify-center mb-6">
              <span className="text-3xl font-extrabold">82</span>
              <span className="text-[10px] text-slate-400">/100</span>
            </div>
            <p className="text-center font-semibold text-sm">
              Strong Momentum
            </p>
            <p className="text-center text-[11px] text-slate-400 mb-6">
              You&apos;re building something great. Stay consistent with your
              check-ins.
            </p>

            <div className="space-y-3 border-t border-slate-800 pt-4">
              <div className="flex justify-between text-[12px]">
                <span className="text-slate-400">Trend</span>
                <span className="text-teal-400">Upward ↗</span>
              </div>
              <div className="flex justify-between text-[12px]">
                <span className="text-slate-400">Consistency</span>
                <span>92%</span>
              </div>
              <div className="flex justify-between text-[12px]">
                <span className="text-slate-400">Outlook</span>
                <span className="text-teal-400">Excellent</span>
              </div>
            </div>
          </PhoneFrame>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
            Our Mission
          </h2>
          <p className="text-slate-600 mb-4">
            We believe that true physical transformation is hard to measure
            with just a scale. Weight fluctuates, but visual progress and body
            composition tell the real story.
          </p>
          <p className="text-slate-600">
            AiFORMA was built to give everyone access to elite-level physique
            analysis. By combining advanced computer vision with proven
            fitness principles, we&apos;re making it easier than ever to see
            your progress, stay motivated, and achieve your goals.
          </p>
        </div>
      </div>
    </section>
  );
}
