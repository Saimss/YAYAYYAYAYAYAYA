import { motion } from 'framer-motion';

interface PetalProps {
  index: number;
  total: number;
  onClick: () => void;
}

export default function Petal({ index, total, onClick }: PetalProps) {
  const angle = (index / total) * 2 * Math.PI;
  const distance = 180;
  const x = Math.cos(angle) * distance;
  const y = Math.sin(angle) * distance;

  return (
    <motion.div
      className="absolute cursor-pointer"
      style={{
        left: '50%',
        top: '50%',
      }}
      initial={{
        x: 0,
        y: 0,
        rotate: 0,
        scale: 0,
      }}
      animate={{
        x,
        y,
        rotate: (angle * 180) / Math.PI,
        scale: 1,
      }}
      transition={{
        type: 'spring',
        damping: 12,
        stiffness: 100,
        delay: index * 0.05,
      }}
      whileHover={{
        scale: 1.3,
        rotate: (angle * 180) / Math.PI + 10,
        filter: 'drop-shadow(0 0 15px rgba(244, 63, 94, 0.8))',
      }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
    >
      <svg
        width="60"
        height="80"
        viewBox="0 0 60 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <defs>
          <linearGradient id={`petalGradient${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fda4af" />
            <stop offset="50%" stopColor="#fb7185" />
            <stop offset="100%" stopColor="#f43f5e" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 30 5 Q 10 20, 15 45 Q 20 60, 30 75 Q 40 60, 45 45 Q 50 20, 30 5 Z"
          fill={`url(#petalGradient${index})`}
          stroke="#be123c"
          strokeWidth="1"
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 0.1,
          }}
        />
      </svg>
    </motion.div>
  );
}
