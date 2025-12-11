import { motion } from 'motion/react';
import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Mail, href: 'mailto:info@picniceventosmgta.com', label: 'Email' },
  ];

  const footerLinks = [
    { title: 'Paquetes' },
    { title: 'Estaciones', },
    { title: 'FAQ', },
    { title: 'Términos', },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-transparent to-[var(--color-soft-sand)] pt-12 md:pt-20 pb-8 md:pb-12 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-5 md:px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h4 className="text-display mb-4">
              Picnic <span className="text-[var(--color-dusty-rose)]">Eventos Mgta</span>
            </h4>
            <p className="text-[var(--color-graphite)]/70 mb-6 max-w-md leading-relaxed">
              Creamos experiencias de lujo personalizadas que transforman tus momentos especiales en recuerdos inolvidables.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-[var(--color-graphite)]/70">
                <MapPin className="w-4 h-4 text-[var(--color-dusty-rose)]" />
                <span>Margarita Island, Venezuela</span>
              </div>
              <div className="flex items-center gap-3 text-[var(--color-graphite)]/70">
                <Phone className="w-4 h-4 text-[var(--color-dusty-rose)]" />
                <span>+123 456 7890</span>
              </div>
              <div className="flex items-center gap-3 text-[var(--color-graphite)]/70">
                <Mail className="w-4 h-4 text-[var(--color-dusty-rose)]" />
                <span>info@picniceventos.com</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {footerLinks.slice(0, 2).map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-[var(--color-graphite)]/70 hover:text-[var(--color-dusty-rose)] transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="mb-6">Información</h4>
            <ul className="space-y-3">
              {footerLinks.slice(2).map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-[var(--color-graphite)]/70 hover:text-[var(--color-dusty-rose)] transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-[var(--color-graphite)]/10"
        >
          {/* Copyright */}
          <p className="text-sm text-[var(--color-graphite)]/60">
            © 2025 Picnic Eventos Mgta. Todos los derechos reservados.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full border-2 border-[var(--color-graphite)]/20 flex items-center justify-center hover:border-[var(--color-dusty-rose)] hover:bg-[var(--color-dusty-rose)] hover:text-white transition-all duration-300 group"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[var(--color-dusty-rose)]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[var(--color-dusty-rose)]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
    </footer>
  );
}