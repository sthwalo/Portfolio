import type { AppProps } from 'next/app';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from '../components/ThemeProvider';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <AnimatePresence mode='wait'>
          <motion.div
            key={router.route}
            initial="initialState"
            animate="animateState"
            exit="exitState"
            transition={{
              duration: 0.75,
            }}
            variants={{
              initialState: {
                opacity: 0,
              },
              animateState: {
                opacity: 1,
              },
              exitState: {
                opacity: 0,
              },
            }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
