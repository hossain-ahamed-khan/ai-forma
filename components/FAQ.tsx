"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does the AI analysis work?",
    answer:
      "AiFORMA uses computer vision models trained on thousands of physique images to estimate body composition, symmetry, posture, and muscle development from your check-in photos.",
  },
  {
    question: "Is my data secure and private?",
    answer:
      "Yes. All photos and analysis data are encrypted in transit and at rest, and are never shared with third parties.",
  },
  {
    question: "When will the app be available?",
    answer:
      "AiFORMA is currently in closed beta. We're rolling out access to waitlist members on a rolling basis ahead of our public launch.",
  },
  {
    question: "Do I need special equipment?",
    answer:
      "No special equipment is required — just your phone's camera and our guided capture overlay for consistent, comparable photos.",
  },
    {
    question: "How accurate is AiFORMA?",
    answer:
       "AiFORMA provides reliable AI-powered insights to help you track your physique and fitness progress over time.",
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-slate-50 py-20">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="bg-white rounded-xl border border-slate-100"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left font-medium text-sm text-slate-900"
                >
                  {faq.question}
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="px-5 pb-4 text-sm text-slate-500">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
