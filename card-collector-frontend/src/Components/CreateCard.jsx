import { useEffect, useRef} from "react";
import '../assets/stylesheets/components/_forms.scss';
import '../assets/stylesheets/components/_cards.scss'
import InputField from "./UI/InputField";
import useCreateCard from "../hooks/Api/useCreateCard";
import FormErrors from "./UI/FormErrors";
import FormActions from "./UI/FormActions";
import Dropdown from "./UI/Dropdown";
import { CardRarity } from "../Util/Constants";
import CardForm from "./Cards/CardForm";

export default function CreateCard({ onCancel }) {
    const cardName = useRef(null);
    const cardRarity = useRef(null);
    const { mutateAsync: addCard, isPending, isError, isSuccess, error } = useCreateCard();
    
    useEffect(() => {
        cardName.current.focus();
    }, []);

    useEffect(() => {
        if(isSuccess){ 
            onCancel()
            //TODO: toast("Successfully created new card!")
        }
    }, [isSuccess]);
    
    const submitForm = async() => {
        try{
            await addCard({
                cardName: cardName.current.value,
                cardRarity: cardRarity.current.value
            })
        }catch{
            console.log("An error occurred");
            //TODO: toast - explain error
        }
    }

    return (
        <div className="card new-card">
            <h4>New Card</h4>
                <CardForm cardData={{name: cardName, rarity: cardRarity}}
                    onSubmit={submitForm}
                    onCancel={onCancel}
                    isPending={isPending}
                    error={error}
                />
        </div>
    )
}