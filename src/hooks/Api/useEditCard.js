import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuthentication } from "../useAuthentication";

const api = import.meta.env.VITE_API_URL;

export default function useEditCard(cardId){
    const queryClient = useQueryClient();
    const auth = useAuthentication();
    return useMutation({
        mutationFn: ((cardData) => editCard(cardData, auth.AuthFetch)),
        onSuccess: () => { 
            queryClient.invalidateQueries(['cards'], cardId)
        }
    });
};

const editCard = async(cardData, authFetch) => {
    let response = await authFetch(
        `${api}/Cards/${cardData.id}`,
        {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: (JSON.stringify({id: cardData.id, name: cardData.name, rarity: cardData.rarity}))
        }
    )
    if(!response.ok){
        if(response.status == "400"){
            response = await response.json()
        }
        return Promise.reject(response);
    }
    return response
}