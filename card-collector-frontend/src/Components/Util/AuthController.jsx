import { useLayoutEffect, useState } from "react";
import { AuthContext } from "../../hooks/useAuthentication";
import useRefreshToken from "../../hooks/Api/useRefreshToken";
import { useNavigate } from "react-router";

const api = import.meta.env.VITE_API_URL;

export default function AuthController({ children }) {
    const [token, setToken] = useState();
    const [currentUser, setCurrentUser] = useState();
    const getNewToken = useRefreshToken;
    const nav = useNavigate();

    useLayoutEffect(() => {
        setToken(localStorage.getItem("accessToken"));
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        setCurrentUser(currentUser);
    }, []);

    function HandleLogin(credentials) {
        setToken(credentials.token);
        setCurrentUser(credentials.currentUser);
        localStorage.setItem("accessToken", credentials.token);
        localStorage.setItem("currentUser", JSON.stringify(credentials.currentUser));
    }

    function HandleLogout(redirectTo) {
        setToken(null);
        setCurrentUser(null);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("currentUser");
        if (redirectTo) { nav(redirectTo) }
    }

    async function AuthFetch(request, options) {
        console.log("using Auth fetch");
        if (!options) { options = { headers: {} }; }
        options.headers = {
            ...options.headers,
            Authorization: `Bearer ${token}`
        }
        //options.credentials = 'include';
        let response = await fetch(request, options);
        if (response.status == "401") {
            const refreshResponse = await getNewToken(currentUser?.id);
            console.log(refreshResponse);
            if (!refreshResponse.ok) {
                HandleLogout("/login");
                console.log("Refresh token invalid, logging out");
            } else {
                const data = await refreshResponse.json();
                const currentUser = { id: data.id, username: data.username, email: data.email }
                HandleLogin({ token: data.token, currentUser: currentUser });
                console.log("Refreshed access token! Retrying query..");
                options.headers.Authorization = `Bearer ${data.token}`;
                response = await fetch(request, options);
            }
        }
        return response;
    }

    return (
        <AuthContext.Provider value={{ currentUser, token, AuthFetch, HandleLogin, HandleLogout }}>
            {children}
        </AuthContext.Provider>
    );
}