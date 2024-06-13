import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedComponent = () => {
    const el = useRef(null);
    const typed = useRef(null);

    useEffect(() => {
        const options = {
            strings: [
                "Full Stack Developer",
                "Web Developer",
                "Software Developer",
                "Coder",
                "Backend Developer"
            ],
            loop: true,
            typeSpeed: 100,
            backSpeed: 80,
            backDelay: 1000
        };
        typed.current = new Typed(el.current, options);

        return () => {
            typed.current.destroy();
        }
    }, []);

    return (
        <div className="type-wrapper">
            <span className="role" ref={el}></span>
        </div>
    );
}

export default TypedComponent;
