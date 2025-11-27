const managementData = [
  {
    name: "Mr. K Indra Reddy",
    role: "Chairman",
    qualification: "B.Sc, B.Ed",
  },
  {
    name: "Mrs. K Naga Laxmi",
    role: "Vice Chairperson",
    qualification: "M.A, B.Ed",
  },
  {
    name: "Mrs. L Shauni Sanghamitra",
    role: "Director",
    qualification: "B.Tech, B.Ed",
  },
];

export default function ManagementSection() {
  return (
    <section id="management" className="mb-12 bg-white p-8 rounded-lg shadow-lg max-w-6xl mx-auto">
      <h2 className="mb-6 text-4xl font-bold text-blue-700">Management Team</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {managementData.map(({ name, role, qualification }) => (
          <div
            key={name}
            className="border p-6 rounded hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">{name}</h3>
            <p className="mb-1">{qualification}</p>
            <p className="italic text-gray-600">{role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}