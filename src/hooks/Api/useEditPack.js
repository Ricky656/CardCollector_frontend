import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuthentication } from "../useAuthentication";

const api = import.meta.env.VITE_API_URL;

export default function useEditPack(packId){
    const queryClient = useQueryClient();
    const auth = useAuthentication();
    return useMutation({
        mutationFn: ((packData) => editPack(packData, auth.AuthFetch)),
        onSuccess: () => { 
            console.log("Successfully edited pack");
            queryClient.invalidateQueries(['packs'], packId)
        }
    });
};

const editPack = async(packData, authFetch) => {
    const response = await authFetch(
        `${api}/Packs/${packData.id}`,
        {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: (JSON.stringify({id: packData.id, name: packData.name, cardIds: packData.cardIds}))
        }
    )
    if(!response.ok){
        const json = await response.json()
        return Promise.reject(json);
    }
    return response
}