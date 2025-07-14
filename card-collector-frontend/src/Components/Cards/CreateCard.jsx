import { useEffect } from "react";
import '../../assets/stylesheets/components/_forms.scss';
import '../../assets/stylesheets/components/_cards.scss';
import useCreateCard from "../../hooks/Api/useCreateCard";

import CardForm from "./CardForm";
import { useToast } from "../../hooks/useToast";

export default function CreateCard({ onCancel }) {
    const { mutateAsync: addCard, isPending, isSuccess, error } = useCreateCard();
    const toast = useToast();

    useEffect(() => {
        if(isSuccess){ 
            onCancel()
            toast.open("Successfully created new card!", "toast-success")
            //TODO: toast("Successfully created new card!")
        }
    }, [isSuccess]);
    
    const submitForm = async(cardData) => {
        try{
            await addCard(cardData)
        }catch{
            if(error){
                switch(error.status){
                    case 400: 
                        break;
                    default: 
                        toast.open("An error occurred...", "toast-danger")
                }
            }
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