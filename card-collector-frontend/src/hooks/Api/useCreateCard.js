import { useMutation, useQueryClient } from "@tanstack/react-query";

const api = import.meta.env.VITE_API_URL;

export default function useCreateCard(){
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ((cardName) => createCard(cardName)),
        onSuccess: () => { 
            console.log("Successfully added card");
            queryClient.invalidateQueries(['cards'])
        }
    });
};

const createCard = async(cardName) => {
    const response = await fetch(
        `${api}/Cards`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({name: cardName})
        }
    )
    if(!response.ok){
        const json = await response.json()
        return Promise.reject(json);
    }
    return response
}