import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuthentication } from "../useAuthentication";

const api = import.meta.env.VITE_API_URL;

export default function useCreateCard(){
    const queryClient = useQueryClient();
    const auth = useAuthentication();
    return useMutation({
        mutationFn: ((cardData) => createCard(cardData, auth.AuthFetch)),
        onSuccess: () => { 
            console.log("Successfully added card");
            queryClient.invalidateQueries(['cards'])
        }
    });
};

const createCard = async(cardData, authFetch) => {
    const response = await authFetch(
        `${api}/Cards`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: (JSON.stringify({name: cardData.name, rarity: cardData.rarity}))
        }
    )
    if(!response.ok){
        const json = await response.json()
        return Promise.reject(json);
    }
    return response
}