import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="shrink-0">
          <Image
            src="/ai-forma-logo-2.png"
            alt="AiFORMA"
            width={160}
            height={42}
            priority
          />
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
