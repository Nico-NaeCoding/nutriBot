import { motion } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './Pages/Home'; // 경로 확인 필요
import Chat from './Pages/Chat'; // 경로 확인 필요

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route
                    path="/"
                    element={
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Home />
                        </motion.div>
                    }
                />
                <Route
                    path="/chat"
                    element={
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -100, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <Chat />
                        </motion.div>
                    }
                />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;
