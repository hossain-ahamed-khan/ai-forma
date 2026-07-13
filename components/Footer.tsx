export default function Footer() {
  return (
    <footer className="bg-slate-950 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm font-extrabold tracking-wide">
          <span className="text-teal-400">Ai</span>
          <span className="text-white">FORMA</span>
        </div>

        <div className="flex items-center gap-6 text-sm text-slate-400">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>

        <p className="text-sm text-slate-500">
          © 2026 AiFORMA. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
