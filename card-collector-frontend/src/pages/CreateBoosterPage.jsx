import MainLayout from "../layouts/MainLayout";
import BoosterForm from "../Components/Boosters/BoosterForm";
import { redirect, useNavigate } from "react-router";
import useCreatePack from "../hooks/Api/useCreatePack";
import { useEffect } from "react";
import useHandleAPIError from "../hooks/useHandleAPIError";
import { useToast } from "../hooks/useToast";
import useAdminOnly from "../hooks/useAdminOnly";


export default function CreateBoosterPage() {
    const { mutateAsync: addPack, isSuccess, isPending, isError, error } = useCreatePack();
    const nav = useNavigate();
    const toast = useToast();
    const admin = useAdminOnly();

    const submitForm = async (packData) => {
        try {
            await addPack(packData)
            toast.open("Successfully created new booster pack!", "toast-success")
        } catch {
            useHandleAPIError(error);
        }
    }
    useEffect(() => {
        if (isSuccess) {
            nav("/packs");
        }
    }, [isSuccess])
    
    if (!admin) { return "Checking Authorization" }

    return (
        <MainLayout>
            <h1>Create New Booster Pack</h1>
            <BoosterForm
                onSubmit={submitForm}
                isPending={isPending}
                isError={isError}
                error={error}
                onCancel={() => { nav("/packs") }
                } />
        </MainLayout>
    )
}