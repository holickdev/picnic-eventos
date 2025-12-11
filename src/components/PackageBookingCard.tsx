import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, ShoppingBag } from 'lucide-react';
import { addPackageToCart } from '@/stores/cartStore';
import { DateTimeSelector } from './DateTimeSelector';

interface PackageBookingCardProps {
    packageData: {
        id: string;
        title: string;
        price: number;
        capacity: string;
    };
}

export function PackageBookingCard({ packageData }: PackageBookingCardProps) {
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

        let message = `¡Hola! Quiero reservar el ${packageData.title} para ${packageData.capacity.toLowerCase()}.\n\nFecha del evento: ${formattedDate}\nHora: ${time}\nUbicación: ${location}`;

        if (guests) {
            message += `\nCantidad de invitados: ${guests}`;
        }

        message += `\n\n¿Podrían confirmar disponibilidad?`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/584123588120?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');

        setShowDatePicker(false);
    };

    const handleAddToCart = () => {
        addPackageToCart(packageData.id);
    };

    return (
        <>
            <div className="sticky top-24 bg-white rounded-3xl shadow-2xl p-8 border border-[var(--color-dusty-rose)]/10">
                <h4 className="mb-6">Reserva tu Experiencia</h4>

                <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center p-4 bg-[var(--color-soft-sand)]/20 rounded-2xl">
                        <span className="text-[var(--color-graphite)]/70">Precio</span>
                        <span className="text-2xl text-[var(--color-dusty-rose)]">${packageData.price}</span>
                    </div>

                    <div className="p-4 bg-[var(--color-dusty-rose)]/10 rounded-2xl">
                        <p className="text-sm text-[var(--color-graphite)]/70">
                            💡 50% de anticipo para reservar
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
                    <span>Reservar por WhatsApp</span>
                </motion.button>

                <p className="text-xs text-center text-[var(--color-graphite)]/60 mb-4">
                    Te responderemos en minutos
                </p>

                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleAddToCart}
                    className="w-full py-4 bg-gradient-to-r from-[var(--color-dusty-rose)] to-[var(--color-dusty-rose)]/80 text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                    <ShoppingBag className="w-5 h-5" />
                    <span>Añadir al carrito</span>
                </motion.button>
            </div>

            {/* Date Time Picker */}
            <DateTimeSelector
                isOpen={showDatePicker}
                onClose={() => setShowDatePicker(false)}
                onConfirm={handleDateTimeConfirm}
            />
        </>
    );
}
