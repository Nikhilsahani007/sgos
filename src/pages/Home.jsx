import chairmanImg from "../assets/Chairman.jpg";
import viceImg from "../assets/Vice Chairperson.jpg";
import directorImg from "../assets/Director.jpg";
import campusMain from "../assets/SMHS.jpg";

export default function Home() {
  const faculty = [
    {
      name: "Mr. K. Indra Reddy",
      role: "Chairman",
      img: chairmanImg,
    },
    {
      name: "Mrs. K. Naga Laxmi",
      role: "Vice Chairperson",
      img: viceImg,
    },
    {
      name: "S. Nagarjuna Reddy",
      role: "Director",
      img: directorImg,
    },
  ];

  return (
    <section className="space-y-16">
      {/* HERO */}
      <section className="grid md:grid-cols-[1.6fr,1.2fr] gap-10 items-center">
        <div>
          <p className="uppercase tracking-[0.2em] text-xs font-semibold text-sg-blue-dark/70 mb-2">
            Since 1991 • Vanasthalipuram
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-sg-blue-dark leading-tight mb-4">
            Siddartha Group of Schools
          </h1>
          <p className="text-lg text-sg-blue-dark/80 mb-6">
            A trusted institution for{" "}
            <span className="font-semibold">holistic student development</span>,
            blending strong academics, discipline, values, and skills like
            robotics, digital literacy, and communication.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/admissions"
              className="px-6 py-3 rounded-xl bg-sg-blue text-sg-cream font-semibold shadow-md hover:bg-sg-blue-dark transition"
            >
              Admissions 2025–26
            </a>
            <a
              href="/fees"
              className="px-6 py-3 rounded-xl bg-white border border-sg-blue/20 text-sg-blue-dark font-semibold shadow-sm hover:bg-sg-cream/80 transition"
            >
              View Fee Structure
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-6 -left-6 w-28 h-28 bg-sg-blue/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-8 -right-4 w-40 h-40 bg-sg-gold/20 rounded-full blur-3xl" />

          <div className="relative rounded-3xl overflow-hidden shadow-poster border-4 border-sg-gold/80">
            <img
              src={campusMain}
              alt="Siddartha school main campus"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS from poster */}
      <section className="grid md:grid-cols-3 gap-6">
        <div className="card-poster p-6">
          <h2 className="text-xl font-bold text-sg-blue-dark mb-2">
            Robotics
          </h2>
          <p className="text-sg-blue-dark/80 text-sm">
            Combine theoretical understanding with practical, real-world
            applications to build creativity, problem-solving and coding skills.
          </p>
        </div>

        <div className="card-poster p-6">
          <h2 className="text-xl font-bold text-sg-blue-dark mb-2">
            Accelerated English Program
          </h2>
          <p className="text-sg-blue-dark/80 text-sm">
            Intensive language support that strengthens grammar, vocabulary and
            communication – helping students gain fluency quickly.
          </p>
        </div>

        <div className="card-poster p-6">
          <h2 className="text-xl font-bold text-sg-blue-dark mb-2">
            Skill Development Programmes
          </h2>
          <p className="text-sg-blue-dark/80 text-sm">
            Digital literacy, AI concepts, public speaking, writing skills and
            leadership activities to prepare students for the future.
          </p>
        </div>
      </section>

      {/* BRANCHES (from poster) */}
      <section className="card-poster p-6 md:p-8">
        <h2 className="text-2xl font-bold text-sg-blue-dark mb-4">
          Our Branches
        </h2>
        <div className="grid md:grid-cols-3 gap-4 text-sm text-sg-blue-dark/90">
          <div>
            <h3 className="font-semibold">Siddartha High School</h3>
            <p>Near Ganesh Temple, Vanasthalipuram</p>
            <p>Ph: 7780197872</p>
          </div>
          <div>
            <h3 className="font-semibold">Siddartha Model High School</h3>
            <p>Kamala Nagar, Vanasthalipuram</p>
            <p>Ph: 8309863928</p>
          </div>
          <div>
            <h3 className="font-semibold">Siddartha Grammar High School</h3>
            <p>Vaidehinagar, Vanasthalipuram</p>
            <p>Ph: 63015611480</p>
          </div>
        </div>
      </section>

      {/* FACULTY & LEADERSHIP – moved from Faculty page */}
      <section className="space-y-6">
        <h2 className="section-title">Leadership &amp; Faculty</h2>
        <p className="text-center max-w-3xl mx-auto text-sg-blue-dark/75">
          Experienced management and dedicated teachers who continuously guide
          students towards academic excellence and character building.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {faculty.map((m) => (
            <article
              key={m.name}
              className="bg-white/90 rounded-3xl border border-sg-gold/70 shadow-poster overflow-hidden flex flex-col"
            >
              <div className="relative h-56">
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-5 py-4 text-center">
                <h3 className="text-lg font-bold text-sg-blue-dark">
                  {m.name}
                </h3>
                <p className="text-sg-blue-dark/80 text-sm">{m.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
