import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import DisappearText from "./DisappearText";

const RotatingText = ({ textArray, interval = 3000 }) => {
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        const textChangeInterval = setInterval(() => {
           setTextIndex((prevIndex) => (prevIndex + 1) % textArray.length); 
        }, interval);

        return () => clearInterval(textChangeInterval);
    }, [interval, textArray]);

    return (
        <AnimatePresence mode="wait">
            <DisappearText 
            key={textArray[textIndex]}
            text={textArray[textIndex]} 
            />
        </AnimatePresence>
    );
};

export default RotatingText;