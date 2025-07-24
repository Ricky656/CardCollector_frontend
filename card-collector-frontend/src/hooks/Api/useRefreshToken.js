const api = import.meta.env.VITE_API_URL;

export default async function useRefreshToken(id) {
        console.log("fetching refresh token")
        return await fetch(
            `${api}/Users/Refresh`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: (JSON.stringify({ userId: id }))
            }
        )
    }