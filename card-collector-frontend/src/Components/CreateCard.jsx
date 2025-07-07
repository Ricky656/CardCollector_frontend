import { useEffect, useRef} from "react";
import '../assets/stylesheets/components/_forms.scss';
import '../assets/stylesheets/components/_cards.scss'
import InputField from "./UI/InputField";
import useCreateCard from "../hooks/Api/useCreateCard";
import FormErrors from "./UI/FormErrors";
import FormActions from "./UI/FormActions";

export default function CreateCard({ onCancel }) {
    const cardName = useRef(null);
    const { mutateAsync: addCard, isPending, isError, isSuccess, error } = useCreateCard();
    useEffect(() =>{
        cardName.current.focus();
    }, []);

    useEffect(() => {
        if(isSuccess){ 
            onCancel()
            //TODO: toast("Successfully created new card!")
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
                        //TODO: toast - explain error
                    }
                }}>
                    <InputField cardRef={cardName} name="Card Name" />
                    <FormErrors errorArray={error?.errors?.Name} />
                    <FormActions isPending={isPending} onCancel={onCancel} />
                </form>
        </div>
    )
}