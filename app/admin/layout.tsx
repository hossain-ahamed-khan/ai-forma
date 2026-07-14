"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Users,
    CreditCard,
    LogOut,
} from "lucide-react";

const menus = [
    {
        title: "Dashboard",
        href: "/admin",
        icon: LayoutDashboard,
    },
    {
        title: "User Administrator",
        href: "/admin/users",
        icon: Users,
    },
    {
        title: "Payment",
        href: "/admin/payment",
        icon: CreditCard,
    },
];

export default function AdminLayout({
    children,
}: {
    children: ReactNode;
}) {
    const pathname = usePathname();

    const isActive = (href: string) => {
        if (href === "/admin") {
            return pathname === "/admin";
        }
        return pathname === href || pathname.startsWith(`${href}/`);
    };

    return (
        <div className="flex h-screen bg-[#F6F7F9]">
            {/* Sidebar */}
            <aside className="w-[260px] bg-[#111827] text-white flex flex-col">
                {/* Logo */}
                <div className="h-16 flex items-center px-6 border-b border-gray-700">
                    <h1 className="text-2xl font-bold tracking-[6px]">
                        <span className="text-teal-400">AI</span>FORMA
                    </h1>
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-4 space-y-2">
                    {menus.map((item) => {
                        const Icon = item.icon;
                        const active = isActive(item.href);

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                aria-current={active ? "page" : undefined}
                                className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition ${active
                                        ? "bg-teal-600 text-white"
                                        : "text-gray-300 hover:bg-teal-700 hover:text-white"
                                    }`}
                            >
                                <Icon size={18} />
                                {item.title}
                            </Link>
                        );
                    })}
                </nav>

                {/* User */}
                <div className="border-t border-gray-700 p-4">
                    <div className="flex items-center justify-between">
                        <div className="flex gap-3">
                            <div className="h-10 w-10 rounded-full bg-teal-600 flex items-center justify-center">
                                A
                            </div>

                            <div>
                                <p className="text-sm font-medium">Admin</p>
                                <p className="text-xs text-gray-400">
                                    admin@aiforma.com
                                </p>
                            </div>
                        </div>

                        <LogOut
                            size={18}
                            className="cursor-pointer text-gray-400"
                        />
                    </div>
                </div>
            </aside>

            {/* Right */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="h-16 bg-white border-b px-8 flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-semibold">
                            {menus.find((item) => isActive(item.href))?.title ?? "Dashboard"}
                        </h2>

                        <p className="text-sm text-gray-500">
                            Overview of your platform
                        </p>
                    </div>

                    <button className="rounded-xl border px-5 py-2 text-sm bg-white">
                        May 10 - May 17
                    </button>
                </header>

                {/* Page */}
                <main className="flex-1 overflow-auto p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}