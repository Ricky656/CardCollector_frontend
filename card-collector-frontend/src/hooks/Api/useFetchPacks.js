import { useQuery } from "@tanstack/react-query";

const api = import.meta.env.VITE_API_URL;

export default function useFetchPacks(options){
    const queryOptions = {
        ...options
    };

    return useQuery({
        queryKey: ['packs'],
        queryFn: () => fetchPacks(),
        queryOptions
    });
};

const fetchPacks = async() => {
    const response = await fetch(
        `${api}/Packs`
    );
    return response.json();
}