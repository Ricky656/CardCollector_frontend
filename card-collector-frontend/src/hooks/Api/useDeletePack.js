import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuthentication } from "../useAuthentication";

const api = import.meta.env.VITE_API_URL;

export default function useDeletePack() {
    const queryClient = useQueryClient();
    const auth = useAuthentication();
    return useMutation({
        mutationFn: ((packId) => deletePack(packId, auth.AuthFetch)),
        onSuccess: () => {
            queryClient.invalidateQueries(['packs'])
        }
    });
};

const deletePack = async (packId, authFetch) => {
    const response = await authFetch(
        `${api}/Packs/${packId}`,
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