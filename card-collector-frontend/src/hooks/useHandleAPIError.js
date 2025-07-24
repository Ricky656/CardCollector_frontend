
export default function useHandleAPIError(error, toast) {
    if (error) {
        switch (error.status) {
            case 400:
                break;
            case 401:
                toast.open("Unauthorized, please log in", "toast-danger")
                break;
            default:
                toast.open("An error occurred...", "toast-danger")
        }
    }
}