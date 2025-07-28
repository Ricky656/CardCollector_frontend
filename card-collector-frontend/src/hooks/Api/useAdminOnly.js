import { useNavigate } from "react-router";
import { useAuthentication } from "../useAuthentication";
import { useToast } from "../useToast";
import { useLayoutEffect } from "react";

const api = import.meta.env.VITE_API_URL;

export default function useAdminOnly() {
    const auth = useAuthentication();
    const nav = useNavigate();
    const toast = useToast();

    useLayoutEffect(() => {
        const response = checkAdmin(auth.AuthFetch);
        if (response.status != 400) {
            nav("/");
            toast.open("Unauthorized", "toast-danger")
        }
    }, [])

}

async function checkAdmin(authFetch) {
    return await authFetch(
        `${api}/Users/Admin`,
        {
        }
    )
}