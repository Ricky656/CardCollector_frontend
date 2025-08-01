import { useQuery } from "@tanstack/react-query";

const api = import.meta.env.VITE_API_URL;

export default function useFetchCard(cardId, options){
    const queryOptions = {
        ...options
    };

    return useQuery({
        queryKey: ['cards', cardId],
        queryFn: () => fetchCard(cardId),
        queryOptions
    });
};

const fetchCard = async(cardId) => {
    const response = await fetch(
        `${api}/Cards/${cardId}`
    );
    return response.json();
}