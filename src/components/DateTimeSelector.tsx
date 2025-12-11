import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, X, Check, ChevronLeft, ChevronRight, MapPin, Users } from 'lucide-react';

interface DateTimeSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (date: string, time: string, location: string, guests?: number) => void;
  requiresGuests?: boolean;
}

export function DateTimeSelector({ isOpen, onClose, onConfirm, requiresGuests = false }: DateTimeSelectorProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [showDetailsForm, setShowDetailsForm] = useState(false);
  const [location, setLocation] = useState('');
  const [guests, setGuests] = useState('');

  const handleConfirm = () => {
    if (selectedDate && selectedTime && location && (!requiresGuests || guests)) {
      const dateStr = selectedDate.toISOString().split('T')[0];
      onConfirm(dateStr, selectedTime, location, requiresGuests ? parseInt(guests) : undefined);
      // Reset after confirm
      setSelectedDate(null);
      setSelectedTime('');
      setLocation('');
      setGuests('');
      setShowTimePicker(false);
      setShowDetailsForm(false);
    }
  };

  const handleTimeSelected = () => {
    if (selectedTime) {
      setShowDetailsForm(true);
    }
  };

  const handleCancel = () => {
    setSelectedDate(null);
    setSelectedTime('');
    setLocation('');
    setGuests('');
    setShowTimePicker(false);
    setShowDetailsForm(false);
    onClose();
  };

  // Calendar logic
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek };
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentMonth);

  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const selectDate = (day: number) => {
    const selected = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selected >= today) {
      setSelectedDate(selected);
      setShowTimePicker(true);
    }
  };

  const isToday = (day: number) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentMonth.getMonth() === today.getMonth() &&
      currentMonth.getFullYear() === today.getFullYear()
    );
  };

  const isPast = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const isSelected = (day: number) => {
    if (!selectedDate) return false;
    return (
      day === selectedDate.getDate() &&
      currentMonth.getMonth() === selectedDate.getMonth() &&
      currentMonth.getFullYear() === selectedDate.getFullYear()
    );
  };

  const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const dayNames = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

  // Time slots
  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00',
    '13:00', '14:00', '15:00', '16:00',
    '17:00', '18:00', '19:00', '20:00',
    '21:00', '22:00'
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCancel}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
          />

          {/* Floating Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-lg bg-white rounded-3xl shadow-2xl z-[70] max-h-[90vh] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-6 px-6 pt-6 md:px-8 md:pt-8 flex-shrink-0">
              <div>
                <h3 className="text-display mb-2">¿Cuándo es tu evento?</h3>
                <p className="text-sm text-[var(--color-graphite)]/70">
                  {!showTimePicker ? 'Selecciona la fecha' : 'Selecciona la hora'}
                </p>
              </div>
              <button
                onClick={handleCancel}
                className="w-10 h-10 rounded-full hover:bg-[var(--color-graphite)]/5 flex items-center justify-center transition-colors flex-shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto overflow-x-hidden flex-1 px-6 md:px-8">
              {/* Calendar View */}
              {!showTimePicker && (
                <div className="mb-6">
                  {/* Month Navigation */}
                  <div className="flex items-center justify-between mb-6">
                    <button
                      onClick={previousMonth}
                      className="w-10 h-10 rounded-full hover:bg-[var(--color-dusty-rose)]/10 flex items-center justify-center transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5 text-[var(--color-dusty-rose)]" />
                    </button>
                    <h4 className="text-display">
                      {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                    </h4>
                    <button
                      onClick={nextMonth}
                      className="w-10 h-10 rounded-full hover:bg-[var(--color-dusty-rose)]/10 flex items-center justify-center transition-colors"
                    >
                      <ChevronRight className="w-5 h-5 text-[var(--color-dusty-rose)]" />
                    </button>
                  </div>

                  {/* Day Names */}
                  <div className="grid grid-cols-7 gap-2 mb-3">
                    {dayNames.map((day) => (
                      <div
                        key={day}
                        className="text-center text-xs text-[var(--color-graphite)]/50 py-2"
                      >
                        {day}
                      </div>
                    ))}
                  </div>

                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-2">
                    {/* Empty cells for days before month starts */}
                    {Array.from({ length: startingDayOfWeek }).map((_, index) => (
                      <div key={`empty-${index}`} />
                    ))}

                    {/* Days of the month */}
                    {Array.from({ length: daysInMonth }).map((_, index) => {
                      const day = index + 1;
                      const past = isPast(day);
                      const today = isToday(day);
                      const selected = isSelected(day);

                      return (
                        <motion.button
                          key={day}
                          whileHover={!past ? { scale: 1.1 } : {}}
                          whileTap={!past ? { scale: 0.95 } : {}}
                          onClick={() => selectDate(day)}
                          disabled={past}
                          className={`
                            aspect-square rounded-xl flex items-center justify-center text-sm transition-all
                            ${past ? 'text-[var(--color-graphite)]/20 cursor-not-allowed' : ''}
                            ${!past && !selected ? 'hover:bg-[var(--color-dusty-rose)]/10 text-[var(--color-graphite)]' : ''}
                            ${selected ? 'bg-gradient-to-br from-[var(--color-dusty-rose)] to-[var(--color-champagne)] text-white shadow-lg' : ''}
                            ${today && !selected ? 'ring-2 ring-[var(--color-dusty-rose)]/30' : ''}
                          `}
                        >
                          {day}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Time Picker View */}
              {showTimePicker && !showDetailsForm && (
                <div className="mb-6">
                  <button
                    onClick={() => setShowTimePicker(false)}
                    className="flex items-center gap-2 text-sm text-[var(--color-dusty-rose)] mb-4 hover:gap-3 transition-all"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Cambiar fecha
                  </button>

                  {selectedDate && (
                    <div className="bg-gradient-to-br from-[var(--color-dusty-rose)]/5 to-[var(--color-champagne)]/5 rounded-2xl p-4 mb-4 border border-[var(--color-dusty-rose)]/10">
                      <div className="flex items-center gap-2 text-sm text-[var(--color-graphite)]/70">
                        <Calendar className="w-4 h-4 text-[var(--color-dusty-rose)]" />
                        {selectedDate.toLocaleDateString('es-ES', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </div>
                    </div>
                  )}

                  <label className="flex items-center gap-2 text-sm text-[var(--color-graphite)]/70 mb-3">
                    <Clock className="w-4 h-4 text-[var(--color-dusty-rose)]" />
                    Selecciona una hora
                  </label>

                  <div className="grid grid-cols-3 gap-3">
                    {timeSlots.map((time) => (
                      <motion.button
                        key={time}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          setSelectedTime(time);
                          setShowDetailsForm(true);
                        }}
                        className={`
                          py-3 px-4 rounded-xl text-sm transition-all
                          ${selectedTime === time
                            ? 'bg-gradient-to-br from-[var(--color-dusty-rose)] to-[var(--color-champagne)] text-white shadow-lg'
                            : 'bg-[var(--color-soft-sand)]/30 hover:bg-[var(--color-dusty-rose)]/10 text-[var(--color-graphite)]'
                          }
                        `}
                      >
                        {time}
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              {/* Details Form View */}
              {showDetailsForm && (
                <div className="mb-6">
                  <button
                    onClick={() => setShowDetailsForm(false)}
                    className="flex items-center gap-2 text-sm text-[var(--color-dusty-rose)] mb-4 hover:gap-3 transition-all"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Cambiar hora
                  </button>

                  <label className="flex items-center gap-2 text-sm text-[var(--color-graphite)]/70 mb-3 mt-4">
                    <MapPin className="w-4 h-4 text-[var(--color-dusty-rose)]" />
                    Ubicación del evento
                  </label>

                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-graphite)]/10 focus:border-[var(--color-dusty-rose)] text-[var(--color-graphite)] focus:outline-none transition-colors mb-4"
                    placeholder="Ej: Playa El Agua, Margarita"
                  />

                  {requiresGuests && (
                    <>
                      <label className="flex items-center gap-2 text-sm text-[var(--color-graphite)]/70 mb-3 mt-4">
                        <Users className="w-4 h-4 text-[var(--color-dusty-rose)]" />
                        Cantidad de invitados
                      </label>

                      <input
                        type="number"
                        min="1"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-graphite)]/10 focus:border-[var(--color-dusty-rose)] text-[var(--color-graphite)] focus:outline-none transition-colors"
                        placeholder="Ej: 15 personas"
                      />
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 px-6 pb-6 md:px-8 md:pb-8 pt-4 border-t border-[var(--color-graphite)]/5 flex-shrink-0">
              <button
                onClick={handleCancel}
                className="flex-1 py-3 border-2 border-[var(--color-graphite)]/20 text-[var(--color-graphite)] rounded-full hover:bg-[var(--color-graphite)]/5 transition-all"
              >
                Cancelar
              </button>
              <motion.button
                whileHover={{ scale: selectedDate && selectedTime ? 1.02 : 1 }}
                whileTap={{ scale: selectedDate && selectedTime ? 0.98 : 1 }}
                onClick={handleConfirm}
                disabled={!selectedDate || !selectedTime || !location || (requiresGuests && !guests)}
                className={`flex-1 py-3 rounded-full transition-all flex items-center justify-center gap-2 ${
                  selectedDate && selectedTime && location && (!requiresGuests || guests)
                    ? 'bg-gradient-to-r from-[var(--color-dusty-rose)] to-[var(--color-champagne)] text-white shadow-lg hover:shadow-xl'
                    : 'bg-[var(--color-graphite)]/10 text-[var(--color-graphite)]/40 cursor-not-allowed'
                }`}
              >
                <Check className="w-5 h-5" />
                Confirmar
              </motion.button>
            </div>

            {/* Decorative Elements */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-rose opacity-20 rounded-full blur-2xl pointer-events-none"
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}