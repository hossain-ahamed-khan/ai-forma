"use client";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    PieChart,
    Pie,
    Cell,
} from "recharts";

const cards = [
    {
        title: "Total Users",
        value: "1,248",
        change: "+12%"
    },
    {
        title: "Active Users",
        value: "842",
        change: "+18%"
    },
    {
        title: "Photo Uploads",
        value: "3,452",
        change: "+15%"
    },
    {
        title: "AI Analyses",
        value: "3,212",
        change: "+16%"
    },
];

const activityData = [
    { month: "Jan", activeUsers: 220, newUsers: 160 },
    { month: "Feb", activeUsers: 190, newUsers: 155 },
    { month: "Mar", activeUsers: 245, newUsers: 190 },
    { month: "Apr", activeUsers: 270, newUsers: 210 },
    { month: "May", activeUsers: 240, newUsers: 212 },
    { month: "Jun", activeUsers: 235, newUsers: 225 },
    { month: "Jul", activeUsers: 260, newUsers: 218 },
    { month: "Aug", activeUsers: 285, newUsers: 220 },
    { month: "Sep", activeUsers: 300, newUsers: 235 },
    { month: "Oct", activeUsers: 325, newUsers: 245 },
    { month: "Nov", activeUsers: 355, newUsers: 258 },
    { month: "Dec", activeUsers: 385, newUsers: 270 },
];

const goalsData = [
    { name: "Fat Loss", value: 42, color: "#0F766E" },
    { name: "Lean Muscle", value: 28, color: "#14B8A6" },
    { name: "Performance", value: 18, color: "#2DD4BF" },
    { name: "Recomposition", value: 8, color: "#5EEAD4" },
    { name: "Wellness", value: 4, color: "#99F6E4" },
];

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            {/* Cards */}
            <div className="grid grid-cols-4 gap-6">
                {cards.map((card) => {

                    return (
                        <div
                            key={card.title}
                            className="rounded-2xl bg-white p-6 shadow-sm border"
                        >
                            <div className="flex justify-between">
                                <div>
                                    <p className="text-sm text-gray-500">
                                        {card.title}
                                    </p>

                                    <h2 className="mt-2 text-4xl font-bold">
                                        {card.value}
                                    </h2>

                                    <p className="mt-3 flex items-center gap-1 text-sm text-green-600">
                                        <span>↗</span> {card.change} vs last week
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-3 gap-6">
                {/* Line Chart */}
                <div className="col-span-2 rounded-2xl bg-white p-6 border h-[420px]">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold">
                            User Activity
                        </h3>

                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1.5">
                                <span className="h-2 w-2 rounded-full bg-[#0F766E]" />
                                Active Users
                            </div>
                            <div className="flex items-center gap-1.5">
                                <span className="h-2 w-2 rounded-full bg-[#2DD4BF]" />
                                New Users
                            </div>
                        </div>
                    </div>

                    <ResponsiveContainer width="100%" height="85%">
                        <LineChart data={activityData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                            <CartesianGrid vertical={false} stroke="#F1F5F9" />
                            <XAxis
                                dataKey="month"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: "#94A3B8", fontSize: 12 }}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: "#94A3B8", fontSize: 12 }}
                            />
                            <Tooltip
                                contentStyle={{
                                    borderRadius: 12,
                                    border: "1px solid #E2E8F0",
                                    fontSize: 12,
                                }}
                            />
                            <Line
                                type="monotone"
                                dataKey="activeUsers"
                                stroke="#0F766E"
                                strokeWidth={2.5}
                                dot={false}
                            />
                            <Line
                                type="monotone"
                                dataKey="newUsers"
                                stroke="#2DD4BF"
                                strokeWidth={2.5}
                                dot={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* Pie Chart */}
                <div className="rounded-2xl bg-white p-6 border h-[420px] flex flex-col">
                    <h3 className="text-lg font-semibold mb-2">
                        Top Goals
                    </h3>

                    <div className="h-56 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={goalsData}
                                    dataKey="value"
                                    nameKey="name"
                                    innerRadius={50}
                                    outerRadius={80}
                                    paddingAngle={2}
                                    stroke="none"
                                >
                                    {goalsData.map((entry) => (
                                        <Cell key={entry.name} fill={entry.color} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="mt-6 space-y-3 text-sm">
                        {goalsData.map((goal) => (
                            <div key={goal.name} className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span
                                        className="h-2.5 w-2.5 rounded-full"
                                        style={{ backgroundColor: goal.color }}
                                    />
                                    <span className="text-gray-600">{goal.name}</span>
                                </div>
                                <span className="font-medium text-gray-900">{goal.value}%</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}