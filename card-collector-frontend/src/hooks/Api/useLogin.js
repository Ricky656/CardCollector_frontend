import { useMutation } from "@tanstack/react-query";

const api = import.meta.env.VITE_API_URL;

export default function useLogin(){
    return useMutation({
        mutationFn: ((credentials) => login(credentials)),
        onSuccess: () => { 
            console.log("Successfully logged in");
        }
    });
};

const login = async(credentials) => {
    const response = await fetch(
        `${api}/Users/Login`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: (JSON.stringify({email: credentials.email, password: credentials.password}))
        }
    )
    if(!response.ok){
        const json = await response.json()
        return Promise.reject(json);
    }
    return response.json();
}