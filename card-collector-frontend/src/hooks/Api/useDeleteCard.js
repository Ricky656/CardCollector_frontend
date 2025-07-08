import { useMutation, useQueryClient } from "@tanstack/react-query";

const api = import.meta.env.VITE_API_URL;

export default function useDeleteCard(){
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ((cardId) => deleteCard(cardId)),
        onSuccess: () => { 
            queryClient.invalidateQueries(['cards'])
        }
    });
};

const deleteCard = async(cardId) => {
    const response = await fetch(
        `${api}/Cards/${cardId}`,
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