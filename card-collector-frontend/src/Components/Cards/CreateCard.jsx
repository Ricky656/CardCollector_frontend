import { useEffect } from "react";
import '../../assets/stylesheets/components/_forms.scss';
import '../../assets/stylesheets/components/_cards.scss';
import useCreateCard from "../../hooks/Api/useCreateCard";

import CardForm from "./CardForm";
import { useToast } from "../../hooks/useToast";
import useHandleAPIError from "../../hooks/useHandleAPIError";
import useAdminOnly from "../../hooks/Api/useAdminOnly";

export default function CreateCard({ onCancel }) {
    const { mutateAsync: addCard, isPending, isSuccess, error } = useCreateCard();
    const toast = useToast();
    useAdminOnly();

    useEffect(() => {
        if(isSuccess){ 
            onCancel()
            toast.open("Successfully created new card!", "toast-success")
        }
    }, [isSuccess]);
    
    const submitForm = async(cardData) => {
        try{
            await addCard(cardData)
        }catch{
            useHandleAPIError(error);
        }
    }

    return (
        <div className="card">
            <h4>New Card</h4>
                <CardForm
                    onSubmit={submitForm}
                    onCancel={onCancel}
                    isPending={isPending}
                    error={error}
                />
        </div>
    )
}