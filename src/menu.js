import React, { useState } from "react";
import './menu.css'

export default function Menu() {
    const [menuVisible, setMenuVisible] = useState(false);

    const baseNOptions = [
        "Decimal (Dec)",
        "Binary (Bin)",
        "Octal (Oct)",
        "Hexadecimal (Hex)",
        
    ];

    return (
        <div className="container">
           
            <button className="menu-button" onClick={() => setMenuVisible(true)}>
                Open Base N Menu
            </button>

        
            {menuVisible && (
                <div className="menu-overlay">
                    <div className="menu-content">
                        <h3>Select Base</h3>
                        <ul>
                            {baseNOptions.map((option, index) => (
                                <li key={index} onClick={() => setMenuVisible(false)}>
                                    {option}
                                </li>
                            ))}
                        </ul>
                        <button className="close-button" onClick={() => setMenuVisible(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}
