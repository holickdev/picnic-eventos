import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Paquetes", href: "/#paquetes" },
    { label: "Estaciones", href: "/#estaciones" },
    { label: "FAQ", href: "/faq" },
    { label: "Términos", href: "/terminos" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-5 md:px-6 lg:px-12 py-5 md:py-6 flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="relative z-10 cursor-pointer"
          >
            <h4 className="text-xl md:text-display italic tracking-wide">
              Picnic{" "}
              <span className="text-[var(--color-dusty-rose)]">Eventos</span>
            </h4>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <motion.a
                href={item.href}
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="relative text-sm tracking-wide hover:text-[var(--color-dusty-rose)] transition-colors duration-300 group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--color-dusty-rose)] transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          {/* Hamburger Menu */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-50 p-2 rounded-full hover:bg-white/20 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-white/95 backdrop-blur-2xl" />
            <div className="relative h-full flex flex-col justify-center items-center gap-8 px-8">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                  }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-display text-4xl hover:text-[var(--color-dusty-rose)] transition-colors duration-300"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
