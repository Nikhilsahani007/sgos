// src/pages/Admissions.jsx
import { useState } from "react";
import { Link } from "react-router-dom";  // 👈 added for SPA navigation

export default function Admissions() {
  const [form, setForm] = useState({
    studentName: "",
    parentName: "",
    phone: "",
    email: "",
    grade: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: "",
    error: "",
  });

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: "", error: "" });

    try {
      const res = await fetch("http://localhost:4000/api/admissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");

      setStatus({ loading: false, success: data.message, error: "" });
      setForm({
        studentName: "",
        parentName: "",
        phone: "",
        email: "",
        grade: "",
        message: "",
      });
    } catch (err) {
      setStatus({ loading: false, success: "", error: err.message });
    }
  };

  return (
    <section className="page-shell px-6 md:px-10 py-16">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Top banner */}
        <div className="card-poster p-6 md:p-8 bg-sg-cream/80">
          <div className="flex flex-wrap items-center justify-between gap-4">

            <div>
              <p className="pill-label mb-2">Admissions 2025–26</p>
              <h1 className="text-3xl md:text-4xl font-bold text-sg-blue-dark">
                Admissions are in progress
              </h1>

              <p className="mt-3 text-slate-700 text-sm md:text-base max-w-xl">
                Submit an enquiry form and our admissions team will get in touch
                to guide you through the process, fee structure and campus visit.
              </p>

              {/* ⭐ FIXED: React Router navigation instead of <a href> */}
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <Link
                  to="/fees"
                  className="inline-flex items-center px-5 py-2.5 rounded-2xl bg-sg-blue text-sg-cream text-sm font-semibold shadow-poster hover:brightness-110"
                >
                  View Detailed Fee Structure
                </Link>

                <span className="text-xs md:text-sm text-sg-blue-dark/70">
                  Includes tuition, transport and other applicable charges.
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs w-full md:w-auto md:max-w-xs">
              {[
                "Science Fair",
                "Field Trips",
                "Mock Elections",
                "Interschool Competitions",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-sg-blue text-sg-cream rounded-2xl px-3 py-2 text-center shadow-poster"
                >
                  <p className="font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enquiry Form */}
       <div className="max-w-4xl mx-auto">
  <h2 className="section-title mb-6">Admission Enquiry Form</h2>

  <form
    onSubmit={handleSubmit}
    className="bg-white/95 rounded-3xl border border-slate-200 p-6 md:p-8 space-y-6 shadow-poster"
  >
    {/* Grid Fields */}
    <div className="grid md:grid-cols-2 gap-6">

      {/* Student Name */}
      <div>
        <label className="block text-sm font-semibold mb-1 text-sg-blue-dark">
          Student Name *
        </label>
        <input
          name="studentName"
          value={form.studentName}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-300 px-3 py-2 text-black focus:ring-2 focus:ring-sg-blue focus:outline-none"
          placeholder="Enter student full name"
          required
        />
      </div>

      {/* Parent Name */}
      <div>
        <label className="block text-sm font-semibold mb-1 text-sg-blue-dark">
          Parent / Guardian Name *
        </label>
        <input
          name="parentName"
          value={form.parentName}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-300 px-3 py-2 text-black focus:ring-2 focus:ring-sg-blue focus:outline-none"
          placeholder="Enter parent or guardian name"
          required
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-semibold mb-1 text-sg-blue-dark">
          Phone Number *
        </label>
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-300 px-3 py-2 text-black focus:ring-2 focus:ring-sg-blue focus:outline-none"
          placeholder="Mobile number"
          required
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold mb-1 text-sg-blue-dark">
          Email
        </label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-300 px-3 py-2 text-black focus:ring-2 focus:ring-sg-blue focus:outline-none"
          placeholder="Email for communication (optional)"
        />
      </div>

      {/* Applying for Class */}
      <div>
        <label className="block text-sm font-semibold mb-1 text-sg-blue-dark">
          Applying for Class *
        </label>
        <input
          name="grade"
          value={form.grade}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-300 px-3 py-2 text-black focus:ring-2 focus:ring-sg-blue focus:outline-none"
          placeholder="e.g., Grade 3 / 7 / 10"
          required
        />
      </div>

    </div>

    {/* Message Input */}
    <div>
      <label className="block text-sm font-semibold mb-1 text-sg-blue-dark">
        Message / Questions
      </label>
      <textarea
        name="message"
        rows={4}
        value={form.message}
        onChange={handleChange}
        className="w-full rounded-xl border border-slate-300 px-3 py-2 text-black focus:ring-2 focus:ring-sg-blue focus:outline-none"
        placeholder="Share any specific details about the child or your admission query..."
      />
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      disabled={status.loading}
      className="mt-2 inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-sg-blue text-sg-cream font-semibold shadow-poster hover:brightness-110 disabled:opacity-60"
    >
      {status.loading ? "Submitting..." : "Submit Enquiry"}
    </button>

    {/* Status Messages */}
    {status.success && (
      <p className="mt-3 text-sm text-green-600">{status.success}</p>
    )}
    {status.error && (
      <p className="mt-3 text-sm text-red-600">{status.error}</p>
    )}
  </form>
</div>

      </div>
    </section>
  );
}
