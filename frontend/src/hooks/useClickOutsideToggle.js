import { useEffect, useRef, useState } from 'react';

const useClickOutsideToggle = () => {
    const [expanded, setExpanded] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            const ignore = event.target.id;
            if (ignore !== 'dropdown') {
                if (ref.current && !ref.current.contains(event.target)) {
                    console.log(ref.current);
                    setExpanded(false);
                }
            }
        };

        document.addEventListener('mouseup', handleClickOutside);
        return () => {
            document.removeEventListener('mouseup', handleClickOutside);
        };
    }, [ref]);
    return { expanded, setExpanded, ref };
};

export default useClickOutsideToggle;