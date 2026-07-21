"use client";

import { useState } from "react";
import { Clock, CheckCircle2, Search, ChevronRight } from "lucide-react";

type Status = "New" | "In progress" | "Resolved";
type FilterTab = "All" | "New" | "In progress" | "Resolved";

interface Report {
    id: string;
    title: string;
    reporterName: string;
    reporterEmail: string;
    initials: string;
    submitted: string;
    status: Status;
}

const REPORTS: Report[] = [
    {
        id: "1",
        title: "Body scan upload freezes at 85%",
        reporterName: "Ava Patel",
        reporterEmail: "ava.patel@gmail.com",
        initials: "AP",
        submitted: "Today, 10:26 AM",
        status: "New",
    },
    {
        id: "2",
        title: "Weekly insights card shows an empty state",
        reporterName: "Leo Martinez",
        reporterEmail: "leo.martinez@outlook.com",
        initials: "LM",
        submitted: "Today, 9:48 AM",
        status: "In progress",
    },
    {
        id: "3",
        title: "Notification preference does not stay selected",
        reporterName: "Maya Chen",
        reporterEmail: "mayac@icloud.com",
        initials: "MC",
        submitted: "Yesterday, 7:16 PM",
        status: "New",
    },
    {
        id: "4",
        title: "Back button overlaps the page title on small screens",
        reporterName: "Noah Williams",
        reporterEmail: "noah.williams@gmail.com",
        initials: "NW",
        submitted: "May 18, 3:42 PM",
        status: "Resolved",
    },
];

const TABS: FilterTab[] = ["All", "New", "In progress", "Resolved"];

function StatusBadge({ status }: { status: Status }) {
    const styles: Record<Status, string> = {
        New: "bg-emerald-50 text-emerald-700",
        "In progress": "bg-amber-50 text-amber-700",
        Resolved: "bg-emerald-50 text-emerald-700",
    };
    const dotStyles: Record<Status, string> = {
        New: "bg-emerald-500",
        "In progress": "bg-amber-500",
        Resolved: "bg-emerald-500",
    };

    return (
        <span
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${styles[status]}`}
        >
            <span className={`h-1.5 w-1.5 rounded-full ${dotStyles[status]}`} />
            {status}
        </span>
    );
}

export default function BugReports() {
    const [activeTab, setActiveTab] = useState<FilterTab>("All");
    const [query, setQuery] = useState("");

    const filtered = REPORTS.filter((r) => {
        const matchesTab = activeTab === "All" || r.status === activeTab;
        const q = query.trim().toLowerCase();
        const matchesQuery =
            q === "" ||
            r.title.toLowerCase().includes(q) ||
            r.reporterName.toLowerCase().includes(q) ||
            r.reporterEmail.toLowerCase().includes(q);
        return matchesTab && matchesQuery;
    });

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="mx-auto w-full space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-6 py-5">
                    <div>
                        <h1 className="text-lg font-semibold text-gray-900">
                            Bug Reports
                        </h1>
                        <p className="mt-1 text-sm text-gray-500">
                            Review feedback submitted from the AiFORMA mobile app
                        </p>
                    </div>
                    <span className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-medium text-amber-800">
                        2 reports need attention
                    </span>
                </div>

                {/* Stat cards */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="rounded-xl border border-gray-200 bg-white p-5">
                        <div className="flex items-start justify-between">
                            <p className="text-sm text-gray-500">Open reports</p>
                            <span className="h-6 w-6 rounded-md bg-emerald-50" />
                        </div>
                        <p className="mt-2 text-3xl font-bold text-gray-900">3</p>
                        <p className="mt-1 text-xs text-gray-400">2 arrived today</p>
                    </div>
                    <div className="rounded-xl border border-gray-200 bg-white p-5">
                        <div className="flex items-start justify-between">
                            <p className="text-sm text-gray-500">In progress</p>
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-50 text-amber-500">
                                <Clock className="h-3.5 w-3.5" />
                            </span>
                        </div>
                        <p className="mt-2 text-3xl font-bold text-gray-900">1</p>
                        <p className="mt-1 text-xs text-gray-400">
                            Actively being investigated
                        </p>
                    </div>
                    <div className="rounded-xl border border-gray-200 bg-white p-5">
                        <div className="flex items-start justify-between">
                            <p className="text-sm text-gray-500">Resolved this week</p>
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                                <CheckCircle2 className="h-3.5 w-3.5" />
                            </span>
                        </div>
                        <p className="mt-2 text-3xl font-bold text-gray-900">12</p>
                        <p className="mt-1 text-xs text-gray-400">
                            Average response: 3h 12m
                        </p>
                    </div>
                </div>

                {/* Table card */}
                <div className="rounded-xl border border-gray-200 bg-white">
                    {/* Toolbar */}
                    <div className="flex flex-col gap-3 border-b border-gray-100 p-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-1 rounded-lg bg-gray-100 p-1">
                            {TABS.map((tab) => (
                                <button
                                    key={tab}
                                    type="button"
                                    onClick={() => setActiveTab(tab)}
                                    className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${activeTab === tab
                                        ? "bg-white text-gray-900 shadow-sm"
                                        : "text-gray-500 hover:text-gray-700"
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                        <div className="relative sm:w-72">
                            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search reports..."
                                className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-9 pr-3 text-sm text-gray-700 placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                            />
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead>
                                <tr className="text-xs uppercase tracking-wide text-gray-400">
                                    <th className="px-6 py-3 font-medium">Report</th>
                                    <th className="px-6 py-3 font-medium">Reporter</th>
                                    <th className="px-6 py-3 font-medium">Submitted</th>
                                    <th className="px-6 py-3 font-medium">Status</th>
                                    <th className="px-6 py-3 text-right font-medium">
                                        Details
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {filtered.map((report) => (
                                    <tr key={report.id}>
                                        <td className="px-6 py-4 font-medium text-gray-900">
                                            {report.title}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-xs font-semibold text-emerald-700">
                                                    {report.initials}
                                                </span>
                                                <div>
                                                    <p className="font-medium text-gray-900">
                                                        {report.reporterName}
                                                    </p>
                                                    <p className="text-xs text-gray-400">
                                                        {report.reporterEmail}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-gray-500">
                                            {report.submitted}
                                        </td>
                                        <td className="px-6 py-4">
                                            <StatusBadge status={report.status} />
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button
                                                type="button"
                                                className="inline-flex items-center gap-0.5 text-sm font-medium text-emerald-700 transition-colors hover:text-emerald-800"
                                            >
                                                View
                                                <ChevronRight className="h-4 w-4" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Footer */}
                    <div className="border-t border-gray-100 px-6 py-3 text-xs text-gray-400">
                        Showing {filtered.length} of {REPORTS.length} reports
                    </div>
                </div>
            </div>
        </div>
    );
}