import { Camera, Sparkles, Target } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Weekly AI Scans",
    description:
      "Guided body scans designed for accurate week-to-week progress tracking.",
  },
  {
    icon: Sparkles,
    title: "AI physique Intelligence",
    description:
      "Analyzes body fat, muscle development, posture, symmetry and physique changes with advanced intelligence vision.",
  },
  {
    icon: Target,
    title: "Momentum Score",
    description:
      "A proprietary performance score that combines progress, consistency and habits into one simple number.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-slate-50 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
          Beyond the scale.
        </h2>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          Your body is more than a number. AiFORMA measures the data scales can’t see. AiFORMA analyzes what actually matters: your visual progress and body composition.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-2xl p-6 text-left shadow-sm"
            >
              <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center mb-4">
                <f.icon className="w-5 h-5 text-teal-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-sm text-slate-500">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
