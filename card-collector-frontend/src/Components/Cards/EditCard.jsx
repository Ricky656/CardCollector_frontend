import { useEffect } from "react";
import '../../assets/stylesheets/components/_cards.scss'
import useEditCard from "../../hooks/Api/useEditCard";
import CardForm from "./CardForm";


export default function EditCard({ cardData, onCancel }) {
    const { mutateAsync: editCard, isPending, isSuccess, error } = useEditCard(cardData.id);
    useEffect(() => {
        if(isSuccess){ 
            onCancel()
            //TODO: toast("Successfully created new card!")
        }
    }, [isSuccess]);
    
    const submitForm = async(cardData) => {
        try{
            await editCard(cardData)
        }catch{
            console.log("An error occurred");
            //TODO: toast - explain error
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