import { useEffect } from "react";
import '../../assets/stylesheets/components/_forms.scss';
import '../../assets/stylesheets/components/_cards.scss';
import useCreateCard from "../../hooks/Api/useCreateCard";

import CardForm from "./CardForm";

export default function CreateCard({ onCancel }) {
    const { mutateAsync: addCard, isPending, isSuccess, error } = useCreateCard();

    useEffect(() => {
        if(isSuccess){ 
            onCancel()
            //TODO: toast("Successfully created new card!")
        }
    }, [isSuccess]);
    
    const submitForm = async(cardData) => {
        try{
            await addCard(cardData)
        }catch{
            console.log("An error occurred");
            //TODO: toast - explain error
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