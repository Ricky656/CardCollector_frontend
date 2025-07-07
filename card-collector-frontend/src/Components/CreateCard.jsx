import { useEffect, useRef} from "react";
import '../assets/stylesheets/components/_forms.scss';
import '../assets/stylesheets/components/_cards.scss'
import Button from "./UI/Button";
import InputField from "./UI/InputField";
import useCreateCard from "../hooks/Api/useCreateCard";
import FormErrors from "./UI/FormErrors";

export default function CreateCard({ onCancel }) {
    const cardName = useRef(null);
    const { mutateAsync: addCard, isPending, isError, isSuccess, error } = useCreateCard();
    useEffect(() =>{
        cardName.current.focus();
    }, []);

    useEffect(() => {
        if(isSuccess){ 
            onCancel()
            //alert("Successfully created new card!")
        }
    }, [isSuccess]);
    

    return (
        <div className="card new-card">
            <h4>New Card</h4>
                <form className="form" onSubmit={async (e) => {
                    e.preventDefault();
                    try{
                        await addCard(cardName.current.value)
                    }catch{
                        console.log("An error occurred");
                    }
                }}>
                    <InputField cardRef={cardName} name="Card Name" />
                    {isError && <FormErrors errorArray={error.errors.Name} />}
                    <div className="action-row">
                        <Button text="Create" classList="btn-success" />
                        <Button text="Cancel" classList="btn-cancel" handleClick={onCancel} />
                    </div>
                </form>
        </div>
    )
}