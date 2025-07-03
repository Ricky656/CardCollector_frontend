import { queryOptions, useQuery } from "@tanstack/react-query";

const api = import.meta.env.VITE_API_URL;

export default function useFetchUserCards(userId, options){
    const queryOptions = {
        queryKey: ["userCards", userId],
        ...options
    };

    return useQuery({
        queryOptions,
        queryFn: () => fetchUserCards(userId)
    });
};

const fetchUserCards = async(userId) => {
    const response = await fetch(
        `${api}/Users/${userId}/Cards`
    );
    return response.json();
}