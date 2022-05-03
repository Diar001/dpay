import React, { useState, useRef, useEffect } from "react";
import { Avatar } from "./Avatar";
import { SupportWindow } from "./SupportWindow";


const SupportEngine = () => {
    const ref = useRef(null)
    const [visible, setVisible] = useState(false);

     useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setVisible(false)
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside); // for preventing an memory-leak
            };
        }, [ref]);

    return (
        <div ref={ref}>
            <SupportWindow 
                visible={visible} 
            />

            <Avatar 
                onClick={() => setVisible(true)}
                style={{ position: 'fixed', bottom: '30px', right: '100px' }}
            />
        </div>
    )
}

export default SupportEngine;

