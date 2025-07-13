import MainLayout from "../layouts/MainLayout";
import BoosterForm from "../Components/Boosters/BoosterForm";
import { redirect, useNavigate } from "react-router";
import useCreatePack from "../hooks/Api/useCreatePack";
import { useEffect } from "react";


export default function CreateBoosterPage() {
    const { mutateAsync: addPack, isSuccess, isPending, isError } = useCreatePack();
    const nav = useNavigate();

    const submitForm = async (packData) => {
        try {
            await addPack(packData)
        } catch {
            console.log("An error occurred");
            //TODO: toast - explain error
        }
    }
    useEffect(() => {
        if (isSuccess) {
            //TODO: Toast pack successfully deleted
            nav("/packs");
        }
    }, [isSuccess])

    return (
        <MainLayout>
            <h1>Create New Booster Pack</h1>
            <BoosterForm
                onSubmit={submitForm}
                isPending={isPending}
                isError={isError}
                onCancel={() => { nav("/packs") }
                } />
        </MainLayout>
    )
}