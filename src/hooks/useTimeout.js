import { useEffect, useRef } from "react";


export default function useTimeout(callbackFunction, time){
    const callback = useRef(callbackFunction);

    useEffect(() => {
        callback.current = callbackFunction;
    }, [callbackFunction]);

    useEffect(() => {
        const timeout = setTimeout( () => callback.current(), time);

        return () => clearTimeout(timeout);
    },[]);
}