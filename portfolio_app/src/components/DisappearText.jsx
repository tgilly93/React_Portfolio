import React from "react";
import { motion } from "framer-motion";


const DisappearText = ({ text, keyProp, duration = 0.8 }) => {
    const disappearVariants = {
        hidden: { opacity: 0, y: 20, filter: "blur(10px)", scale: 1.1 },
        visible: { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 },
        exit: { opacity: 0, y: -20, filter: "blur(10px)", scale: 0.9 }
    };

    return (
        <motion.h1
        key={keyProp}
        variants={disappearVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration }}
        >{text}
        </motion.h1>
    );
};

export default DisappearText;