import { useQuery } from "@tanstack/react-query";

const api = import.meta.env.VITE_API_URL;

export default function useFetchPack(packId, options){
    const queryOptions = {
        ...options
    };

    return useQuery({
        queryKey: ['packs', packId],
        queryFn: () => fetchPack(packId),
        queryOptions
    });
};

const fetchPack = async(packId) => {
    const response = await fetch(
        `${api}/Packs/${packId}`
    );
    return response.json();
}