import { useMutation, useQueryClient } from "@tanstack/react-query";

const api = import.meta.env.VITE_API_URL;

export default function useCreatePack(){
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ((packData) => createCard(packData)),
        onSuccess: () => { 
            console.log("Successfully added booster pack");
            queryClient.invalidateQueries(['packs'])
        }
    });
};

const createCard = async(packData) => {
    const response = await fetch(
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