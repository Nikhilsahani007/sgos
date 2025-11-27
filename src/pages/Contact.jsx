// src/pages/Contact.jsx
export default function Contact() {
  const branches = [
    {
      name: "Siddhartha High School",
      area: "Near Ganesh Temple, Vanasthalipuram",
      phone: "7780197872",
    },
    {
      name: "Siddhartha Model High School",
      area: "Kamala Nagar, Vanasthalipuram",
      phone: "8309863928",
    },
    {
      name: "Siddhartha Grammar High School",
      area: "Vaidehinagar, Vanasthalipuram",
      phone: "63015611480",
    },
  ];

  return (
    <section className="min-h-screen px-6 md:px-12 py-16 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 text-slate-50">
      {/* Hero */}
      <div className="max-w-5xl mx-auto text-center">
        <p className="uppercase tracking-[0.25em] text-sm text-yellow-300">
          Get in Touch
        </p>
        <h1 className="mt-3 text-4xl md:text-5xl font-extrabold">
          Contact Siddhartha Group of Schools
        </h1>
        <p className="mt-4 text-slate-200 max-w-3xl mx-auto">
          We are happy to answer your questions about admissions, academics,
          transport, or any other school-related queries.
        </p>
      </div>

      {/* Branch cards */}
      <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-3 gap-6">
        {branches.map((b) => (
          <article
            key={b.name}
            className="bg-blue-950/70 border border-white/15 rounded-2xl p-6 shadow-lg"
          >
            <h3 className="text-lg font-bold text-yellow-300 mb-1">
              {b.name}
            </h3>
            <p className="text-sm text-slate-100">{b.area}</p>
            <p className="mt-3 text-sm text-slate-100">
              Phone:{" "}
              <a href={`tel:${b.phone}`} className="text-yellow-300 font-semibold">
                {b.phone}
              </a>
            </p>
          </article>
        ))}
      </div>

      {/* Contact form */}
      <div className="max-w-5xl mx-auto mt-16 bg-white text-slate-900 rounded-3xl p-8 shadow-2xl">
        <h2 className="text-2xl font-bold text-blue-900 mb-3">
          Send us a Message
        </h2>
        <p className="text-sm text-slate-600 mb-5">
          Fill in the form below and our team will reach out to you.
        </p>

        <form className="grid md:grid-cols-2 gap-4">
          <input
            className="px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Your Name"
          />
          <input
            className="px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Mobile Number"
          />
          <input
            className="px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 md:col-span-2"
            placeholder="Email (optional)"
          />
          <textarea
            className="px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 md:col-span-2"
            rows="4"
            placeholder="Your Message"
          />
          <button
            type="button"
            className="mt-1 inline-flex justify-center items-center px-6 py-2.5 rounded-xl bg-blue-900 text-yellow-300 font-semibold hover:bg-blue-950 transition md:col-span-2"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
