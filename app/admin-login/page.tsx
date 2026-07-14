"use client";

import Link from "next/link";

export default function AdminLoginPage() {
    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-teal-800 via-teal-900 to-slate-900">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Optional Background Image */}
            <div
                className="absolute inset-0 opacity-10 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/images/login-bg.jpg')",
                }}
            />

            {/* Login Card */}
            <div className="relative z-10 w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
                {/* Logo */}
                <div className="mb-8 text-center">
                    <h1 className="text-4xl font-light tracking-[8px]">
                        <span className="text-teal-600">AI</span>FORMA
                    </h1>

                    <p className="mt-3 text-sm text-gray-500">
                        Admin Portal
                    </p>
                </div>

                {/* Form */}
                <form className="space-y-5">
                    {/* Email */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-600">
                            Email Address
                        </label>

                        <input
                            type="email"
                            placeholder="admin@example.com"
                            className="h-12 w-full rounded-xl border border-gray-300 px-4 outline-none transition focus:border-teal-600"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-600">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="••••••••"
                            className="h-12 w-full rounded-xl border border-gray-300 px-4 outline-none transition focus:border-teal-600"
                        />
                    </div>

                    {/* Remember */}
                    <div className="flex items-center justify-between">
                        <label className="flex items-center gap-2 text-sm text-gray-600">
                            <input
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-600"
                            />

                            Remember me
                        </label>

                        <Link
                            href="/forgot-password"
                            className="text-sm font-medium text-teal-600 hover:underline"
                        >
                            Forgot password?
                        </Link>
                    </div>

                    {/* Sign In */}
                    <button
                        type="submit"
                        className="h-12 w-full rounded-xl bg-teal-700 font-semibold text-white transition hover:bg-teal-800"
                    >
                        Sign In
                    </button>

                    {/* Sign Up */}
                    <button
                        type="button"
                        className="h-12 w-full rounded-xl border border-gray-300 bg-white font-semibold text-gray-700 transition hover:bg-gray-100"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}