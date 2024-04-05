import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./TopBanner.css"

function TopBanner() {
    const information = [
        "Return & exchange shipping always on us",
        "Free shipping only for a limited time",
        "Get yourself something exciting now",
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        // Change the string every 3 seconds
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % information.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [information.length]);

    return (
        <div className="banner">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                >
                    {information[index]}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default TopBanner;
