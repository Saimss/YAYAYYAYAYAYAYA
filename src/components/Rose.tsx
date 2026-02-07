import { motion } from 'framer-motion';


interface RoseProps {
  onClick: () => void;
}

export default function Rose({ onClick }: RoseProps) {
  return (
    <motion.div
      className="cursor-pointer relative"
      onClick={onClick}
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      whileHover={{
        scale: 1.1,
        filter: 'drop-shadow(0 0 20px rgba(244, 63, 94, 0.6))'
      }}
      whileTap={{ scale: 0.95 }}
    >
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="filter drop-shadow-2xl"
      >
        <motion.ellipse
          cx="100"
          cy="60"
          rx="12"
          ry="18"
          fill="#dc2626"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />

        <motion.ellipse
          cx="100"
          cy="70"
          rx="20"
          ry="25"
          fill="#ef4444"
          animate={{
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 3,
            delay: 0.2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />

        <motion.ellipse
          cx="100"
          cy="82"
          rx="28"
          ry="32"
          fill="#f87171"
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 3,
            delay: 0.4,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />

        <motion.ellipse
          cx="100"
          cy="95"
          rx="35"
          ry="38"
          fill="#fca5a5"
          animate={{
            scale: [1, 1.01, 1],
          }}
          transition={{
            duration: 3,
            delay: 0.6,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />

        <rect
          x="96"
          y="110"
          width="8"
          height="70"
          fill="#15803d"
          rx="4"
        />

        <ellipse
          cx="75"
          cy="130"
          rx="15"
          ry="8"
          fill="#16a34a"
          transform="rotate(-45 75 130)"
        />

        <ellipse
          cx="125"
          cy="145"
          rx="15"
          ry="8"
          fill="#16a34a"
          transform="rotate(45 125 145)"
        />
      </svg>

      <motion.div
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-rose-600 text-sm font-light whitespace-nowrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >

      </motion.div>
    </motion.div>
  );
}
