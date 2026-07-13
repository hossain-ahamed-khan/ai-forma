import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 px-6">
      <div
        id="waitlist"
        className="max-w-3xl mx-auto rounded-3xl text-center py-14 px-8 bg-[#005C53]"
      >
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
          Ready to Understand Your Body?
        </h2>
        <p className="text-teal-50/90 max-w-md mx-auto mb-8">
          Join the AiFORMA First 1000 waitlist today and secure your spot as a
          founding member.
        </p>
        <Link
          href="/waitlist"
          className="inline-block bg-white text-teal-800 font-semibold px-6 py-3 rounded-xl hover:bg-teal-50 transition-colors"
        >
          Join the Waitlist →
        </Link>
      </div>
    </section>
  );
}
