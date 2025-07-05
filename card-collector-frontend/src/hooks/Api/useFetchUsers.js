import { useQuery } from "@tanstack/react-query";

const api = import.meta.env.VITE_API_URL;

export default function useFetchUsers(options){
    const queryOptions = {
        ...options
    };

    return useQuery({
        queryKey: ['users'],
        queryFn: () => fetchUsers(),
        queryOptions
    });
};

const fetchUsers = async() => {
    const response = await fetch(
        `${api}/Users`
    );
    return response.json();
}