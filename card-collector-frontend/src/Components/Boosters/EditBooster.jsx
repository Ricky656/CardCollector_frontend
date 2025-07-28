import { useEffect } from "react";
import useEditPack from "../../hooks/Api/useEditPack";
import BoosterForm from "./BoosterForm";
import useHandleAPIError from "../../hooks/useHandleAPIError";
import { useToast } from "../../hooks/useToast";
import useAdminOnly from "../../hooks/Api/useAdminOnly";


export default function EditPack({packData, onCancel}){
    const {mutateAsync: editPack, isSuccess, isPending, error} = useEditPack(packData.id);
    const toast = useToast();
    useAdminOnly();
    useEffect(() => {
        if(isSuccess){
            onCancel();
        }
    }, [isSuccess])
    const submitForm = async(packData) => {
        try{
            await editPack(packData)
            toast.open("Successfully updated booster pack!", "toast-success")
        }catch{
            useHandleAPIError(error);
        }
    }

    return(
        <BoosterForm packData={packData.data} 
            isPending={isPending}
            error={error}
            onCancel={onCancel}
            onSubmit={submitForm}
        />
    )
}