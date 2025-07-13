import { useMutation, useQueryClient } from "@tanstack/react-query";

const api = import.meta.env.VITE_API_URL;

export default function useDeletePack(){
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ((packId) => deletePack(packId)),
        onSuccess: () => { 
            queryClient.invalidateQueries(['packs'])
        }
    });
};

const deletePack = async(packId) => {
    const response = await fetch(
        `${api}/Packs/${packId}`,
        {
            method: 'DELETE'
        }
    )
    if(!response.ok){
        const error = (data && data.message) || response.status;
        return Promise.reject(error);
    }
    return response
}