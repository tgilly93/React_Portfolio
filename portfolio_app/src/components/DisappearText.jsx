import React from "react";
import { motion } from "framer-motion";


const DisappearText = ({ text }) => {
    const disappearVariants = {
        hidden: { opacity: 0, y: 20, filter: "blur(10px)", scale: 1.1 },
        visible: { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 },
        exit: { opacity: 0, y: -20, filter: "blur(10px)", scale: 0.9 }
    };

    return (
        <motion.h1
        variants={disappearVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.2, ease: "easeInOut" }}
        style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
        }}
        >{text}
        </motion.h1>
    );
};

export default DisappearText;