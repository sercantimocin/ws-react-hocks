import {useEffect, useState} from "react";

export function useOnline() {
    const [isOnline, setOnline] = useState(navigator.onLine)

    function offlineHandler() {
        setOnline(false)
    }

    function onlineHandler() {
        setOnline(true)
    }

    useEffect(() => {
        setOnline(navigator.onLine)
        window.addEventListener('online', onlineHandler)
        window.addEventListener('offline', offlineHandler)

        return () => {
            window.removeEventListener('online', onlineHandler)
            window.removeEventListener('offline', offlineHandler)
        }
    }, [])
    return {isOnline, setOnline};
}