import Image from "next/image";

export default function Mission() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="flex justify-between min-h-[480px]">
          <div className="flex justify-center md:justify-end">
            <div className="relative w-[323px] h-[614px] rounded-[3rem] border-8 border-slate-950 bg-slate-950 shadow-2xl overflow-hidden">
              <Image
                src="/mf-6.png"
                alt="AiFORMA"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
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
