

export default function useHandleAPIError(error) {
    const toast = useToast();

    if (error) {
        switch (error.status) {
            case 400:
                break;
            default:
                toast.open("An error occurred...", "toast-danger")
        }
    }
}