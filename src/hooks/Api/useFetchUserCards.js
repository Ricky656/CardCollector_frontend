import { useQuery } from "@tanstack/react-query";

const api = import.meta.env.VITE_API_URL;

export default function useFetchUserCards(userId, options){
    const queryOptions = {
        ...options
    };

    return useQuery({
        queryKey: ['userCards', userId],
        queryFn: () => fetchUserCards(userId),
        queryOptions
    });
};

const fetchUserCards = async(userId) => {
    const response = await fetch(
        `${api}/Users/${userId}/Cards`
    );
    return response.json();
}