import { ReactNode } from "react";

export default function PhoneFrame({
  children,
  dark = false,
  className = "",
}: {
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative w-[260px] rounded-[2.5rem] border-[6px] ${
        dark ? "border-black bg-black" : "border-black bg-white"
      } shadow-xl overflow-hidden ${className}`}
    >
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-b-2xl z-10" />
      <div className={`pt-8 pb-5 px-4 min-h-[420px] ${dark ? "bg-black text-white" : "bg-white text-slate-900"}`}>
        {children}
      </div>
    </div>
  );
}
