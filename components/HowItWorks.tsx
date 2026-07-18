import { ChevronLeft, User } from "lucide-react";
import Image from "next/image";

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

        <div className="flex justify-center md:justify-end">
          <div className="relative w-[323px] h-[614px] rounded-[3rem] border-8 border-slate-950 bg-slate-950 shadow-2xl overflow-hidden">
            <Image
              src="/mf-2.png"
              alt="AiFORMA"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}