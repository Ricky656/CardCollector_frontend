import { useMutation, useQueryClient } from "@tanstack/react-query";

const api = import.meta.env.VITE_API_URL;

export default function useEditCard(cardId){
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (({cardName, cardRarity, cardId}) => editCard(cardName, cardRarity, cardId)),
        onSuccess: () => { 
            console.log("Successfully edited card");
            queryClient.invalidateQueries(['cards'], cardId)
        }
    });
};

const editCard = async(cardName, cardRarity, cardId) => {
    const response = await fetch(
        `${api}/Cards/${cardId}`,
        {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: (JSON.stringify({id: cardId, name: cardName, rarity: cardRarity}))
        }
    )
    if(!response.ok){
        const json = await response.json()
        return Promise.reject(json);
    }
    return response
}