"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Sparkles, Check } from "lucide-react";
import Link from "next/link";

export default function AiformaWaitlist() {
    const [email, setEmail] = useState("");
    const [joined, setJoined] = useState(false);

    const handleJoin = () => {
        // handle join logic here
        console.log("Join clicked with email:", email);
        setJoined(true);
    };

    return (
        <div
            className="min-h-screen w-full text-white flex flex-col"
            style={{
                background:
                    "radial-gradient(ellipse 900px 500px at 50% 50%, rgba(0,168,150,0.12) 0%, rgba(5,10,9,1) 85%), #050a09",
            }}
        >
            {/* Header */}
            <header className="w-10/12 mx-auto flex items-center justify-between px-8 py-6">
                <div className="text-lg font-bold tracking-widest">
                    <span style={{ color: "#00A896" }}>A</span>
                    <span style={{ color: "#00A896" }}>i</span>
                    <span className="text-white">FORMA</span>
                </div>
                <Link href="/">
                    <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-200 transition-colors">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Home
                    </button>
                </Link>
            </header>

            {/* Hero */}
            <main className="flex-1 flex flex-col items-center justify-center px-4 text-center">
                {/* Badge */}
                <div className="mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wide"
                    style={{
                        borderColor: "rgba(0,168,150,0.3)",
                        backgroundColor: "rgba(0,168,150,0.1)",
                        color: "#00A896",
                    }}>
                    <Sparkles className="h-3.5 w-3.5" />
                    AiFORMA FIRST 1000
                </div>

                {/* Headline */}
                <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">
                    Transform Smarter.
                    <br />
                    <span
                        className="bg-clip-text text-transparent"
                        style={{
                            backgroundImage: "linear-gradient(90deg, #00A896 0%, #05786D 100%)",
                        }}
                    >
                        Become a Founding Member.
                    </span>
                </h1>

                {/* Subtext */}
                <p className="mt-6 max-w-xl text-gray-400">
                    Reserve your place among the first 1,000 members
                    <br />
                    to experience AiFORMA before public launch.
                </p>

                {/* Email input / Success card */}
                {joined ? (
                    <div className="mt-10 w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-10 text-center backdrop-blur-sm">
                        <div
                            className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full"
                            style={{ backgroundColor: "rgba(0,168,150,0.15)" }}
                        >
                            <Check className="h-6 w-6" style={{ color: "#00A896" }} />
                        </div>
                        <h2 className="text-2xl font-extrabold">You're on the list!</h2>
                        <p className="mt-4 text-sm leading-relaxed text-gray-400">
                            Welcome to the AiFORMA First 1000. Keep an eye on
                            <br />
                            your inbox—we'll send exclusive updates, early access
                            <br />
                            and launch announcements before anyone else.
                        </p>
                    </div>
                ) : (
                    <div className="mt-10 flex w-full max-w-md items-center rounded-full border border-gray-700 bg-[#0c1412] p-1.5 pl-5">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address"
                            className="flex-1 bg-transparent text-sm text-gray-200 placeholder:text-gray-500 focus:outline-none"
                        />
                        <button
                            onClick={handleJoin}
                            className="flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold text-black transition-opacity hover:opacity-90"
                            style={{
                                background: "linear-gradient(90deg, #00A896 0%, #05786D 100%)",
                            }}
                        >
                            Join
                            <ArrowRight className="h-4 w-4" />
                        </button>
                    </div>
                )}

                {/* Spots remaining */}
                {!joined && (
                    <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
                        <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#00A896" }} />
                        342 Founding Spots Remaining
                    </div>
                )}
            </main>
        </div>
    );
}