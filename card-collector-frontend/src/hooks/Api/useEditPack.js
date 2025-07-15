import { useMutation, useQueryClient } from "@tanstack/react-query";

const api = import.meta.env.VITE_API_URL;

export default function useEditPack(packId){
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ((packData) => editPack(packData)),
        onSuccess: () => { 
            console.log("Successfully edited pack");
            queryClient.invalidateQueries(['packs'], packId)
        }
    });
};

const editPack = async(packData) => {
    const response = await fetch(
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