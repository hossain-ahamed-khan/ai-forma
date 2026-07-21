"use client";

import { useState } from "react";
import { Download, Mail, Send, Search } from "lucide-react";

type Status = "New" | "Invited";
type SourceType = "Landing page" | "Referral" | "Waitlist link";
type FilterTab = "All" | "New" | "Invited";

interface Member {
    id: string;
    email: string;
    submitted: string;
    source: SourceType;
    status: Status;
}

const MEMBERS: Member[] = [
    {
        id: "FM-1042",
        email: "alex.morgan@gmail.com",
        submitted: "Today, 10:42 AM",
        source: "Landing page",
        status: "New",
    },
    {
        id: "FM-1041",
        email: "ria@wellnesscollective.co",
        submitted: "Today, 10:18 AM",
        source: "Landing page",
        status: "New",
    },
    {
        id: "FM-1040",
        email: "jordan.lee@proton.me",
        submitted: "Today, 9:56 AM",
        source: "Referral",
        status: "Invited",
    },
    {
        id: "FM-1039",
        email: "samira.khan@gmail.com",
        submitted: "Yesterday, 6:24 PM",
        source: "Landing page",
        status: "Invited",
    },
    {
        id: "FM-1038",
        email: "paul@stridehealth.io",
        submitted: "Yesterday, 4:08 PM",
        source: "Waitlist link",
        status: "New",
    },
    {
        id: "FM-1037",
        email: "michelle.wu@gmail.com",
        submitted: "Yesterday, 2:51 PM",
        source: "Landing page",
        status: "Invited",
    },
    {
        id: "FM-1036",
        email: "robin@thinkforward.co",
        submitted: "May 18, 11:32 AM",
        source: "Referral",
        status: "Invited",
    },
];

const TABS: FilterTab[] = ["All", "New", "Invited"];

function StatusBadge({ status }: { status: Status }) {
    const isNew = status === "New";
    return (
        <span
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${isNew ? "bg-emerald-50 text-emerald-700" : "bg-sky-50 text-sky-700"
                }`}
        >
            <span
                className={`h-1.5 w-1.5 rounded-full ${isNew ? "bg-emerald-500" : "bg-sky-500"
                    }`}
            />
            {status}
        </span>
    );
}

export default function FoundingMembers() {
    const [activeTab, setActiveTab] = useState<FilterTab>("All");
    const [query, setQuery] = useState("");

    const filtered = MEMBERS.filter((m) => {
        const matchesTab = activeTab === "All" || m.status === activeTab;
        const matchesQuery =
            query.trim() === "" ||
            m.email.toLowerCase().includes(query.toLowerCase()) ||
            m.id.toLowerCase().includes(query.toLowerCase());
        return matchesTab && matchesQuery;
    });

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="mx-auto w-full space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-6 py-5">
                    <div>
                        <h1 className="text-lg font-semibold text-gray-900">
                            Founding Members
                        </h1>
                        <p className="mt-1 text-sm text-gray-500">
                            Emails submitted from the AiFORMA launch page
                        </p>
                    </div>
                    <button
                        type="button"
                        className="flex items-center gap-2 rounded-lg bg-emerald-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-800"
                    >
                        <Download className="h-4 w-4" />
                        Export list
                    </button>
                </div>

                {/* Stat cards */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="rounded-xl border border-gray-200 bg-white p-5">
                        <p className="text-sm text-gray-500">Total submissions</p>
                        <p className="mt-2 text-3xl font-bold text-gray-900">658</p>
                        <p className="mt-1 text-xs text-gray-400">342 spots remaining</p>
                    </div>
                    <div className="rounded-xl border border-gray-200 bg-white p-5">
                        <p className="text-sm text-gray-500">New today</p>
                        <p className="mt-2 text-3xl font-bold text-gray-900">24</p>
                        <p className="mt-1 text-xs text-emerald-600">8 since this morning</p>
                    </div>
                    <div className="rounded-xl border border-gray-200 bg-white p-5">
                        <p className="text-sm text-gray-500">Invited</p>
                        <p className="mt-2 text-3xl font-bold text-gray-900">316</p>
                        <p className="mt-1 text-xs text-gray-400">48% of submissions</p>
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
                                placeholder="Search email or member ID..."
                                className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-9 pr-3 text-sm text-gray-700 placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                            />
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead>
                                <tr className="text-xs uppercase tracking-wide text-gray-400">
                                    <th className="px-6 py-3 font-medium">Member</th>
                                    <th className="px-6 py-3 font-medium">Submitted</th>
                                    <th className="px-6 py-3 font-medium">Source</th>
                                    <th className="px-6 py-3 font-medium">Status</th>
                                    <th className="px-6 py-3 text-right font-medium">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {filtered.map((member) => (
                                    <tr key={member.id}>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                                                    <Mail className="h-4 w-4" />
                                                </span>
                                                <div>
                                                    <p className="font-medium text-gray-900">
                                                        {member.email}
                                                    </p>
                                                    <p className="text-xs text-gray-400">{member.id}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-gray-500">
                                            {member.submitted}
                                        </td>
                                        <td className="px-6 py-4 text-gray-500">
                                            {member.source}
                                        </td>
                                        <td className="px-6 py-4">
                                            <StatusBadge status={member.status} />
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button
                                                type="button"
                                                className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-50"
                                            >
                                                <Send className="h-3.5 w-3.5" />
                                                Invite
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Footer */}
                    <div className="border-t border-gray-100 px-6 py-3 text-xs text-gray-400">
                        Showing {filtered.length} of {MEMBERS.length} recent submissions
                    </div>
                </div>
            </div>
        </div>
    );
}