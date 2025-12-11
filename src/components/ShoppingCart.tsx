import { useState } from 'react';
import { useStore } from '@nanostores/react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, X, Trash2, Send } from 'lucide-react';
import { DateTimeSelector } from './DateTimeSelector';
import { cartItems, removeFromCart, clearCart, initializeCart } from '@/stores/cartStore';

export interface CartItem {
  id: string;
  type: 'package' | 'station';
  title: string;
  price?: number; // Optional, stations don't have price
}

export function ShoppingCart() {
  const items = useStore(cartItems);

  const [isOpen, setIsOpen] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  useState(() => {
    initializeCart();
  });

  const packageItem = items.find(item => item.type === 'package');
  const stationItems = items.filter(item => item.type === 'station');
  const total = packageItem?.price || 0; // Only package price
  const hasStations = stationItems.length > 0;

  const handleSendToWhatsApp = () => {
    if (items.length === 0) return;
    // Show date picker first
    setShowDatePicker(true);
  };

  const handleDateTimeConfirm = (date: string, time: string, location: string, guests?: number) => {
    if (items.length === 0) return;

    // Format date to readable format
    const dateObj = new Date(date);
    const formattedDate = dateObj.toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    let message = '¡Hola, quiero reservar! \n\n';

    if (packageItem) {
      message += `Paquete: ${packageItem.title} \n`;
    }

    if (stationItems.length > 0) {
      message += 'Estaciones:';
      stationItems.forEach(item => {
        message += `${item.title}\n`;
      });
    }

    message += `\nFecha del evento: ${formattedDate}\nHora: ${time}\nUbicación: ${location}`;

    if (guests) {
      message += `\nCantidad de invitados: ${guests}`;
    }

    message += `\n\n¿Podrían confirmar disponibilidad?`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/584123588120?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');

    // Clear cart and close everything after sending
    clearCart();
    setShowDatePicker(false);
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Cart Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[var(--color-dusty-rose)] to-[var(--color-champagne)] rounded-full shadow-2xl flex items-center justify-center text-white hover:shadow-3xl transition-all"
      >
        <ShoppingBag className="w-6 h-6 md:w-7 md:h-7" />
        {items.length > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-6 h-6 md:w-7 md:h-7 bg-red-500 rounded-full flex items-center justify-center text-xs shadow-lg"
          >
            {items.length}
          </motion.span>
        )}
      </motion.button>

      {/* Cart Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            {/* Cart Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed right-0 top-0 bottom-0 w-full sm:w-[450px] bg-white shadow-2xl z-50 flex flex-col"
            >
              {/* Header */}
              <div className="p-6 border-b border-[var(--color-graphite)]/10">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="flex items-center gap-3">
                    <ShoppingBag className="w-6 h-6 text-[var(--color-dusty-rose)]" />
                    Tu Reserva
                  </h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-10 h-10 rounded-full hover:bg-[var(--color-graphite)]/5 flex items-center justify-center transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-sm text-[var(--color-graphite)]/70">
                  {items.length === 0 ? 'Tu carrito está vacío' : `${items.length} item${items.length > 1 ? 's' : ''} en tu carrito`}
                </p>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6">
                {items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <div className="w-24 h-24 bg-[var(--color-soft-sand)]/30 rounded-full flex items-center justify-center mb-4">
                      <ShoppingBag className="w-12 h-12 text-[var(--color-graphite)]/30" />
                    </div>
                    <p className="text-[var(--color-graphite)]/70">
                      Agrega un paquete o estaciones para comenzar
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {/* Package Section */}
                    {packageItem && (
                      <div>
                        <h4 className="text-sm text-[var(--color-graphite)]/70 mb-3">Paquete</h4>
                        <motion.div
                          layout
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, x: -100 }}
                          className="flex items-start gap-4 p-4 bg-gradient-to-br from-[var(--color-dusty-rose)]/5 to-[var(--color-dusty-rose)]/10 rounded-2xl border border-[var(--color-dusty-rose)]/10"
                        >
                          <div className="flex-1">
                            <h4 className="mb-1">{packageItem.title}</h4>
                            <p className="text-sm text-[var(--color-dusty-rose)]">${packageItem.price}</p>
                          </div>
                          <button
                            onClick={() => removeFromCart(packageItem.id)}
                            className="w-8 h-8 rounded-full hover:bg-red-50 flex items-center justify-center transition-colors"
                          >
                            <Trash2 className="w-4 h-4 text-red-500" />
                          </button>
                        </motion.div>
                      </div>
                    )}

                    {/* Stations Section */}
                    {stationItems.length > 0 && (
                      <div>
                        <h4 className="text-sm text-[var(--color-graphite)]/70 mb-3">Estaciones</h4>
                        <div className="space-y-3">
                          {stationItems.map((item) => (
                            <motion.div
                              key={item.id}
                              layout
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, x: -100 }}
                              className="flex items-start gap-4 p-4 bg-[var(--color-soft-sand)]/20 rounded-2xl"
                            >
                              <div className="flex-1">
                                <h4 className="text-sm mb-1">{item.title}</h4>
                                <p className="text-xs text-[var(--color-graphite)]/60">Precio bajo consulta</p>
                              </div>
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="w-8 h-8 rounded-full hover:bg-red-50 flex items-center justify-center transition-colors"
                              >
                                <Trash2 className="w-4 h-4 text-red-500" />
                              </button>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Footer */}
              {items.length > 0 && (
                <div className="p-6 border-t border-[var(--color-graphite)]/10 bg-gradient-to-b from-transparent to-[var(--color-soft-sand)]/20">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleSendToWhatsApp}
                    className="w-full py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 mb-3"
                  >
                    <Send className="w-5 h-5" />
                    <span>Enviar Reserva a WhatsApp</span>
                  </motion.button>

                  <button
                    onClick={clearCart}
                    className="w-full py-3 text-sm text-[var(--color-graphite)]/70 hover:text-red-500 transition-colors"
                  >
                    Vaciar Carrito
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Date Time Picker */}
      <DateTimeSelector
        isOpen={showDatePicker}
        onClose={() => setShowDatePicker(false)}
        onConfirm={handleDateTimeConfirm}
        requiresGuests={hasStations}
      />
    </>
  );
}