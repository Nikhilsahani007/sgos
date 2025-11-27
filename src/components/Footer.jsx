export default function Footer() {
  return (
    <footer className="mt-16 bg-sg-blue-dark text-sg-cream pt-10 pb-4">
      <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <h3 className="font-bold text-lg mb-2">Siddartha Group of Schools</h3>
          <p className="text-sg-cream/80">
            Since 1991, delivering strong academics, values, and holistic
            development for every child.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-sg-cream/80">
            Vanasthalipuram, Hyderabad<br />
            Phone: 7780197872 / 8309863928<br />
            Email: siddharthaschoolsvsp84@gmail.com
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sg-cream/80">
            <li>Admissions 2025–26</li>
            <li>Fee Structure</li>
            <li>Transport Facility (Auto / Van / Bus)</li>
            <li>Career Guidance &amp; Counselling</li>
          </ul>
        </div>
      </div>

      <div className="mt-6 border-t border-sg-cream/20 pt-3 text-center text-xs text-sg-cream/70">
        © {new Date().getFullYear()} Siddartha Group of Schools. All rights
        reserved.
      </div>
    </footer>
  );
}
