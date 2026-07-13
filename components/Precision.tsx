const stats = [
  { label: "Body Composition", value: "18.2%", sub: "Fat Estimate" },
  { label: "Symmetry Score", value: "78/100", sub: "L/R Balance" },
  { label: "Posture", value: "Good", sub: "Alignment" },
  { label: "Muscle Growth", value: "+2.4%", sub: "Deltoids" },
];

export default function Precision() {
  return (
    <section id="ai-analysis" className="bg-[#0B1116] py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-xs font-semibold tracking-widest text-teal-400 mb-3">
          Powered by intelligence Vision
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-10">
          Precision in every pixel.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-[#FFFFFF1A] rounded-2xl p-5 text-left"
            >
              <p className="text-[11px] text-slate-400 mb-2">{s.label}</p>
              <p className="text-xl font-extrabold text-white">{s.value}</p>
              <p className="text-[11px] text-teal-400 mt-1">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
