import { ChevronLeft, Smartphone } from "lucide-react";
import Image from "next/image";
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
          Your Complete Physique Intelligence Hub.
        </h2>
        <p className="text-slate-600 max-w-xl mx-auto mb-12">
          Every screen is designed to keep you focused, motivated, and moving forward —
          from daily momentum to deep AI breakdowns.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex justify-center md:justify-end mt-8">
            <div className="relative w-[324px] h-[614px] rounded-[3rem] border-8 border-slate-950 bg-slate-950 shadow-2xl overflow-hidden">
              <Image
                src="/mf-3.png"
                alt="AiFORMA"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-[324px] h-[665px] rounded-[3rem] border-8 border-slate-950 bg-slate-950 shadow-2xl overflow-hidden">
              <Image
                src="/mf-4.png"
                alt="AiFORMA"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex justify-center md:justify-end mt-8">
            <div className="relative w-[324px] h-[614px] rounded-[3rem] border-8 border-slate-950 bg-slate-950 shadow-2xl overflow-hidden">
              <Image
                src="/mf-5.png"
                alt="AiFORMA"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
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