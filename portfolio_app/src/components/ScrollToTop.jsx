import React, {useEffect} from "react";
import { useLocation, useNavigationType } from "react-router-dom"; 

const ScrollToTop = () => {
    const { pathname } = useLocation();
    const navType = useNavigationType();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname, navType]);
    return null;
};

export default ScrollToTop;