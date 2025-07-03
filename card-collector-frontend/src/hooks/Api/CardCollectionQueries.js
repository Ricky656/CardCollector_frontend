import { queryOptions } from "@tanstack/react-query";

const api = import.meta.env.VITE_API_URL;

export function userCardCollectionQuery(userId){
    return queryOptions({
        queryKey: ["cardCollection", userId],
        queryFn: () => getUserCardCollection(userId),
    });
}

const getUserCardCollection = async (userId) => {
    await new Promise((resolve) => setTimeout(resolve,1000)); //Adds extra timeout to simulate loading time
    const response = await fetch(
        `${api}/Users/${userId}/Cards`
    );
    return response.json();
};