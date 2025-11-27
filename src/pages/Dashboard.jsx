export default function Dashboard() {
  return (
    <section className="px-6 md:px-10 py-16 text-white">
      <h1 className="text-4xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white/10 border border-white/20 rounded-xl p-6 backdrop-blur-lg">
          <h2 className="text-xl font-semibold mb-2">Total Students</h2>
          <p className="text-3xl font-bold text-yellow-300">512</p>
        </div>

        <div className="bg-white/10 border border-white/20 rounded-xl p-6 backdrop-blur-lg">
          <h2 className="text-xl font-semibold mb-2">Teachers</h2>
          <p className="text-3xl font-bold text-yellow-300">42</p>
        </div>

        <div className="bg-white/10 border border-white/20 rounded-xl p-6 backdrop-blur-lg">
          <h2 className="text-xl font-semibold mb-2">Branches</h2>
          <p className="text-3xl font-bold text-yellow-300">3</p>
        </div>

      </div>

      <div className="mt-10 bg-white/10 border border-white/20 rounded-xl p-6 backdrop-blur-lg">
        <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
        <ul className="space-y-2 opacity-80">
          <li>New Admission request submitted.</li>
          <li>Fee receipt uploaded for Class 8.</li>
          <li>Exam schedule updated for Class 10.</li>
        </ul>
      </div>
    </section>
  );
}
