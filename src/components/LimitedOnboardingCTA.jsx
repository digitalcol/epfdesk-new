"use client";

export default function LimitedOnboardingCTA() {
  return (
    <section className="relative bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 py-16 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Secure Your Spot: <span className="text-indigo-600">Limited Onboarding</span>
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Our dedication to quality means we can only partner with a select number 
          of new hospitality businesses each month. Secure your position for a 
          seamless transition now.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="inline-block rounded-xl bg-indigo-600 px-6 py-3 text-white font-semibold shadow-md hover:bg-indigo-700 transition"
          >
            Get a Free Audit Now →
          </a>
          <a
            href="#"
            className="inline-block rounded-xl bg-pink-500 px-6 py-3 text-white font-semibold shadow-md hover:bg-pink-600 transition"
          >
            Start Protection Today →
          </a>
        </div>
      </div>
    </section>
  );
}
