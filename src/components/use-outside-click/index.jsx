import { useEffect } from "react";

export default function useOutsideClick(ref, handler) {
    
    useEffect(() => {

        function listener(event) {
            if (!ref.current || ref.current.contains(event.target)) {
                return
            }

            handler(event)
        }
    }, [handler,ref])
}