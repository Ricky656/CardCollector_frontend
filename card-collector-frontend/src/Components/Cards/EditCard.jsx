import { useEffect } from "react";
import '../../assets/stylesheets/components/_cards.scss'
import useEditCard from "../../hooks/Api/useEditCard";
import CardForm from "./CardForm";
import useHandleAPIError from "../../hooks/useHandleAPIError";
import { useToast } from "../../hooks/useToast";


export default function EditCard({ cardData, onCancel }) {
    const { mutateAsync: editCard, isPending, isSuccess, error } = useEditCard(cardData.id);
    const toast = useToast();
    useEffect(() => {
        if(isSuccess){ 
            onCancel()
            toast.open("Successfully updated a card!", "toast-success")
        }
    }, [isSuccess]);
    
    const submitForm = async(cardData) => {
        try{
            await editCard(cardData)
        }catch{
            useHandleAPIError(error);
        }
    }

    return (
        <div className="card new-card">
            <h4>New Card</h4>
                <CardForm cardData={cardData.data}
                    onSubmit={submitForm}
                    onCancel={onCancel}
                    isPending={isPending}
                    error={error}
                />
        </div>
    )
}