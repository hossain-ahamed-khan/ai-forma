import Image from "next/image";
import Link from "next/link";

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
          <Link
            href="#waitlist"
            className="bg-[#005C53] text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-teal-800 transition-colors"
          >
            Get Early Access →
          </Link>

          <Link
            href="#get-app"
            className="flex items-center gap-2 border border-slate-200 font-semibold px-6 py-3.5 rounded-xl text-slate-900 hover:bg-slate-50 transition-colors"
          >
            <Image src="/get-app.png" alt="AiFORMA" width={20} height={40} priority />
            Get App
          </Link>
        </div>
      </div >

      <div className="flex justify-center md:justify-end">
        <div className="relative w-[324px] h-[620px] rounded-[3rem] border-8 border-slate-950 bg-slate-950 shadow-2xl overflow-hidden">
          <Image
            src="/mf-1.png"
            alt="AiFORMA"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

    </section >
  );
}