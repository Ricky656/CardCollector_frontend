import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuthentication } from "../useAuthentication";

const api = import.meta.env.VITE_API_URL;

export default function useCreatePack(){
    const queryClient = useQueryClient();
    const auth = useAuthentication();
    return useMutation({
        mutationFn: ((packData) => createCard(packData, auth.AuthFetch)),
        onSuccess: () => { 
            console.log("Successfully added booster pack");
            queryClient.invalidateQueries(['packs'])
        }
    });
};

const createCard = async(packData, authFetch) => {
    const response = await authFetch(
        `${api}/Packs`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: (JSON.stringify({name: packData.name, cardIds: packData.cardIds}))
        }
    )
    if(!response.ok){
        const json = await response.json()
        return Promise.reject(json);
    }
    return response
}