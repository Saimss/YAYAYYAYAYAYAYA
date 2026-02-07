import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { type Message } from '../data/messages';

interface PetalOverlayProps {
  message: Message | null;
  onClose: () => void;
}

export default function PetalOverlay({ message, onClose }: PetalOverlayProps) {
  if (!message) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        <motion.div
          className={`relative max-w-2xl mx-4 p-12 rounded-3xl bg-gradient-to-br ${message.color} shadow-2xl`}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0, rotate: 180 }}
          transition={{
            type: 'spring',
            damping: 15,
            stiffness: 150,
          }}
        >
          <motion.button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="w-6 h-6 text-white" />
          </motion.button>

          <motion.div
            className="mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <svg
              width="120"
              height="160"
              viewBox="0 0 60 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto filter drop-shadow-2xl"
            >
              <defs>
                <linearGradient id="overlayPetalGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#ffffff" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.5" />
                </linearGradient>
              </defs>
              <motion.path
                d="M 30 5 Q 10 20, 15 45 Q 20 60, 30 75 Q 40 60, 45 45 Q 50 20, 30 5 Z"
                fill="url(#overlayPetalGradient)"
                stroke="#ffffff"
                strokeWidth="2"
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </svg>
          </motion.div>

          <motion.p
            className="text-white text-2xl md:text-3xl font-light text-center leading-relaxed italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            "{message.text}"
          </motion.p>

          <motion.div
            className="mt-8 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 rounded-full bg-white/40"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
