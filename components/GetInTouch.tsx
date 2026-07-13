export default function GetInTouch() {
  return (
    <section className="py-20 text-center">
      <div className="max-w-xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
          Questions?
        </h2>
        <p className="text-slate-600 mb-8">
          Have questions about the early access program or the app? We'd love to hear from you.
        </p>
        <a
          href="mailto:support@aiforma.app"
          className="inline-block bg-slate-900 text-white font-semibold px-6 py-3 rounded-xl hover:bg-slate-800 transition-colors"
        >
          Contact Support
        </a>
      </div>
    </section>
  );
}
