import { useEffect } from "react";
import useEditPack from "../../hooks/Api/useEditPack";
import BoosterForm from "./BoosterForm";


export default function EditPack({packData, onCancel}){
    const {mutateAsync: editPack, isSuccess, isPending, error} = useEditPack(packData.id);
    useEffect(() => {
        if(isSuccess){
            onCancel();
            //TODO: toast("Successfully created new card!")
        }
    }, [isSuccess])
    const submitForm = async(packData) => {
        try{
            await editPack(packData)
        }catch{
            console.log("An error occurred");
            //TODO: toast - explain error
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