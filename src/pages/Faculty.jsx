// src/pages/Faculty.jsx
const staff = [
  {
    name: "Mr. K. Indra Reddy",
    role: "Chairman",
    img: "/staff/indra.jpg",
  },
  {
    name: "Mrs. K. Naga Laxmi",
    role: "Vice Chairperson",
    img: "/staff/nagalaxmi.jpg",
  },
  {
    name: "S. Nagarjuna Reddy",
    role: "Director",
    img: "/staff/nagarjuna.jpg",
  },
];

export default function Faculty() {
  return (
    <section className="space-y-10">
      <div className="text-center space-y-3">
        <h1 className="section-title">Leadership & Faculty</h1>
        <p className="max-w-3xl mx-auto text-sg-blue/80">
          Guided by an experienced management and a dedicated team of educators,
          Siddartha Model High School focuses on academic excellence, values, and
          holistic development.
        </p>
      </div>

      {/* Top leadership cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {staff.map((s) => (
          <article
            key={s.name}
            className="card-poster overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-transform duration-300"
          >
            {/* big rectangular photo */}
            <div className="relative">
              <img
                src={s.img}
                alt={s.name}
                className="w-full h-64 object-cover"
              />

              <div className="absolute bottom-3 left-3 bg-sg-blue/90 text-sg-cream text-xs font-semibold px-3 py-1 rounded-full shadow-poster">
                {s.role}
              </div>
            </div>

            <div className="px-5 py-4 space-y-1">
              <h3 className="text-lg font-bold text-sg-blue-dark">{s.name}</h3>
              <p className="text-sm text-sg-blue/80">
                Providing strategic vision and leadership to the institution.
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
