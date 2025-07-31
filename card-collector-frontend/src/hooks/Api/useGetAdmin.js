import { useQuery } from "@tanstack/react-query";
import { useAuthentication } from "../useAuthentication";

const api = import.meta.env.VITE_API_URL;

export default function useGetAdmin() {
    const auth = useAuthentication();

    return useQuery({
        queryKey: ['admin'],
        queryFn: () => checkAdmin(auth.AuthFetch)
    });
}

const checkAdmin = async(authFetch) => {
    return await authFetch(
        `${api}/Users/Admin`,
        {
        }
    )
}