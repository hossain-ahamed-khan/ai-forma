"use client";

import {
    ArrowUpRight,
    Search,
} from "lucide-react";

const stats = [
    {
        title: "Monthly Recurring",
        value: "$24,500",
        change: "+12%"
    },
    {
        title: "Total Revenue",
        value: "$145,000",
        change: "+8%"
    },
    {
        title: "Active Subscriptions",
        value: "1,225",
        change: "+15%"
    },
    {
        title: "Churn Rate",
        value: "2.4%",
        change: "-0.5%"
    },
];

const recentTransactions = [
    {
        name: "Josh Miller",
        plan: "Pro Plan",
        amount: "$19.99",
        status: "Paid",
    },
    {
        name: "Sarah Johnson",
        plan: "Pro Plan",
        amount: "$19.99",
        status: "Paid",
    },
    {
        name: "Michael Lee",
        plan: "Starter Plan",
        amount: "$9.99",
        status: "Pending",
    },
    {
        name: "Emily Davis",
        plan: "Pro Plan",
        amount: "$19.99",
        status: "Failed",
    },
    {
        name: "David Brown",
        plan: "Pro Plan",
        amount: "$19.99",
        status: "Paid",
    },
];

const history = [
    {
        id: "TRX-001",
        name: "Josh Miller",
        plan: "Pro Plan",
        amount: "$19.99",
        date: "May 17, 2026",
        status: "Paid",
    },
    {
        id: "TRX-002",
        name: "Sarah Johnson",
        plan: "Pro Plan",
        amount: "$19.99",
        date: "May 17, 2026",
        status: "Paid",
    },
    {
        id: "TRX-003",
        name: "Michael Lee",
        plan: "Starter Plan",
        amount: "$9.99",
        date: "May 16, 2026",
        status: "Pending",
    },
    {
        id: "TRX-004",
        name: "Emily Davis",
        plan: "Pro Plan",
        amount: "$19.99",
        date: "May 15, 2026",
        status: "Failed",
    },
    {
        id: "TRX-005",
        name: "David Brown",
        plan: "Pro Plan",
        amount: "$19.99",
        date: "May 15, 2026",
        status: "Paid",
    },
];

const revenue = [8200, 8500, 5200, 8200, 8700];

export default function PaymentPage() {
    return (
        <div className="space-y-6">
            {/* Stat Cards */}
            <div className="grid gap-6 lg:grid-cols-4">
                {stats.map((item) => {
                    return (
                        <div
                            key={item.title}
                            className="rounded-2xl border bg-white p-6 shadow-sm"
                        >
                            <div className="flex items-center gap-4">
                                <div>
                                    <p className="text-sm text-gray-500">{item.title}</p>
                                    <h2 className="text-3xl font-bold">{item.value}</h2>

                                    <p className="mt-2 flex items-center gap-1 text-sm text-green-600">
                                        <ArrowUpRight size={14} />
                                        {item.change} vs last month
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Revenue + Recent */}
            <div className="grid gap-6 lg:grid-cols-3">
                {/* Revenue */}
                <div className="col-span-2 rounded-2xl border bg-white p-6 shadow-sm">
                    <div className="mb-8 flex items-center justify-between">
                        <h2 className="font-semibold">Revenue Overview</h2>

                        <div className="flex items-center gap-2 text-xs">
                            <span className="h-3 w-3 rounded bg-teal-600" />
                            Revenue
                        </div>
                    </div>

                    <div className="flex h-72 items-end justify-around">
                        {revenue.map((value, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center gap-3"
                            >
                                <div
                                    className="w-10 rounded-t bg-teal-600"
                                    style={{
                                        height: `${value / 35}px`,
                                    }}
                                />

                                <span className="text-xs text-gray-500">
                                    {["Jan", "Feb", "Mar", "Apr", "May"][index]}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Transactions */}
                <div className="rounded-2xl border bg-white p-6 shadow-sm">
                    <div className="mb-6 flex items-center justify-between">
                        <h2 className="font-semibold">
                            Recent Transactions
                        </h2>

                        <button className="text-sm text-teal-600 hover:underline">
                            View All
                        </button>
                    </div>

                    <div className="space-y-5">
                        {recentTransactions.map((item) => (
                            <div
                                key={item.name}
                                className="flex items-center justify-between"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                                        $
                                    </div>

                                    <div>
                                        <p className="font-medium">{item.name}</p>
                                        <p className="text-xs text-gray-500">
                                            {item.plan}
                                        </p>
                                    </div>
                                </div>

                                <div className="text-right">
                                    <p className="font-semibold">{item.amount}</p>

                                    <p
                                        className={`text-xs ${item.status === "Paid"
                                            ? "text-green-600"
                                            : item.status === "Pending"
                                                ? "text-yellow-500"
                                                : "text-red-500"
                                            }`}
                                    >
                                        {item.status}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* History */}
            <div className="rounded-2xl border bg-white shadow-sm">
                <div className="flex items-center justify-between border-b p-5">
                    <h2 className="text-lg font-semibold">
                        Transaction History
                    </h2>

                    <div className="relative w-72">
                        <Search
                            size={18}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        />

                        <input
                            placeholder="Search transactions..."
                            className="w-full rounded-lg border py-2 pl-10 pr-4 outline-none focus:border-teal-500"
                        />
                    </div>
                </div>

                <table className="w-full">
                    <thead className="bg-gray-50 text-left text-sm text-gray-500">
                        <tr>
                            <th className="px-6 py-4">Transaction ID</th>
                            <th>User</th>
                            <th>Plan</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {history.map((item) => (
                            <tr
                                key={item.id}
                                className="border-t hover:bg-gray-50"
                            >
                                <td className="px-6 py-5">{item.id}</td>

                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-100 text-xs font-semibold text-teal-700">
                                            {item.name
                                                .split(" ")
                                                .map((x) => x[0])
                                                .join("")}
                                        </div>

                                        {item.name}
                                    </div>
                                </td>

                                <td>{item.plan}</td>

                                <td className="font-semibold">
                                    {item.amount}
                                </td>

                                <td>{item.date}</td>

                                <td>
                                    <span
                                        className={`rounded-full px-3 py-1 text-xs font-medium ${item.status === "Paid"
                                            ? "bg-green-100 text-green-700"
                                            : item.status === "Pending"
                                                ? "bg-yellow-100 text-yellow-700"
                                                : "bg-red-100 text-red-700"
                                            }`}
                                    >
                                        {item.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}