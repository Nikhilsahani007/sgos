export default function FacultySection() {
  const facultyList = [
    {
      name: "Mrs. Neha Reddy",
      role: "Head of English",
      imgSrc: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Mr. Sanjay Pillai",
      role: "Mathematics Coordinator",
      imgSrc: "https://randomuser.me/api/portraits/men/34.jpg",
    },
    {
      name: "Dr. Aarti Verma",
      role: "Principal",
      imgSrc: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  return (
    <section>
      <h2 className="text-3xl font-semibold mb-6 text-blue-700">Faculty & Staff</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {facultyList.map(({ name, role, imgSrc }) => (
          <div
            key={name}
            className="bg-white rounded shadow p-4 flex flex-col items-center text-center"
          >
            <img
              src={imgSrc}
              alt={name}
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="text-gray-600">{role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}