import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuthentication } from "../useAuthentication";

const api = import.meta.env.VITE_API_URL;

export default function useDeleteCard() {
    const queryClient = useQueryClient();
    const auth = useAuthentication();
    return useMutation({
        mutationFn: ((cardId) => deleteCard(cardId, auth.AuthFetch)),
        onSuccess: () => {
            queryClient.invalidateQueries(['cards'])
        }
    });
};

const deleteCard = async (cardId, authFetch) => {
    const response = await authFetch(
        `${api}/Cards/${cardId}`,
        {
            method: 'DELETE'
        }
    )
    if (!response.ok) {
        const error = (data && data.message) || response.status;
        return Promise.reject(error);
    }
    return response
}