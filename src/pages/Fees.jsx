export default function Fees() {
  const tuition = [
    { cls: "Nursery to U.K.G", t1: "₹9,000", t2: "₹9,000", t3: "₹9,000", total: "₹27,000" },
    { cls: "1st to 5th Class", t1: "₹10,000", t2: "₹9,000", t3: "₹9,000", total: "₹28,000" },
    { cls: "6th to 7th Class", t1: "₹10,000", t2: "₹10,000", t3: "₹10,000", total: "₹30,000" },
    { cls: "8th to 9th Class", t1: "₹10,500", t2: "₹10,000", t3: "₹10,000", total: "₹30,500" },
    { cls: "10th Class", t1: "₹13,000", t2: "₹13,000", t3: "₹13,000", total: "₹39,000" },
  ];

  const transport = [
    { zone: "Zone A (0–3 km)", bus: "₹900 / month" },
    { zone: "Zone B (3–6 km)", bus: "₹1,100 / month" },
    { zone: "Zone C (6–10 km)", bus: "₹1,300 / month" },
  ];

  return (
    <section className="space-y-10">
      <h1 className="section-title">Fee Structure 2025–26</h1>

      {/* Tuition Table */}
      <div className="card-poster p-6 md:p-8">
        <h2 className="text-2xl font-bold text-sg-blue-dark mb-4">
          Tuition Fees (Per Academic Year)
        </h2>
        <p className="text-slate-600 mb-4">
          Fees are split into three terms for parent convenience. Exact schedules are shared at
          the time of admission.
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-slate-800">
            <thead>
              <tr className="border-b border-slate-200 bg-sg-cream/70">
                <th className="py-3 px-4">Class</th>
                <th className="py-3 px-4">Term 1 (June)</th>
                <th className="py-3 px-4">Term 2 (Sept)</th>
                <th className="py-3 px-4">Term 3 (Dec)</th>
                <th className="py-3 px-4">Total</th>
              </tr>
            </thead>
            <tbody>
              {tuition.map((t) => (
                <tr key={t.cls} className="border-b border-slate-100">
                  <td className="py-3 px-4 font-semibold">{t.cls}</td>
                  <td className="py-3 px-4">{t.t1}</td>
                  <td className="py-3 px-4">{t.t2}</td>
                  <td className="py-3 px-4">{t.t3}</td>
                  <td className="py-3 px-4 text-sg-blue-dark font-bold">{t.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Transport Fees */}
      <div className="card-poster p-6 md:p-8">
        <h2 className="text-2xl font-bold text-sg-blue-dark mb-4">Transport (Optional)</h2>
        <p className="text-slate-600 mb-4">
          Safe, GPS-enabled buses run on fixed routes. Final fees are confirmed at the time of
          admission based on location.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {transport.map((t) => (
            <div key={t.zone} className="bg-sg-cream/60 rounded-2xl p-4 border border-sg-gold/60">
              <p className="font-semibold text-sg-blue-dark">{t.zone}</p>
              <p className="mt-1 text-sg-blue">{t.bus}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
