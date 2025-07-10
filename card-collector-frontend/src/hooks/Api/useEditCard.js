import { useMutation, useQueryClient } from "@tanstack/react-query";

const api = import.meta.env.VITE_API_URL;

export default function useEditCard(cardId){
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ((cardData) => editCard(cardData)),
        onSuccess: () => { 
            console.log("Successfully edited card");
            queryClient.invalidateQueries(['cards'], cardId)
        }
    });
};

const editCard = async(cardData) => {
    const response = await fetch(
        `${api}/Cards/${cardData.id}`,
        {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: (JSON.stringify({id: cardData.id, name: cardData.name, rarity: cardData.rarity}))
        }
    )
    if(!response.ok){
        const json = await response.json()
        return Promise.reject(json);
    }
    return response
}