const stats = [
  { value: "650+", label: "Founding Members" },
  { value: "40+", label: "AI Measurements Per Scan" },
  { value: "4", label: "Core Intelligence Engines" },
  { value: "100%", label: "Private & encrypted" },
];

export default function StatsBar() {
  return (
    <section className="border-t border-slate-100 py-14">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="text-4xl font-bold text-slate-900">{s.value}</p>
            <p className="text-xs text-slate-500 mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
