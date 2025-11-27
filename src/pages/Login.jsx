// src/pages/Login.jsx
export default function Login() {
  return (
    <section className="min-h-screen px-6 md:px-12 py-16 bg-gradient-to-tr from-blue-900 via-blue-800 to-blue-900 text-slate-50 flex items-center">
      <div className="max-w-4xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Info side */}
        <div>
          <p className="uppercase tracking-[0.25em] text-sm text-yellow-300">
            Secure Portal
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-extrabold">
            Parent & Staff Login
          </h1>
          <p className="mt-4 text-slate-200">
            Access student information, fee details, academic reports, and
            communication from the school through a secure login.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-slate-100">
            <li>• View attendance, timetable, and announcements</li>
            <li>• Track fee payments and receipts</li>
            <li>• Receive updates from class teachers and school management</li>
          </ul>
        </div>

        {/* Login card */}
        <div className="bg-white text-slate-900 rounded-3xl p-8 shadow-2xl">
          <div className="flex gap-2 mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-900 text-yellow-300">
              Parent / Student
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
              Staff
            </span>
          </div>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Registered Mobile / ID"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="password"
              placeholder="Password / OTP"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <div className="flex items-center justify-between text-xs text-slate-500">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-slate-300" />
                Remember me
              </label>
              <button type="button" className="hover:text-blue-700">
                Forgot Password?
              </button>
            </div>

            <button
              type="button"
              className="w-full mt-2 inline-flex justify-center items-center px-4 py-2.5 rounded-xl bg-blue-900 text-yellow-300 font-semibold hover:bg-blue-950 transition"
            >
              Login
            </button>
          </form>

          <p className="mt-4 text-[11px] text-slate-500">
            Note: This is a design prototype. Integrate with your actual school
            ERP / portal for real login.
          </p>
        </div>
      </div>
    </section>
  );
}
