import React, {useEffect} from "react";
import { useLocation, useNavigationType } from "react-router-dom"; 

const ScrollToTop = () => {
    const { pathname } = useLocation();
    const navType = useNavigationType();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname, navType]);
    return null;
};

export default ScrollToTop;