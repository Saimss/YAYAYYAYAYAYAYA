import { useState } from 'react';
import { motion } from 'framer-motion';
import Rose from './components/Rose';
import Petal from './components/Petal';
import PetalOverlay from './components/PetalOverlay';
import { messages, type Message } from './data/messages';

type ViewState = 'rose' | 'petals';

function App() {
  const [view, setView] = useState<ViewState>('rose');
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  const handleRoseClick = () => {
    setView('petals');
  };

  const handlePetalClick = (message: Message) => {
    setSelectedMessage(message);
  };

  const handleCloseOverlay = () => {
    setSelectedMessage(null);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-rose-500 via-pink-400 to-red-300">
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(244, 63, 94, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(251, 113, 133, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 80%, rgba(244, 63, 94, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(244, 63, 94, 0.3) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
        <motion.h1
          className="text-5xl md:text-7xl font-light text-white text-center drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
        <div className="text-bold text-pink-200 drop-shadow-md">
          Phool for My Fool
        </div>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-white/90 text-center mt-2 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          
        </motion.p>
      </div>

      <div className="relative w-full h-screen flex items-center justify-center">
        {view === 'rose' && <Rose onClick={handleRoseClick} />}

        {view === 'petals' && (
          <div className="relative w-full h-full">
            {messages.map((message, index) => (
              <Petal
                key={message.id}
                index={index}
                total={messages.length}
                onClick={() => handlePetalClick(message)}
              />
            ))}
          </div>
        )}
      </div>

      <PetalOverlay message={selectedMessage} onClose={handleCloseOverlay} />

      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-6 bg-gradient-to-b from-pink-300 to-rose-400 rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            rotate: [0, 360],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}

export default App;
