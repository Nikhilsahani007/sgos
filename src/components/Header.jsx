import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const navLinkBase =
  "px-3 py-2 text-sm font-semibold hover:text-sg-gold transition-colors";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const navigate = useNavigate();

  const closeAll = () => {
    setMobileOpen(false);
    setOpenMenu(null);
  };

  const goAdmissions = () => {
    navigate("/admissions");
    closeAll();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-sg-blue text-sg-cream shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-6 py-3">
        {/* Logo + title */}
        <Link to="/" className="flex items-center gap-3" onClick={closeAll}>
          <img
            src={logo}
            alt="Siddhartha Group of Schools logo"
            className="h-10 w-10 rounded-full border-2 border-sg-gold bg-white object-cover"
          />
          <div className="leading-tight">
            <div className="text-lg md:text-xl font-extrabold tracking-wide">
              Siddhartha Group of Schools
            </div>
            <div className="text-xs md:text-sm text-sg-cream/80">
              Holistic Student Development
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? "text-sg-gold" : ""}`
            }
          >
            Home
          </NavLink>

          {/* Admissions dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("admissions")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button
              className={`${navLinkBase} flex items-center gap-1`}
              type="button"
              onClick={goAdmissions}
            >
              Admissions
              <span className="text-xs">▼</span>
            </button>

            {openMenu === "admissions" && (
              <div className="absolute right-0 mt-2 w-52 rounded-xl bg-white text-sg-blue-dark shadow-lg border border-sg-cream/60">
                <NavLink
                  to="/admissions"
                  className="block px-4 py-2 text-sm hover:bg-sg-cream/80"
                  onClick={closeAll}
                >
                  Admissions Overview
                </NavLink>
                <NavLink
                  to="/fees"
                  className="block px-4 py-2 text-sm hover:bg-sg-cream/80"
                  onClick={closeAll}
                >
                  Fee Structure
                </NavLink>
              </div>
            )}
          </div>

          {/* Gallery (was Blog) */}
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? "text-sg-gold" : ""}`
            }
          >
            Gallery
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? "text-sg-gold" : ""}`
            }
          >
            Contact
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? "text-sg-gold" : ""}`
            }
          >
            Login
          </NavLink>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-sg-blue-dark/95 border-t border-sg-cream/20">
          <nav className="flex flex-col px-4 py-3 gap-2">
            <NavLink
              to="/"
              onClick={closeAll}
              className={({ isActive }) =>
                `${navLinkBase} block ${isActive ? "text-sg-gold" : ""}`
              }
            >
              Home
            </NavLink>

            {/* Mobile Admissions – clickable */}
            <button
              onClick={goAdmissions}
              className="mt-1 mb-1 text-[11px] uppercase tracking-wide text-sg-cream/80 text-left"
            >
              Admissions
            </button>
            <NavLink
              to="/admissions"
              onClick={closeAll}
              className={`${navLinkBase} block pl-5 text-sm`}
            >
              Admissions Overview
            </NavLink>
            <NavLink
              to="/fees"
              onClick={closeAll}
              className={`${navLinkBase} block pl-5 text-sm`}
            >
              Fee Structure
            </NavLink>

            <NavLink
              to="/gallery"
              onClick={closeAll}
              className={({ isActive }) =>
                `${navLinkBase} block ${isActive ? "text-sg-gold" : ""}`
              }
            >
              Gallery
            </NavLink>

            <NavLink
              to="/contact"
              onClick={closeAll}
              className={({ isActive }) =>
                `${navLinkBase} block ${isActive ? "text-sg-gold" : ""}`
              }
            >
              Contact
            </NavLink>

            <NavLink
              to="/login"
              onClick={closeAll}
              className={({ isActive }) =>
                `${navLinkBase} block ${isActive ? "text-sg-gold" : ""}`
              }
            >
              Login
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
