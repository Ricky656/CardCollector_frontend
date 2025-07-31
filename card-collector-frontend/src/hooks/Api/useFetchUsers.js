import { useQuery } from "@tanstack/react-query";
import { useAuthentication } from "../useAuthentication";

const api = import.meta.env.VITE_API_URL;

export default function useFetchUsers(options){
    const auth = useAuthentication();
    const queryOptions = {
        ...options
    };

    return useQuery({
        queryKey: ['users'],
        queryFn: () => fetchUsers(auth.AuthFetch),
        queryOptions
    });
};

const fetchUsers = async(authFetch) => {
    const response = await authFetch(
        `${api}/Users`
    );
    return response.json();
}