// src/pages/Gallery.jsx

import campusImg from "../assets/SMHS.jpg";
import scienceImg from "../assets/2.jpg";   // 👈 was 2.jpeg
import tripImg from "../assets/3.jpeg";     // 👈 3.jpeg is correct

const photos = [
  {
    title: "School Building",
    subtitle: "Modern Campus",
    img: campusImg,
  },
  {
    title: "Science Fair",
    subtitle: "Hands-on Learning",
    img: scienceImg,
  },
  {
    title: "Field Trip",
    subtitle: "Beyond Classrooms",
    img: tripImg,
  },
];

export default function Gallery() {
  return (
    <section className="space-y-8">
      <h1 className="section-title">Campus Life &amp; Activities</h1>

      <p className="text-center max-w-3xl mx-auto text-sg-blue-dark/70">
        A glimpse of our vibrant school life — science fairs, field trips,
        competitions, cultural events, and more that shape every Siddartha
        student.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {photos.map((p) => (
          <article key={p.title} className="card-poster overflow-hidden">
            <div className="relative">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-52 object-cover rounded-2xl border-4 border-sg-gold/90"
              />

              <div className="absolute top-3 left-3 bg-sg-blue text-sg-cream text-xs font-semibold px-3 py-1 rounded-full shadow-poster">
                {p.subtitle}
              </div>
            </div>

            <div className="px-5 pb-5 pt-4">
              <h3 className="text-lg font-bold text-sg-blue-dark">
                {p.title}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
