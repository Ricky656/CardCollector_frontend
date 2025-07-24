import { useQuery } from "@tanstack/react-query";
import { useAuthentication } from "../useAuthentication";

const api = import.meta.env.VITE_API_URL;

export default function useFetchCards(options){
    const queryOptions = {
        ...options
    };
    const auth = useAuthentication();

    return useQuery({
        queryKey: ['cards'],
        queryFn: () => fetchCards(auth.AuthFetch),
        queryOptions
    });
};

const fetchCards = async(authFetch) => {
    const response = await authFetch(
        `${api}/Cards`
    );
    return response.json();
}