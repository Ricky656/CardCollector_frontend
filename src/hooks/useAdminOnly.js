import { useNavigate } from "react-router";
import useGetAdmin from "./Api/useGetAdmin";
import { useToast } from "./useToast";


export default function useAdminOnly() {
    const admin = useGetAdmin();
    const toast = useToast();
    const nav = useNavigate();

    if (!admin.isSuccess) {
        return null;
    }
    if (admin.isSuccess && admin.data.status != 200) {
        nav("/");
        toast.open("Unauthorized", "toast-danger");
    } else {
        return "authorized";
    }

}