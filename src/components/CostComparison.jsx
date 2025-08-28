"use client";

export default function CostComparison() {
  return (
    <section className="py-16 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          The Math Is Simple
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {/* Option A */}
          <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
            <h3 className="text-xl font-semibold text-red-600 mb-4">
              Option A: The DIY Headache
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>• 1 HR person: ₹40,000/month</li>
              <li>• 1 penalty/year: ₹50,000 average</li>
              <li>• 1 guest complaint on social media: <span className="italic">Immeasurable</span></li>
              <li>• <span className="font-bold">Annual cost: ₹5.3L + constant brand risk</span></li>
            </ul>
          </div>

          {/* Option B */}
          <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
            <h3 className="text-xl font-semibold text-green-600 mb-4">
              Option B: Workforce Limited
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>• All compliance managed: ₹15,000/month</li>
              <li>• Penalties: ₹0</li>
              <li>• Your time saved: 40 hours/month</li>
              <li>• <span className="font-bold">Annual cost: ₹1.8L with guarantee</span></li>
            </ul>
          </div>
        </div>

        {/* Savings Highlight */}
        <div className="mt-12">
          <p className="inline-block bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-6 py-4 rounded-2xl text-lg md:text-xl font-semibold shadow-md">
            🎉 You save: ₹3.5L/year + you permanently protect your brand
          </p>
        </div>
      </div>
    </section>
  );
}
