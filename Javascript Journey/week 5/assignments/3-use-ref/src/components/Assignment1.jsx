import { useEffect, useRef } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {

    const buttonRef = useRef();

    useEffect(() => {
        buttonRef.current.placeholder = "mounted";
    }, []);

    const handleButtonClick = () => {
        buttonRef.current.focus();
        buttonRef.current.placeholder = "Enter the text";
    };

    return (
        <div>
            <input type="text" placeholder="Enter text here" ref={buttonRef}/>
            <button onClick={handleButtonClick}>Focus Input</button>
        </div>
    );
};
