import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../useAuthentication";

const api = import.meta.env.VITE_API_URL;

export default function useLogin(){
    const queryClient = useQueryClient();
    const auth = useContext(AuthContext);
    return useMutation({
        mutationFn: ((credentials) => login(credentials, auth.AuthFetch)),
        onSuccess: () => { 
            console.log("Successfully logged in");
        }
    });
};

const login = async(credentials, authFetch) => {
    const response = await authFetch(
        `${api}/Users/Login`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: (JSON.stringify({email: credentials.email, password: credentials.password}))
        }
    )
    if(!response.ok){
        const json = await response.json()
        return Promise.reject(json);
    }
    return response.json();
}