"use client";

import {
    Activity,
    Search,
    Trash2,
    UserCheck,
    UserMinus,
    Users,
    TrendingUp,
    Ban,
} from "lucide-react";

const stats = [
    {
        title: "Total Users",
        value: "1,248",
        icon: Users,
    },
    {
        title: "Active Users",
        value: "842",
        icon: Activity,
    },
    {
        title: "Inactive Users",
        value: "406",
        icon: UserMinus,
    },
    {
        title: "New This Month",
        value: "124",
        icon: TrendingUp,
    },
];

const users = [
    {
        name: "Josh Miller",
        email: "josh@example.com",
        goal: "Fat Loss",
        joined: "May 3, 2026",
        status: "Active",
    },
    {
        name: "Sarah Johnson",
        email: "sarah@example.com",
        goal: "Lean Muscle",
        joined: "May 2, 2026",
        status: "Active",
    },
    {
        name: "Michael Lee",
        email: "michael@example.com",
        goal: "Performance",
        joined: "May 1, 2026",
        status: "Active",
    },
    {
        name: "Emily Davis",
        email: "emily@example.com",
        goal: "Fat Loss",
        joined: "Apr 30, 2026",
        status: "Inactive",
    },
    {
        name: "David Brown",
        email: "david@example.com",
        goal: "Recomposition",
        joined: "Apr 28, 2026",
        status: "Active",
    },
];

export default function UsersPage() {
    return (
        <div className="space-y-6">
            {/* Stats */}
            <div className="grid gap-6 lg:grid-cols-4">
                {stats.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={item.title}
                            className="rounded-2xl border bg-white p-6 shadow-sm"
                        >
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50">
                                    <Icon className="text-teal-600" size={22} />
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">{item.title}</p>

                                    <h2 className="text-3xl font-bold">{item.value}</h2>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Table */}
            <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
                {/* Header */}
                <div className="flex items-center justify-between border-b p-5">
                    <h2 className="text-xl font-semibold">All Users</h2>

                    <div className="relative w-80">
                        <Search
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                            size={18}
                        />

                        <input
                            placeholder="Search users..."
                            className="w-full rounded-lg border py-2 pl-10 pr-4 outline-none focus:border-teal-500"
                        />
                    </div>
                </div>

                {/* Table */}
                <table className="w-full">
                    <thead className="border-b bg-gray-50">
                        <tr className="text-left text-sm text-gray-500">
                            <th className="px-6 py-4">User</th>
                            <th>Email</th>
                            <th>Goal</th>
                            <th>Joined</th>
                            <th>Status</th>
                            <th className="text-right pr-6">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map((user) => (
                            <tr
                                key={user.email}
                                className="border-b last:border-none hover:bg-gray-50"
                            >
                                {/* User */}
                                <td className="px-6 py-5">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 font-semibold text-teal-700">
                                            {user.name
                                                .split(" ")
                                                .map((n) => n[0])
                                                .join("")}
                                        </div>

                                        <div>
                                            <p className="font-medium">{user.name}</p>
                                        </div>
                                    </div>
                                </td>

                                <td className="text-gray-500">{user.email}</td>

                                <td>{user.goal}</td>

                                <td className="text-gray-500">{user.joined}</td>

                                <td>
                                    <span
                                        className={`rounded-full px-3 py-1 text-xs font-medium ${user.status === "Active"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-red-100 text-red-600"
                                            }`}
                                    >
                                        {user.status}
                                    </span>
                                </td>

                                <td>
                                    <div className="flex justify-end gap-3 pr-6">
                                        <button className="text-red-500 transition hover:text-red-700">
                                            <Ban size={18} />
                                        </button>

                                        <button className="text-red-500 transition hover:text-red-700">
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}