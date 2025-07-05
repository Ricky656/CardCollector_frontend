import { useQuery } from "@tanstack/react-query";

const api = import.meta.env.VITE_API_URL;

export default function useFetchCards(options){
    const queryOptions = {
        ...options
    };

    return useQuery({
        queryKey: ['cards'],
        queryFn: () => fetchCards(),
        queryOptions
    });
};

const fetchCards = async() => {
    const response = await fetch(
        `${api}/Cards`
    );
    return response.json();
}