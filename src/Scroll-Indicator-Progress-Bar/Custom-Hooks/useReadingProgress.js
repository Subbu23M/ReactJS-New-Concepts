import { useState,useEffect } from "react";

const useReadingProgress = () => {
    const [initialValue, setInitialValue] = useState(0);

    const logicToProgress = () => {
        const updateScrollCompletion = () => {
            // console.log('hello');
            const scrollProgress = window.scrollY;

            const scrollHeightTwo = document.body.scrollHeight - window.innerHeight;

            if (scrollHeightTwo) {
                const result = Number((scrollProgress / scrollHeightTwo).toFixed(2)) * 100;

                // Invoke State function
                setInitialValue(result);
            }
        }
        window.addEventListener('scroll', updateScrollCompletion);

        return () => {
            window.removeEventListener('scroll', updateScrollCompletion);
        }
    }

    // Invoke useEffect Hook
    useEffect(logicToProgress, []);

    return initialValue;
}

export default useReadingProgress