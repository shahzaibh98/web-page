import { useState } from "react";

interface HeaderProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Header = ({ activeSection, scrollToSection }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="py-3 absolute top-6 left-1/2 transform -translate-x-1/2 w-[80%] bg-black/10 backdrop-blur-sm shadow-lg rounded-lg z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-[30px] md:text-[40px] lg:text-[45px] font-semibold text-white">
          LOGO
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-4 lg:space-x-6">
          {["home", "about-us", "owner", "tenants", "properties"].map(
            (section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={`px-3 md:px-4 py-2 transition-all duration-300 rounded-md ${
                    activeSection === section
                      ? "text-white"
                      : "text-gray-200 hover:text-white"
                  }`}
                >
                  {section
                    .replace("-", " ")
                    .replace(/\b\w/g, (char) => char.toUpperCase())}
                </button>
              </li>
            )
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-16 right-6 bg-black/80 backdrop-blur-md rounded-lg shadow-lg w-56 p-4 md:hidden">
            <ul className="flex flex-col space-y-4 text-center">
              {["home", "about-us", "owner", "tenants", "properties"].map(
                (section) => (
                  <li key={section}>
                    <button
                      onClick={() => {
                        scrollToSection(section);
                        setMenuOpen(false);
                      }}
                      className={`block w-full py-2 text-lg ${
                        activeSection === section
                          ? "text-white"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {section
                        .replace("-", " ")
                        .replace(/\b\w/g, (char) => char.toUpperCase())}
                    </button>
                  </li>
                )
              )}
              <li>
                <button className="w-full font-normal mt-4 px-6 py-2 bg-[#49C7AB] text-white rounded-lg shadow-md hover:bg-white transition-all">
                  Start Treatment
                </button>
              </li>
            </ul>
          </div>
        )}

        {/* Start Treatment Button */}
        <button className="hidden md:block font-normal px-4 md:px-6 py-2 bg-[#49C7AB] text-white rounded-lg shadow-md hover:bg-white transition-all">
          Start Treatment
        </button>
      </nav>
    </header>
  );
};

export default Header;
