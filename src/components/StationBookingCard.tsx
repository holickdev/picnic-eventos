import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, ShoppingBag } from 'lucide-react';
import { addStationToCart } from '@/stores/cartStore';
import { DateTimeSelector } from './DateTimeSelector';

interface StationBookingCardProps {
    stationData: {
        id: string;
        title: string;
    };
}

export function StationBookingCard({ stationData }: StationBookingCardProps) {
    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleSendToWhatsApp = () => {
        setShowDatePicker(true);
    };

    const handleDateTimeConfirm = (date: string, time: string, location: string, guests?: number) => {
        const dateObj = new Date(date);
        const formattedDate = dateObj.toLocaleDateString('es-ES', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });

        let message = `¡Hola! Quiero agregar la ${stationData.title} a mi evento.\\n\\nFecha del evento: ${formattedDate}\\nHora: ${time}\\nUbicación: ${location}`;

        if (guests) {
            message += `\\nCantidad de invitados: ${guests}`;
        }

        message += `\\n\\n¿Podrían darme más información?`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/584123588120?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');

        setShowDatePicker(false);
    };

    const handleAddToCart = () => {
        addStationToCart(stationData.id);
    };

    return (
        <>
            <div className="sticky top-24 bg-white rounded-3xl shadow-2xl p-8 border border-[var(--color-dusty-rose)]/10">
                <h4 className="mb-6">Agrega esta Estación</h4>

                <div className="space-y-4 mb-6">
                    <div className="p-4 bg-[var(--color-dusty-rose)]/20 rounded-2xl">
                        <p className="text-sm text-[var(--color-graphite)]/70 text-center">
                            Precio bajo consulta según cantidad de personas
                        </p>
                    </div>

                    <div className="p-4 bg-[var(--color-dusty-rose)]/10 rounded-2xl">
                        <p className="text-sm text-[var(--color-graphite)]/70">
                            ✨ Perfecto como complemento a tu paquete
                        </p>
                    </div>
                </div>

                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleSendToWhatsApp}
                    className="w-full py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 mb-4"
                >
                    <Send className="w-5 h-5" />
                    <span>Consultar por WhatsApp</span>
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleAddToCart}
                    className="w-full py-4 bg-[var(--color-dusty-rose)] text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                    <ShoppingBag className="w-5 h-5" />
                    <span>Añadir al Carrito</span>
                </motion.button>
            </div>

            {/* Date Time Picker */}
            <DateTimeSelector
                isOpen={showDatePicker}
                onClose={() => setShowDatePicker(false)}
                onConfirm={handleDateTimeConfirm}
                requiresGuests={true}
            />
        </>
    );
}
