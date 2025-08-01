import { useMemo, useState } from "react";
import "../../assets/stylesheets/components/_toast.scss"
import { ToastContext } from "../../hooks/useToast";
import useTimeout from "../../hooks/useTimeout";
import { MAX_TOASTS, TOAST_TIMEOUT } from "../../Util/Constants";

function Toast({ message, close, classList }) {
    useTimeout(() => {
        close()
    }, TOAST_TIMEOUT)

    return (
        <div className={`toast ${classList}`}>
            <button className="toast-close" onClick={close}>{"\u274C"}</button>
            <div className="toast-message">
                {message}
            </div>
        </div>
    )
}

export function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([]);

    function openToast(message, classList) {
        const toast = {
            id: Date.now(),
            message: message,
            classList: classList
        }
        setToasts((previous) => [...previous, toast])
        if (toasts.length >= (MAX_TOASTS-1)) {
            setToasts((previous) => previous.slice(toasts.length - (MAX_TOASTS-1)));
        }
    }

    function closeToast(toastId) {
        setToasts((previous) => previous.filter(t => t.id !== toastId));
    }

    return (
        <ToastContext.Provider value={{ open: openToast, close: closeToast }}>
            {children}
            <div className="toast-group">
                {toasts && toasts.map((t) => {
                    return (<Toast
                        key={t.id}
                        message={t.message}
                        classList={t.classList}
                        close={() => closeToast(t.id)}
                    />)
                })}
            </div>
        </ToastContext.Provider>
    )
}